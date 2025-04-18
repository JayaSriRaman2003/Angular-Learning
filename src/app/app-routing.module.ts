import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'auth/login', pathMatch: 'full'
  },
  // lazy Loading : Call this pathen when it is needed...
  {
    path :"auth", loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path :"main", loadChildren: () => import('./main/main-routing.module').then(m => m.MainRoutingModule)
  },
  {
    path :"admin", loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
