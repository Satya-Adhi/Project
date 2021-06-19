import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { OpenComponent } from './auth/open/open.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/open' 
  },
  {
    path:'open',
    component: OpenComponent
  },
  {
    path:'forgot',
    component: ForgotComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
