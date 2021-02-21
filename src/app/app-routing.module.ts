import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './blog/components/home-page/home-page.component';

const routes: Routes = [
  { path: 'blog', component: HomePageComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
