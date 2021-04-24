import { Component, OnInit } from '@angular/core';
import {FileSystemFileEntry, NgxFileDropEntry} from "ngx-file-drop";
import {NotifyService} from "../../../services/notify.service";
import {TranslateService} from "@ngx-translate/core";
import {TypeService} from "../../../services/file/type.service";
import {ProjectService} from "../../../services/project/project.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  templateUrl: './upload-popup.component.html',
  styleUrls: ['./upload-popup.component.scss']
})
export class UploadPopupComponent implements OnInit {

  name: string;
  contentToCompare: string;
  public files: File[] = [];
  private filesLength: number;

  constructor(private notifyService: NotifyService,
              private translateService: TranslateService,
              private typeService: TypeService,
              public dialog: MatDialog,
              private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  public async create() {
    if (this.contentToCompare.length) {
      try {
        this.dialog.closeAll()
        await this.projectService.createFromText(this.name, this.contentToCompare)
      } catch (e) {
        this.notifyService.showInfo(e.message);
      }
    }
  }

  public async dropped(files: NgxFileDropEntry[]) {
    this.filesLength = this.files.length;
    const promises = files.map(droppedFile => {
      return new Promise((resolve, reject) => {
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            if (this.typeService.isSupportedType(file.type)) {
              this.files.push(file)
              resolve();
            } else {
              this.notifyService.showInfo(this.translateService.instant("upload.fileTypeNotSupport", {type: file.type}))
              reject();
            }
          });
        } else {
          this.notifyService.showInfo(this.translateService.instant("upload.folderNotSupport"))
          this.filesLength--;
          resolve();
        }
      })
    });
    await Promise.all(promises);
    await this.uploadFiles();
  }

  private async uploadFiles() {
    if (this.files.length && this.files.length <= 2) {
      try {
        this.dialog.closeAll()
        await this.projectService.create(this.name, this.files)
      } catch (e) {
        this.notifyService.showInfo(e.message);
      }
    }
  }

  public fileOver(event){
  }

  public fileLeave(event){
  }

}
