import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private matSnackBar: MatSnackBar) { }

  showInfo(message: string) {
    this.matSnackBar.open(message);
  }

}
