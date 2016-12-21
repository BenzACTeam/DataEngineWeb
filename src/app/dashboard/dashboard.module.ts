import { NgModule }                 from '@angular/core';

import { DashboardComponent }       from './dashboard.component';
import { DashboardRoutingModule }   from './dashboard-routing.module';
import {UseCaseService} from "../case/use-case.service";

@NgModule({
    imports: [
        DashboardRoutingModule
    ],providers: [
        UseCaseService
    ],
    declarations: [
      DashboardComponent
    ]
})
export class DashboardModule { }
