/**
 * Created by paulliu on 2016/12/8.
 */

import {Component, OnInit} from '@angular/core';
import {CreateCase} from "./create-case";
import {UseCaseService} from '../use-case.service';
import {FileUploader} from '../../../../node_modules/ng2-file-upload';
import * as moment from 'moment';
import {FormBuilder, FormGroup} from "@angular/forms";


// webpack html imports
let template = require('./create-case.component.html');

// const URL = '/api/';
 const URL = 'http://127.0.0.1:8080/upload';

@Component({
  selector: 'content', template
})

export class CreateCaseComponent {
  date1 = new Date("2015-01-01");

  // dataForm: FormGroup;
  //
  // constructor(private formBuilder: FormBuilder) {
  // }
  //
  // ngOnInit() {
  //   this.dataForm = this.formBuilder.group({
  //     date: ''
  //   });
  // }
  items_multiple: Array<any> = [
    {id: 1, text: 'Option #1'},
    {id: 2, text: 'Option #2'},
    {id: 3, text: 'Option #3'},
    {id: 4, text: 'Option #4'},
    {id: 5, text: 'Option #5'},
    {id: 6, text: 'Option #6'},
    {id: 7, text: 'Option #7'},
    {id: 8, text: 'Option #8'},
    {id: 9, text: 'Option #9'},
    {id: 10, text: 'Option #10'},
  ];


  public uploader: FileUploader = new FileUploader({url: URL});

  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  selectedFileOnChanged(event: any) {
    // 打印文件选择名称
    this.uploadFile();
    console.log(event.target.value);
  }

  uploadFile() {
    alert('uploadFile');
    // 上传
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据

        let tempRes = JSON.parse(response);
        console.log(tempRes.url);
      } else {
        // 上传文件后获取服务器返回的数据错误
        alert(headers);
      }
    };
    this.uploader.queue[0].upload(); // 开始上传

  }


  public fileOverBase(e: any): void {
    console.log("fileOverBase");
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    console.log("拖拽成功");
    this.hasAnotherDropZoneOver = e;
  }


  values = ["", 'Increase business revenue', 'Optimize business eficiency'];
  data_Sources = ["", 'CDM', 'DMS', 'Data Layer', 'LMS'];
  data_Analysis_Models = ['', 'C4.5', 'K-means', 'Support vector machines', 'Apriori',
    'EM', 'PageRank', 'AdaBoost', 'kNN', 'Naive Bayes', 'CART'];
  contribution_BU_S = ['', 'Sales', 'After sales', 'Marketing'];
  stages = ['', 'SalIdea generation', 'Analysis', 'Validation', 'Implementationes'];

  submitted = false;
  model = new CreateCase('Subject', this.values[0], 'Business Scenario', 'result', this.data_Sources[0],
    'data_type_description', this.data_Analysis_Models[0], this.contribution_BU_S[0],
    this.stages[0], "2010-10-12 12:12:10", "2016-12-12 12:12:10 ", 'console', ' I need help', "");

  // constructor(private useCaseSercice: UseCaseService) {
  //
  // }
  //
  // onSubmit() {
  //   // this.submitted = true;
  //   this.useCaseSercice.postCreateList(JSON.stringify(this.model));
  //   // active = true;
  //   this.submitted = false;
  // }

  // TODO: 完成后移除
  get submitJson() {
    return JSON.stringify(this.model);
  }

  active = true;
  // newSite() {
  //   this.model = new Site(5, '', '');
  //   this.active = false;
  //   setTimeout(() => this.active = true, 0);
  // }


  public dt: Date = new Date();
  public minDate: Date = void 0;
  public events: any[];
  public tomorrow: Date;
  public afterTomorrow: Date;
  public dateDisabled: {date: Date, mode: string}[];
  public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
    'shortDate'];
  public format: string = this.formats[0];
  public dateOptions: any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened: boolean = false;

  public constructor() {
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
    (this.dateDisabled = []);
    this.events = [
      {date: this.tomorrow, status: 'full'},
      {date: this.afterTomorrow, status: 'partially'}
    ];
  }

  public getDate(): number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  public today(): void {
    this.dt = new Date();
  }

  public d20090824(): void {
    this.dt = moment('2009-08-24', 'YYYY-MM-DD')
      .toDate();
  }

  public disableTomorrow(): void {
    this.dateDisabled = [{date: this.tomorrow, mode: 'day'}];
  }

  // todo: implement custom class cases
  public getDayClass(date: any, mode: string): string {
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (let event of this.events) {
        let currentDay = new Date(event.date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return event.status;
        }
      }
    }
    return '';
  }

  public disabled(date: Date, mode: string): boolean {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  }

  public open(): void {
    this.opened = !this.opened;
  }

  public clear(): void {
    this.dt = void 0;
    this.dateDisabled = undefined;
  }

  public toggleMin(): void {
    this.dt = new Date(this.minDate.valueOf());
  }

}
