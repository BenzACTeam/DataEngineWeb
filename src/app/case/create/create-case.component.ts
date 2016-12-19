/**
 * Created by paulliu on 2016/12/8.
 */

import {Component, OnInit} from '@angular/core';
import {CreateCase} from "./create-case";
import {UseCaseService} from '../use-case.service';


@Component({
  selector: 'content',
  templateUrl: './create-case.component.html'
})
export class CreateCaseComponent {



  values = ["", 'Increase business revenue', 'Optimize business eficiency'];
  data_Sources = ["", 'CDM', 'DMS', 'Data Layer', 'LMS'];
  data_Analysis_Models = ['','C4.5', 'K-means', 'Support vector machines', 'Apriori',
    'EM', 'PageRank', 'AdaBoost', 'kNN', 'Naive Bayes', 'CART'];
  contribution_BU_S=['','Sales', 'After sales', 'Marketing'];
  stages=['','SalIdea generation','Analysis','Validation','Implementationes'];

  submitted = false;
  model = new CreateCase('Subject', this.values[0], 'Business Scenario','result', this.data_Sources[0],
    'data_type_description',this.data_Analysis_Models[0], "Analysis Method Descrption", this.contribution_BU_S[0],
    this.stages[0], "2010-10-12","2016-12-12",'console',' I need help');

  constructor(private useCaseSercice: UseCaseService) {

  }
  onSubmit() {
     // this.submitted = true;
    // this.useCaseSercice.getCaseList().then(cases => this.cases = cases);
    // alert(JSON.stringify(this.model));

  }

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

}
