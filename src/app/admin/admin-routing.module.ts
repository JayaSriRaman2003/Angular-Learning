import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {
    path : "", component : AdminLoginComponent
  },
  {
    path : "admin-page", component : AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
