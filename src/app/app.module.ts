import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { LeadPageComponent } from './pages/lead-page/lead-page.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { LoginPopupComponent } from './components/popups/login-popup/login-popup.component';
import { UploadPopupComponent } from './components/popups/upload-popup/upload-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LibraryPageComponent,
    LeadPageComponent,
    ComparePageComponent,
    SettingsPageComponent,
    LoginPopupComponent,
    UploadPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
