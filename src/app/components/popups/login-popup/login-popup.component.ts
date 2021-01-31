import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../../services/user/auth.service";
import {NotifyService} from "../../../services/notify.service";

@Component({
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService,
              public dialog: MatDialog,
              private notify: NotifyService,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
  }

  async auth() {
    try {
      await this.authService.login();
      await this.router.navigate(['library'])
    } catch (e) {
      this.notify.showInfo(e.message);
    } finally {
      this.dialog.closeAll();
    }
  }

}
