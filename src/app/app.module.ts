import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FileUploadModule } from '../../node_modules/ng2-file-upload/components/file-upload/file-upload.module';
import { DashboardComponent }   from './home/dashboard.component';
import { DetailComponent }   from './case/detail/detail.component';
import { CreateCaseComponent }   from './case/create/create-case.component';

import { AppRoutingModule }     from './app-routing.module';
import {ListCaseComponent} from "./case/list-case.component";
import {UseCaseService} from './case/use-case.service';
import {TestComponent} from "./test/test";
//noinspection TypeScriptCheckImport
import { SelectModule }  from 'ng2-select';

import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';


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
    HttpModule,
    FileUploadModule,
    SelectModule,
    Ng2DatetimePickerModule

  ],
  providers: [UseCaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
