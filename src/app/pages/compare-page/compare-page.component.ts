import { Component, OnInit } from '@angular/core';
import {ProjectRepositoryService} from "../../services/project/project-repository.service";
import {NotifyService} from "../../services/notify.service";
import {SubscriptionManagerService} from "../../services/subscription-manager.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.scss']
})
export class ComparePageComponent implements OnInit {

  loading: boolean = false;

  constructor(private projectRepo: ProjectRepositoryService,
              private notify: NotifyService,
              private router: Router,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    const [,,id] = this.router.url.split('/');
    this.projectRepo.findById(id)
  }



}
