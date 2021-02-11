import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../models/project/project";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmPopupComponent} from "../popups/confirm-popup/confirm-popup.component";
import {ProjectService} from "../../services/project/project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  project: Project

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  open(): void {
    this.router.navigate(['compare', this.project.id])
  }

  remove(): void {
    this.dialog.open(ConfirmPopupComponent, {
      data: {
        title: "library.removeTitle",
        message: "library.removeMessage"
      }
    })
      .afterClosed()
      .subscribe(async (confirm) => {
        if (confirm) {
          await this.projectService.remove(this.project.id)
        }
      });
  }

}
