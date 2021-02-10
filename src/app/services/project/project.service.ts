import { Injectable } from '@angular/core';
import {ProjectRepositoryService} from "./project-repository.service";
import {Project} from "../../models/project/project";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private projectRepo: ProjectRepositoryService) { }

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
