import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import * as moment from 'moment';
import {Localization} from "../../models/localization/localization";

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(private translationService: TranslateService) { }

  public initLocalization() {

  }

  public setLocalization(locale: Localization) {
    this.translationService.use(locale);
    moment.locale(locale);
  }

  public getLocalization() {
    return this.translationService.currentLang;
  }
}
