import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { OpenComponent } from './auth/open/open.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
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
    path:'',
    pathMatch:'full',
    redirectTo:'/open' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
