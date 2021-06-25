import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent
  },
  {
    path:'list',
    component:ListComponent
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MaterialDesign,
    RouterModule.forChild(routes)
  ]
})

export class AdminModule { }
