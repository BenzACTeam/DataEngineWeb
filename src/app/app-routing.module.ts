/**
 * Created by paulliu on 2016/12/7.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './home/dashboard.component';
import { DetailComponent }   from './case/detail/detail.component';
import {CreateCaseComponent} from "./case/create/create-case.component";
import {ListCaseComponent} from "./case/list-case.component";
import {TestComponent} from "./test/test";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id',  component: DetailComponent },
  { path: 'createcase',  component: CreateCaseComponent },
  { path: 'listcase',  component: ListCaseComponent },
  { path: 'test',  component: TestComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
