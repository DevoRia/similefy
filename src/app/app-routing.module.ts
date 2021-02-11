import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeadPageComponent} from "./pages/lead-page/lead-page.component";
import {LibraryPageComponent} from "./pages/library-page/library-page.component";
import {ComparePageComponent} from "./pages/compare-page/compare-page.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'lead', component: LeadPageComponent },
  { path: 'library', canActivate: [AuthGuard], component: LibraryPageComponent },
  { path: 'compare', canActivate: [AuthGuard], component: ComparePageComponent },
  { path: 'compare/:id', canActivate: [AuthGuard], component: ComparePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
