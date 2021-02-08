import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  static generateRandomPassword(): string {
    return `${Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}!${Math.floor(Math.random() * Math.floor(99999))}`;
  }

}
