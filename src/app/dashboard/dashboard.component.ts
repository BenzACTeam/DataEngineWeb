import {Component, OnInit} from '@angular/core';

import {UseCaseService} from '../case/use-case.service';

@Component({
  selector: 'content',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent{
  //
  // cases=[];
  // constructor(private useCaseSercice: UseCaseService) {
  //
  // }
  //
  // ngOnInit(): void {
  //
  //   alert(1111111111)
  //   this.useCaseSercice.getCaseList('pageNo=1&pageSize=20')
  //     .then(
  //       cases => this.cases = cases,
  //     );
  // }
}
