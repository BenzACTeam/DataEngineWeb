/**
 * Created by paulliu on 2016/12/7.
 */

import {Component, OnInit} from '@angular/core';
import {UseCaseService} from '../case/use-case.service';

@Component({
  selector: 'content',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  cases = [];
  constructor(private useCaseSercice: UseCaseService) {

  }

  ngOnInit(): void {

    //noinspection TypeScriptUnresolvedFunction
    this.useCaseSercice.getCaseList('pageNo=1&pageSize=2')
      .then(
        cases => this.cases = cases,
      );

  }
}
