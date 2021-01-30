import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeadPageComponent} from "./pages/lead-page/lead-page.component";
import {LibraryPageComponent} from "./pages/library-page/library-page.component";
import {ComparePageComponent} from "./pages/compare-page/compare-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'lead', pathMatch: 'full' },
  { path: 'lead', component: LeadPageComponent },
  { path: 'library', component: LibraryPageComponent },
  { path: 'compare', component: ComparePageComponent },
  { path: 'compare/:id', component: ComparePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
