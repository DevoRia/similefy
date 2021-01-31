import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { environment } from '../environments/environment';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { LeadPageComponent } from './pages/lead-page/lead-page.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { LoginPopupComponent } from './components/popups/login-popup/login-popup.component';
import { UploadPopupComponent } from './components/popups/upload-popup/upload-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ToolbarOptionsComponent } from './components/toolbar-options/toolbar-options.component';
import { CardComponent } from './components/card/card.component';
import { EmptyProjectsComponent } from './components/empty-projects/empty-projects.component';
import { LoaderComponent } from './components/loader/loader.component';
import {NgxFileDropModule} from "ngx-file-drop";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LibraryPageComponent,
    LeadPageComponent,
    ComparePageComponent,
    SettingsPageComponent,
    LoginPopupComponent,
    UploadPopupComponent,
    ToolbarOptionsComponent,
    CardComponent,
    EmptyProjectsComponent,
    LoaderComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    LottieModule.forRoot({ player: playerFactory }),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
