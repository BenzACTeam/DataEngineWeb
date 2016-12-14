/**
 * Created by paulliu on 2016/12/8.
 */

import { Component, OnInit } from '@angular/core';
import { Site } from './site';

@Component({
  selector: 'content',
  templateUrl: './list-case.component.html'
})
export class ListCaseComponent {

  firstName: string;
  constructor(){
    this.firstName="2b";
  }
  // doSomething($event){
  //
  //   console.log('点击了这个按钮：',$event.target.value);
  // }

  getVal(){
    return 1;
  }
  title = '站点列表';
  sites = ['菜鸟教程', 'Google', 'Taobao', 'Facebook'];
  mySite = this.sites[0];

  clickMessage = '';

  onClickMe() {
    this.clickMessage = '菜鸟教程!';
  }


  values = '';
   // 非强类型
   onKey(event:any) {
   this.values = event.target.value + ' | ';
   }

  // 强类型
  // onKey(event: KeyboardEvent) {
  //   this.values += (<HTMLInputElement>event.target).value + ' | ';
  // }
  urls = ['www.runoob.com', 'www.google.com',
    'www.taobao.com', 'www.facebook.com'];
  model = new Site(1, '菜鸟教程', this.urls[0], 10000);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: 完成后移除
  get diagnostic() { return JSON.stringify(this.model); }

  active = true;
  newSite() {
    this.model = new Site(5, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}
