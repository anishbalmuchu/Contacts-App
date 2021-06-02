import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IContact } from '../../../app/model/contact';
import { ContactApiService } from '../../shared/services/contact-api/contact-api.service';
import { SnackBarService } from '../../shared/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-common-contact',
  templateUrl: './common-contact.component.html',
  styleUrls: ['./common-contact.component.scss']
})
export class CommonContactComponent implements OnInit {
  status = 'active';

  constructor(
    public dialogRef: MatDialogRef<CommonContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactApiService: ContactApiService,  private snackBarService: SnackBarService
  ) {}

  ngOnInit() {}

  cancel(): void {
    this.dialogRef.close({ status: false });
  }

  submit() {
    if (
      this.data.contact.email !== '' &&
      this.data.contact.firstName !== '' &&
      this.data.contact.lastName !== '' &&
      this.data.contact.phone !== ''
    ) {
      const payload: IContact = {
        email: this.data.contact.email,
        firstName: this.data.contact.firstName,
        lastName: this.data.contact.lastName,
        phone: this.data.contact.phone,
        status: this.data.contact.status,
      };
      console.log(payload);
      if (this.data.mode === 'add') {
        // this.addContactSubmit(payload);
        this.snackBarService.openSnackBar('Contact Added', 'Okay');
      } else {
        // this.editContactSubmit(payload);
        payload.id = this.data.contact.id;
        this.snackBarService.openSnackBar('Contact Saved', 'Okay');
      }
      this.dialogRef.close({ status: true, contact: payload });
    } else {
      // Check mandatory fields
        this.snackBarService.openSnackBar('Enter mandatory fields', 'Okay');
    }
  }

  addContactSubmit(payload) {
    this.contactApiService.addContacts(payload).subscribe((data) => {
      if (data.error) {
        // Show error msg
        this.snackBarService.openSnackBar('Contact couldn\'t be added', 'Okay');
      } else {
        // Show success msg
        this.dialogRef.close({ status: true });
        this.snackBarService.openSnackBar('Contact Added', 'Okay');
      }
    });
  }

  editContactSubmit(payload) {
    this.contactApiService.editContact(payload).subscribe((data) => {
      if (data.error) {
        // Show error msg
        this.snackBarService.openSnackBar('Contact couldn\'t be saved', 'Okay');
      } else {
        // Show success msg
        this.dialogRef.close({ status: true });
        this.snackBarService.openSnackBar('Contact saved', 'Okay');
      }
    });
  }
}
