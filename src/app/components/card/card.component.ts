import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../models/project/project";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmPopupComponent} from "../popups/confirm-popup/confirm-popup.component";
import {ProjectService} from "../../services/project/project.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  project: Project

  constructor(
    public dialog: MatDialog,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  open(): void {

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
