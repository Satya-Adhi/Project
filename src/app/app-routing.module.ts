import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
