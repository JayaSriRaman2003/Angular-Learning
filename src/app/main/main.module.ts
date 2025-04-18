import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MessageComponent } from './message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LandingPageComponent,
    MessageComponent,
    ProfileComponent,
    NotificationComponent,
    BookmarkComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
