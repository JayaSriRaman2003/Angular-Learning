import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path : '', component : LayoutComponent,
     children: [
      { path: 'home', component:  LandingPageComponent},
      { path: 'message', component: MessageComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'bookmark', component: BookmarkComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
