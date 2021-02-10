import { Injectable } from '@angular/core';
import firebase from "firebase";
import {AngularFireAuth} from "@angular/fire/auth";
import auth = firebase.auth;
import {AuthMode} from "./auth.mode";
import {UtilsService} from "../utils.service";
import {SubscriptionManagerService} from "../subscription-manager.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private subscriptionManagerService: SubscriptionManagerService) {
  }

  async signUp(email: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, UtilsService.generateRandomPassword());
    await this.afAuth.sendPasswordResetEmail(email);
    await this.afAuth.signOut();
  }

  async forgotPassword(email: string) {
    await this.afAuth.sendPasswordResetEmail(email);
  }

  async login(mode: AuthMode): Promise<any> {
    switch (mode) {
      case AuthMode.GOOGLE: return await this.googleLogin()
      case AuthMode.EMAIL: return this.emailLogin.bind(this)
    }
  }

  async googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(provider);
  }

  async emailLogin(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    this.subscriptionManagerService.clear();
    await this.afAuth.signOut();
  }

  public getUser() {
    return this.afAuth.user;
  }
}
