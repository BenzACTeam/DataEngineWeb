import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { DetailComponent }   from './detail.component';
import { CreateCaseComponent }   from './create-case.component';

import { AppRoutingModule }     from './app-routing.module';
import {ListCaseComponent} from "./list-case.component";
import {UseCaseService} from './use-case.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailComponent,
    CreateCaseComponent,
    ListCaseComponent
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
