import {Component, OnInit} from '@angular/core';
import {LocalizationService} from "../../services/settings/localization.service";
import {Localization, localizations} from "../../models/localization/localization";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  loading: boolean = false;

  constructor(private localizationService: LocalizationService,
              ) { }

  ngOnInit(): void {
  }

  getLocalizations() {
    return localizations;
  }

  currentLocalization() {
    return this.localizationService.currentLocalization();
  }

  setLocalization(event) {
    this.loading = true;
    this.localizationService.setLocalization(Localization[event])
    this.loading = false;
  }

}
