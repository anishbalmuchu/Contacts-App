import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { contacts } from '../../../assets/mock-data/data';

import { ITableContact } from '../../model/contact';
import { CommonContactComponent } from '../common-contact/common-contact.component';
import { ContactApiService } from '../../shared/services/contact-api/contact-api.service';
import { DeleteContactComponent } from '../delete-contact/delete-contact.component';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss'],
})
export class ViewContactComponent implements OnInit {
  localContacts: Array<any>;
  dataSource: MatTableDataSource<ITableContact>;
  displayedColumns: Array<string> = [
    'serial',
    'firstName',
    'lastName',
    'email',
    'phone',
    'status',
    'id',
    'del',
  ];

  constructor(public dialog: MatDialog, private contactApiService: ContactApiService) {
    this.localContacts = contacts;
  }

  ngOnInit() {
    // this.fetchContacts();
    this.localDataLoad();
  }
  fetchContacts() {
    this.contactApiService.getContacts().subscribe(data => {
      if (data.error) {
        //Show error msg
        } else {
          //Show success msg
          this.dataSource = new MatTableDataSource(this.addSerial(data));
        }
    });
  }

  localDataLoad() {
    this.dataSource = new MatTableDataSource(this.addSerial(this.localContacts));
  }

  addSerial(data) {
    const tData = [];
    data.forEach((item, index) => {
      tData.push({
        del: (index + 1).toString(),
        serial: (index + 1).toString(),
        ...item,
      });
    });
    return tData;
  }

  addNew(): void {
    const dialogRef = this.dialog.open(CommonContactComponent, {
      disableClose: true,
      maxHeight: '60vh',
      data: {
        contact: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          status: 'active',
        },
        mode: 'add',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.status) {
        // this.fetchContacts();      ------ Uncomment when using calling service
        const arr = this.localContacts.map((obj) => obj.id);
        let newId = Math.floor(Math.random() * 1000);
        while (arr.includes(newId)) {
          newId = Math.floor(Math.random() * 1000);
        }
        this.localContacts.push({...result.contact, id: newId});
        this.localDataLoad();        // ------ Comment this if using services
      } else {
        console.log(result);
      }
    });
  }

  edit(id) {
    const eContact = this.dataSource.data.find(item => item.id === id);
    const dialogRef = this.dialog.open(CommonContactComponent, {
      disableClose: true,
      maxHeight: '60vh',
      data: {
        contact: {...eContact},
        mode: 'edit',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.status) {
        // this.fetchContacts();      ------ Uncomment when using calling service
        const index = this.localContacts.findIndex(obj => obj.id === result.contact.id);
        if (index > -1) {
          this.localContacts[index] = result.contact;
        }
        this.localDataLoad();        // ------ Comment this if using services
      } else {
        console.log(result);
      }
    });
  }

  delete(id) {
    const eContact = this.dataSource.data.find(item => item.id === id);
    const dialogRef = this.dialog.open(DeleteContactComponent, {
      disableClose: true,
      minWidth: '350px',
      maxWidth: '400px',
      maxHeight: '250px',
      minHeight: '200px',
      data: {
        contact: {...eContact},
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.status) {
        // this.fetchContacts();      ------ Uncomment when using calling service
        this.localContacts = this.localContacts.filter(obj => obj.id !== id);
        this.localDataLoad();        // ------ Comment this if using services
      } else {
        console.log(result);
      }
    });
  }
}
