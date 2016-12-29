/**
 * Created by paulliu on 2016/12/7.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './home/dashboard.component';
import { DetailComponent }   from './case/detail/detail.component';
import {CreateCaseComponent} from "./case/create/create-case.component";
import {ListCaseComponent} from "./case/list-case.component";
import {EditCaseComponent} from "./case/edit/edit-case.component";
import {UserComponent} from "./user/user.component";
import {ListSearchComponent} from "./search/list-search.component";
import {TestComponent} from "./test/test";
import {UserMoreComponent} from "./user/more/user-more.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id',  component: DetailComponent },
  { path: 'createcase',  component: CreateCaseComponent },
  { path: 'listcase',  component: ListCaseComponent },
  { path: 'test',  component: TestComponent },
  { path: 'edit',  component: EditCaseComponent },
  { path: 'user/:id',  component: UserComponent },
  { path: 'search/:id',  component: ListSearchComponent },
  { path: 'usermore/:id',  component: UserMoreComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
