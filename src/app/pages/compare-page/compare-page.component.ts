import { Component, OnInit } from '@angular/core';
import {ProjectRepositoryService} from "../../services/project/project-repository.service";
import {NotifyService} from "../../services/notify.service";
import {SubscriptionManagerService} from "../../services/subscription-manager.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Project} from "../../models/project/project";
import {ProjectService} from "../../services/project/project.service";

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.scss']
})
export class ComparePageComponent implements OnInit {

  loading: boolean = true;
  project: Project;

  constructor(private projectService: ProjectService,
              private notify: NotifyService,
              private router: Router,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    const [,,id] = this.router.url.split('/');
    const project$ = this.projectService.getProjectById(id)
      .subscribe((project) => {
        this.project = project;
        project$.unsubscribe();
        this.loading = false;
      })
  }



}
