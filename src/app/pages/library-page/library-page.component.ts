import {Component, OnDestroy, OnInit} from '@angular/core';
import {Projects} from "@angular/cli/lib/config/schema";
import {ProjectRepositoryService} from "../../services/project/project-repository.service";
import {NotifyService} from "../../services/notify.service";
import {MatDialog} from "@angular/material/dialog";
import {UploadPopupComponent} from "../../components/popups/upload-popup/upload-popup.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit, OnDestroy {

  projects: Projects[] = []
  loading: boolean = true;
  $findAll: Subscription;

  constructor(private projectRepo: ProjectRepositoryService,
              private notify: NotifyService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll();
  }

  ngOnDestroy(): void {
    this.$findAll.unsubscribe();
  }

  isEmpty() {
    return (this.projects.length === 0)
  }

  findAll() {
    this.$findAll = this.projectRepo.findAll()
      .subscribe(
        (projects) => {
          this.projects = projects;
          this.loading = false;
          console.log(this.projects.length);
        },
        (err) => {
          this.$findAll.unsubscribe();
          this.notify.showInfo(err.message);
          this.loading = false;
        }
        )
  }

  openUploadPopup() {
    this.matDialog.open(UploadPopupComponent);
  }



}
