
import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

import { AppComponent } from './app.component';
import { FileUploadModule } from '../../node_modules/ng2-file-upload/components/file-upload/file-upload.module';
import { AppRoutingModule }     from './app-routing.module';
import {FullLayoutComponent} from "./layouts/full-layout.component";




@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    FileUploadModule

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
