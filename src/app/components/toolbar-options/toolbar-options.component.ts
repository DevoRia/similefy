import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/user/auth.service";
import {NotifyService} from "../../services/notify.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar-options',
  templateUrl: './toolbar-options.component.html',
  styleUrls: ['./toolbar-options.component.scss']
})
export class ToolbarOptionsComponent implements OnInit {

  page: string = ''

  constructor(private authService: AuthService,
              private notify: NotifyService,
              private router: Router
  ) { }

  ngOnInit(): void {
    const [,page] = this.router.url.split('/');
    this.page = page;
  }

  async goToSettings() {
    return this.router.navigate(['settings'])
  }

  async logout() {
    try {
      await this.authService.logout();
      await this.router.navigate(['lead'])
    } catch (e) {
      this.notify.showInfo(e.message);
    }
  }

}
