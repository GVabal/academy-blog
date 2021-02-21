import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './blog/home-page/home-page.component';
import {MatHomePageComponent} from './materialpractice/mat-home-page/mat-home-page.component';

const routes: Routes = [
  { path: 'blog', component: HomePageComponent },
  { path: 'material', component: MatHomePageComponent },
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
