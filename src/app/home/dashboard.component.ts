/**
 * Created by paulliu on 2016/12/7.
 */

import {Component, OnInit} from '@angular/core';
import {UseCaseService} from '../case/use-case.service';
import {SiteCase} from './case';


@Component({
  selector: 'content',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  cases = [
    new SiteCase("111","sadfnajksdfajkdshfjakdhfsjkadhsfkjadshfajk","111","111","111","111","111","111","111","111","111","111","111","111","111","122"),
    new SiteCase("111","asdfghajsdfgajhsdgfhajdsfahjdfgahjdfgahjdfg","111","111","111","111","111","111","111","111","111","111","111","111","111","122")
  ];
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
