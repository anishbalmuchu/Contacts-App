import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { contacts } from '../../../assets/mock-data/data';

import { ITableContact } from '../../model/contact';
import { AddContactComponent } from '../add-contact/add-contact.component';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss'],
})
export class ViewContactComponent implements OnInit {
  rowData: Array<ITableContact> = [];
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

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.addSerial();
    this.dataSource = new MatTableDataSource(this.rowData);
  }

  addSerial() {
    const tData: Array<ITableContact> = [];
    const data = contacts;
    data.forEach((item, index) => {
      tData.push({
        del: (index + 1).toString(),
        serial: (index + 1).toString(),
        ...item,
      });
    });
    this.rowData = tData;
  }

  edit(id) {
    console.log(id);
  }

  delete(id) {
    console.log(id);
  }

  addNew(): void {
    const dialogRef = this.dialog.open(AddContactComponent, {
      maxHeight: '60vh',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
