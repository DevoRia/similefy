import {Component, OnDestroy, OnInit} from '@angular/core';
import {Projects} from "@angular/cli/lib/config/schema";
import {ProjectRepositoryService} from "../../services/project/project-repository.service";
import {NotifyService} from "../../services/notify.service";
import {MatDialog} from "@angular/material/dialog";
import {UploadPopupComponent} from "../../components/popups/upload-popup/upload-popup.component";
import {Subscription} from "rxjs";
import {SubscriptionManagerService} from "../../services/subscription-manager.service";

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {

  projects: Projects[] = []
  loading: boolean = true;

  constructor(private projectRepo: ProjectRepositoryService,
              private notify: NotifyService,
              private subscriptionManagerService: SubscriptionManagerService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll();
  }

  isEmpty() {
    return (this.projects.length === 0)
  }

  findAll() {
    const $findAll = this.projectRepo.findAll()
      .subscribe(
        (projects) => {
          this.projects = projects;
          this.loading = false;
        },
        (err) => {
          this.notify.showInfo(err.message);
          this.loading = false;
        })
    this.subscriptionManagerService.addSubscription('findAll', $findAll);
  }

  openUploadPopup() {
    this.matDialog.open(UploadPopupComponent);
  }



}
