import { Component, OnInit } from '@angular/core';
import { Site } from './site';



@Component({
  selector: 'content',
  templateUrl: './test.html'
})
export class TestComponent {

  // // caseList =new SiteCase(1111,'国家安全','admin','图','2016.12.25','为人民服务','建设祖国','祖国东方','坚决维护党的纲领',1);
  //  caseList =[
  //    new SiteCase(2222,'国家安全','admin','图','2016.12.25','为人民服务','建设祖国','祖国东方','坚决维护党的纲领',1),
  //    new SiteCase(1111,'国家安全','admin','图','2016.12.25','为人民服务','建设祖国','祖国东方','坚决维护党的纲领',1)
  //
  //  ];

  items: Array<any> = [
    { id: 1, text: 'Option #1' },
    { id: 2, text: 'Option #2' },
    { id: 3, text: 'Option #3' },
  ];

  items_multiple: Array<any> = [
    { id: 1, text: 'Option #1' },
    { id: 2, text: 'Option #2' },
    { id: 3, text: 'Option #3' },
    { id: 4, text: 'Option #4' },
    { id: 5, text: 'Option #5' },
    { id: 6, text: 'Option #6' },
    { id: 7, text: 'Option #7' },
    { id: 8, text: 'Option #8' },
    { id: 9, text: 'Option #9' },
    { id: 10, text: 'Option #10' },
  ];






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
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  active = true;
  newSite() {
    this.model = new Site(5, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}
