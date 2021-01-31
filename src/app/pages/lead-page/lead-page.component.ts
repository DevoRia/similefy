import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "lottie-web";
import {MatDialog} from "@angular/material/dialog";
import {LoginPopupComponent} from "../../components/popups/login-popup/login-popup.component";

@Component({
  selector: 'app-lead-page',
  templateUrl: './lead-page.component.html',
  styleUrls: ['./lead-page.component.scss']
})
export class LeadPageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginPopup() {
    this.dialog.open(LoginPopupComponent);
  }

  animationOptions: AnimationOptions = {
    path: '/assets/animations/laptop-working.json',
  };

}
