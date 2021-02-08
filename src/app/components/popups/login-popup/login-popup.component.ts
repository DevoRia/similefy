import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../../services/user/auth.service";
import {NotifyService} from "../../../services/notify.service";
import {AuthMode} from "../../../services/user/auth.mode";
import {TranslateService} from "@ngx-translate/core";

@Component({
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router,
              private authService: AuthService,
              private translateService: TranslateService,
              public dialog: MatDialog,
              private notify: NotifyService,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
  }

  authModes() {
    return AuthMode;
  }

  async auth(mode: AuthMode) {
    try {
      const signIn = await this.authService.login(mode);

      if (typeof signIn === 'function') {
        await signIn(this.email, this.password);
      }
      await this.router.navigate(['library'])
    } catch (e) {
      this.notify.showInfo(e.message);
    } finally {
      this.dialog.closeAll();
    }
  }

  async signUp() {
    try {
     await this.authService.signUp(this.email);
      this.notify.showInfo(this.translateService.instant('login.invitation'));
    } catch (e) {
      this.notify.showInfo(e.message);
    }
  }

  async forgotPassword() {
    try {
      await this.authService.forgotPassword(this.email);
      this.notify.showInfo(this.translateService.instant('login.invitation'));
    } catch (e) {
      this.notify.showInfo(e.message);
    }
  }

}
