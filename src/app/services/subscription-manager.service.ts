import { Injectable } from '@angular/core';
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionManagerService {

  private subscriptions: {[key: string]: Subscription} = {}

  constructor() { }

  addSubscription(key: string, subscription: Subscription) {
    this.subscriptions[key] = subscription;
  }

  clear() {
    Object.keys(this.subscriptions)
      .map((key) => this.subscriptions[key].unsubscribe());
    this.subscriptions = {};
  }
}
