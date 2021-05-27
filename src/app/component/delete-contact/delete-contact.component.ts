import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ContactApiService } from '../../shared/services/contact-api/contact-api.service';
import { SnackBarService } from '../../shared/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss'],
})
export class DeleteContactComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactApiService: ContactApiService, private snackBarService: SnackBarService
  ) {}

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close({ status: false });
  }

  delete() {
    console.log(this.data.contact.id);
    this.dialogRef.close({ status: true });
    this.snackBarService.openSnackBar('Contact Deleted', 'Okay');
    // this.confirmDelete(this.data.contact.id);
  }

  confirmDelete(payload) {
    this.contactApiService.deleteContacts(payload).subscribe((data) => {
      if (data.error) {
        // Show error msg
      } else {
        // Show success msg
        this.dialogRef.close({ status: true });
        this.snackBarService.openSnackBar('Contact Deleted', 'Okay');
      }
    });
  }
}
