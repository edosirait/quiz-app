import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-simple-modals',
  templateUrl: './simple-modals.component.html',
  styleUrls: ['./simple-modals.component.scss']
})
export class SimpleModalsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {score: number},
              private dialogRef: MatDialogRef<SimpleModalsComponent>) { }

  onClose() {
    this.dialogRef.close(true);
  }

}
