import { Injectable } from '@angular/core';
import firebase from "firebase";
import {LocalizationService} from "../settings/localization.service";
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable} from "rxjs";
import {User} from "../../models/user/user";
import auth = firebase.auth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

  async login() {
    const provider = new auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(provider);
  }

  async logout() {
    await this.afAuth.signOut();
  }

  public getUser() {
    return this.afAuth.user;
  }
}
