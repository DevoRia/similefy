import {Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {

  title: string;
  message: string;

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmPopupComponent>) {
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit(): void {

  }

  yesClick() {
    this.dialogRef.close(true)
  }

  noClick() {
    this.dialogRef.close(false)
  }

}
