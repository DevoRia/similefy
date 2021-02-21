import { Injectable } from '@angular/core';
import {ProjectRepositoryService} from "./project-repository.service";
import {Project} from "../../models/project/project";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private project: Project;

  constructor(private projectRepo: ProjectRepositoryService) { }

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
    console.log(this.project.source);
  }

  getContentByAreaIndex(index: number): Observable<string> {
    return new Observable(s => s.next(this.project.source[index]));
  }

  update() {
    console.log(this.project);
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

  async remove(id): Promise<void> {
    return await this.projectRepo.remove(id).toPromise();
  }
}
