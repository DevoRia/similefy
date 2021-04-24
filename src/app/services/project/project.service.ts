import { Injectable } from '@angular/core';
import {ProjectRepositoryService} from "./project-repository.service";
import {Project} from "../../models/project/project";
import {BehaviorSubject, Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {CompareService} from "../compare/compare.service";
import {FileType} from "../file/file-type";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private project: Project;
  private compareTexts$ = [new BehaviorSubject<string>(''), new BehaviorSubject<string>('')]

  constructor(private projectRepo: ProjectRepositoryService,
              private compareService: CompareService) { }

  getProjectById(id: string): Observable<Project> {
    return this.projectRepo.findById(id)
      .pipe(map((project) => {
        if (typeof project.source === 'string') {
          project.source = JSON.parse(project.source)
        }
        return project;
      }))
      .pipe(tap((project) => this.project = project));
  }

  changeContent(content: string, index: number) {
    if (typeof this.project.source !== 'string') {
      this.project.source[index] = content;
    }
  }

  getContentByAreaIndex(index: number): Observable<string> {
    this.compareTexts$[index].next(this.project.source[index])
    return this.compareTexts$[index]
  }

  update() {
    if (typeof this.project.source !== 'string') {
      const compared = this.compareService.doCompare(this.project.source)
      this.project.source[0] = compared[0]
      this.project.source[1] = compared[1]
      this.compareTexts$[0].next(this.project.source[0])
      this.compareTexts$[1].next(this.project.source[1])
    }
    return this.projectRepo.update(this.project.id, this.project)
  }

  leaveProject(): void {
    this.project = {};
  }

  async create(name: string, files: File[]): Promise<Project> {
    const project: Project = {
      name: name,
      type: files[0].type,
      source: []
    }
    const promises = files.map(async file => {
      const content = await file.text();
      if (typeof project.source !== 'string') {
        project.source.push(content);
      }
    });
    await Promise.all(promises);
    project.source = JSON.stringify(project.source);
    return this.projectRepo.create(project).toPromise();
  }

  async createFromText(name: string, content: string): Promise<Project> {
    const project: Project = {
      name: name,
      type: FileType.TXT,
      source: [content]
    }
    project.source = JSON.stringify(project.source);
    return this.projectRepo.create(project).toPromise();
  }

  async remove(id): Promise<void> {
    return await this.projectRepo.remove(id).toPromise();
  }
}
