import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import {map, mergeMap} from 'rxjs/operators';
import {AuthService} from "../user/auth.service";
import {UtilsService} from "../utils.service";
import {Project} from "../../models/project/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectRepositoryService {

  constructor(
              private authService: AuthService,
              private utils: UtilsService,
              private db: AngularFireDatabase,
  ) { }

  findAll(userid?: string): Observable<Project[]> {
    return this.resolveUserId(userid)
      .pipe(mergeMap(uid => {

        if (!uid) {
          return [];
        }

        return this.db
          .object(`/project/${uid}`)
          .valueChanges()
          .pipe(map(projects => {
            if (!projects) {
              return [];
            }
            return Object.keys(projects).map(key => ({...projects[key], id: key}));
          }));
      }));
  }

  findById(id: string, userid?: string): Observable<Project> {
    return this.resolveUserId(userid)
      .pipe(mergeMap(uid =>
        this.db
          .object(`/project/${uid}/${id}`)
          .valueChanges()
          .pipe(map((project: Project) => {
            if (!project) {
              throw Error('there is no project');
            } else {
              return ({...project, id});
            }
          }))
      ));
  }

  create(project: Project, userid?: string): Observable<Project> {
    return this.resolveUserId(userid)
      .pipe(mergeMap(uid => {
        return from(this.db
          .database
          .ref(`/project`)
          .child(uid)
          .push(project))
          .pipe(map((res) => {
            return {...project, id: res.key};
          }));
      }));
  }

  update(id: string, project: Project, userid?: string): Observable<Project> {
    return this.resolveUserId(userid)
      .pipe(mergeMap(uid => {
        return from(this.db
          .database
          .ref(`/project/${uid}`)
          .child(id)
          .update({...project}))
          .pipe(map(() => {
            return {...project, id};
          }));
      }));
  }

  remove(id: string, userid?: string): Observable<void> {
    return this.resolveUserId(userid)
      .pipe(mergeMap(uid => {
        return from(this.db
          .database
          .ref(`/project/${uid}`)
          .child(id)
          .remove());
      }));
  }

  private resolveUserId(userid?: string): Observable<string> {
    if (userid) {
      return new Observable<string>(s => s.next(userid));
    }
    return this.authService.getUser()
      .pipe(map((user) => user.uid));
  }
}
