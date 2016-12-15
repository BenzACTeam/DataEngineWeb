/**
 * Created by paulliu on 2016/12/7.
 */

import {Component, OnInit} from '@angular/core';
import {SiteCase} from "./case";
import {UseCaseService} from './use-case.service';

@Component({
  selector: 'content',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  // cases: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  cases = [
    new SiteCase(2222, '国家安全', 'admin', '图', '2016.12.25', '为人民服务', '建设祖国', '祖国东方', '坚决维护党的纲领', '111', '2222', '22222', "北京", '12312312'),
    new SiteCase(2222, '国家安全', 'admin', '图', '2016.12.25', '为人民服务', '建设祖国', '祖国东方', '坚决维护党的纲领', '111', '2222', '22222', "北京", '12312312'),
    new SiteCase(2222, '国家安全', 'admin', '图', '2016.12.25', '为人民服务', '建设祖国', '祖国东方', '坚决维护党的纲领', '111', '2222', '22222', "北京", '12312312'),
    new SiteCase(2222, '国家安全', 'admin', '图', '2016.12.25', '为人民服务', '建设祖国', '祖国东方', '坚决维护党的纲领', '111', '2222', '22222', "北京", '12312312'),
    new SiteCase(2222, '国家安全', 'admin', '图', '2016.12.25', '为人民服务', '建设祖国', '祖国东方', '坚决维护党的纲领', '111', '2222', '22222', "北京", '12312312'),
    new SiteCase(2222, '国家安全', 'admin', '图', '2016.12.25', '为人民服务', '建设祖国', '祖国东方', '坚决维护党的纲领', '111', '2222', '22222', "北京", '12312312'),

  ]

  constructor(private useCaseSercice: UseCaseService) {

  }

  ngOnInit(): void {
    this.useCaseSercice.getCaseList().then(cases => this.cases = cases);

  }
}
