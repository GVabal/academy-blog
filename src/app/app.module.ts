import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './blog/home-page/home-page.component';
import { PostComponent } from './blog/components/post/post.component';
import {MaterialModule} from './shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './blog/components/header/header.component';
import { SidebarLinkComponent } from './blog/components/sidebar-link/sidebar-link.component';
import { AppRoutingModule } from './app-routing.module';
import { MatHomePageComponent } from './materialpractice/mat-home-page/mat-home-page.component';
import {TabsComponent} from './materialpractice/components/tabs.component';
import { ToolbarComponent } from './materialpractice/components/toolbar.component';
import { TableComponent } from './materialpractice/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostComponent,
    HeaderComponent,
    SidebarLinkComponent,
    MatHomePageComponent,
    TabsComponent,
    ToolbarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
