import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewContactComponent } from './component/view-contact/view-contact.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-contact',
    pathMatch: 'full',
  },
  {
    path: 'view-contact',
    component: ViewContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
