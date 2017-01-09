/**
 * Created by paulliu on 2016/12/8.
 */

import {Component, OnInit} from '@angular/core';
import {CreateCase} from "./create-case";
import {UseCaseService} from '../use-case.service';
import {FileUploader} from '../../../../node_modules/ng2-file-upload';
import * as moment from 'moment';


// webpack html imports
let template = require('./create-case.component.html');

// const URL = '/api/';
const URL = 'http://10.255.252.54:8080/upload';

@Component({
  selector: 'content', template
})

export class CreateCaseComponent {
  analysisMethodResult = true;
  validationMethodResult = true;
  implementationMethodResult = true;

  isBtn1Clicked = false;
  isBtn2Clicked = false;
  isBtn3Clicked = false;
  isBtn4Clicked = false;

  isPackUp = true;
  isFillOut = false;

  active = true;
  fromDate = "";
  toDate = "";
  values = ['Increase business revenue', 'Optimize business eficiency', 'Operation KPI Tracking'];
  data_Sources = ['CDM', 'DMS', 'Data Layer', 'LMS'];
  data_Analysis_Models = ['C4.5', 'K-means', 'Support vector machines', 'Apriori', 'EM', 'PageRank', 'AdaBoost', 'kNN', 'Naive Bayes', 'CART'];
  contribution_BU_S = ['Sales', 'After sales', 'Marketing'];
  stages = ['SalIdea generation', 'Analysis', 'Validation', 'Implementationes'];
  model = new CreateCase(
    'Subject',
    this.values[0],
    'Business Scenario');

  generation() {
    this.analysisMethodResult = true;
    this.validationMethodResult = true;
    this.implementationMethodResult = true;
    this.isBtn1Clicked = false;
    this.isBtn2Clicked = true;
    this.isBtn3Clicked = true;
    this.isBtn4Clicked = true;
    this.model.dataSource = "";
    this.model.dataTypeDescription = "";
    this.model.analysisModel = "";
    this.model.analysisMethodResult = "";
    this.model.validationMethodResult = "";
    this.model.implementationMethodResult = "";
  }

  validation() {
    this.analysisMethodResult = false;
    this.validationMethodResult = true;
    this.implementationMethodResult = true;
    this.isBtn1Clicked = true;
    this.isBtn2Clicked = false;
    this.isBtn3Clicked = true;
    this.isBtn4Clicked = true;
    this.model.validationMethodResult = "";
    this.model.implementationMethodResult = "";
  }

  analysis() {
    this.analysisMethodResult = false;
    this.validationMethodResult = false;
    this.implementationMethodResult = true;
    this.isBtn1Clicked = true;
    this.isBtn2Clicked = true;
    this.isBtn3Clicked = false;
    this.isBtn4Clicked = true;
    this.model.implementationMethodResult = "";
  }

  implemetation() {
    this.analysisMethodResult = false;
    this.validationMethodResult = false;
    this.implementationMethodResult = false;
    this.isBtn1Clicked = true;
    this.isBtn2Clicked = true;
    this.isBtn3Clicked = true;
    this.isBtn4Clicked = false;
  }

  fillOutMoreInfo(){
    this.analysisMethodResult = false;
    this.validationMethodResult = false;
    this.implementationMethodResult = false;
    this.isFillOut = true;
    this.isPackUp = false;
  }

  packUp(){
    this.analysisMethodResult = true;
    this.validationMethodResult = true;
    this.implementationMethodResult = true;
    this.model.dataSource = "";
    this.model.dataTypeDescription = "";
    this.model.analysisModel = "";
    this.model.analysisMethodResult = "";
    this.model.validationMethodResult = "";
    this.model.implementationMethodResult = "";
    this.isFillOut = false;
    this.isPackUp = true;
  }

  dataSourceValue(value: any) {
    this.model.dataSource = JSON.stringify(value);
  }

  dataAnalysisModelValue(value: any) {
    this.model.analysisModel = JSON.stringify(value);
  }

  // TODO: 完成后移除
  get submitJson() {
    this.model.fromDate = this.fromDate;
    this.model.toDate = this.toDate;
    return JSON.stringify(this.model);
  }

  public useCaseSercice: UseCaseService;

  onSubmit() {
    this.useCaseSercice.postCreateList(JSON.stringify(this.model));
  }

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
    // this.hasAnotherDropZoneOver = e;
  }

  public fileDropOver(e: any): void {
    this.uploadFile();
  }

  isSelectUpload = false;
  selectUpload(event:any){

    this.isSelectUpload = true;
  }
}
