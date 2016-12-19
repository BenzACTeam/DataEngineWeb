import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './home/dashboard.component';
import { DetailComponent }   from './case/detail/detail.component';
import { CreateCaseComponent }   from './case/create/create-case.component';

import { AppRoutingModule }     from './app-routing.module';
import {ListCaseComponent} from "./case/list-case.component";
import {UseCaseService} from './case/use-case.service';
import {TestComponent} from "./test/test";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailComponent,
    CreateCaseComponent,
    ListCaseComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UseCaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
