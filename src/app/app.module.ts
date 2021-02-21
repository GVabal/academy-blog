import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './blog/components/home-page/home-page.component';
import { PostComponent } from './blog/components/post/post.component';
import {MaterialModule} from './shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './blog/components/header/header.component';
import { SidebarLinkComponent } from './blog/components/sidebar-link/sidebar-link.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostComponent,
    HeaderComponent,
    SidebarLinkComponent
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
