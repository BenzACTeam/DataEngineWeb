/**
 * Created by paulliu on 2016/12/7.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { DetailComponent }   from './detail.component';
import {CreateCaseComponent} from "./create-case.component";
import {ListCaseComponent} from "./list-case.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail',  component: DetailComponent },
  { path: 'createcase',  component: CreateCaseComponent },
  { path: 'listcase',  component: ListCaseComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
