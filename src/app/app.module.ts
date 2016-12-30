import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule}     from './app-routing.module';
import {SelectModule}  from 'ng2-select';
import {ProgressbarModule} from 'ng2-bootstrap';
import {AccordionModule} from 'ng2-accordion';
import {FileUploadModule} from '../../node_modules/ng2-file-upload/components/file-upload/file-upload.module';
import {Ng2DatetimePickerModule} from 'ng2-datetime-picker';

import {AppComponent} from './app.component';
import {DashboardComponent}   from './home/dashboard.component';
import {DetailComponent}   from './case/detail/detail.component';
import {CreateCaseComponent}   from './case/create/create-case.component';
import {ListCaseComponent} from "./case/list-case.component";
import {TestComponent} from "./test/test";
import {EditCaseComponent} from "./case/edit/edit-case.component";
import {UserComponent} from "./user/user.component";
import {ListSearchComponent} from "./search/list-search.component";

import {HttpHelper} from "./http-helper";
import {UseCaseService} from './case/use-case.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailComponent,
    CreateCaseComponent,
    ListCaseComponent,
    TestComponent,
    EditCaseComponent,
    UserComponent,
    ListSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    FileUploadModule,
    SelectModule,
    Ng2DatetimePickerModule,
    ProgressbarModule,
    AccordionModule
  ],
  providers: [HttpHelper, UseCaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
