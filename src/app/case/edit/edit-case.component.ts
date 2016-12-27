/**
 * Created by paulliu on 2016/12/7.
 */

import {Component, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";
import {UseCaseService} from "../use-case.service";
import {EditCase} from './edit-case';



@Component({
  selector: 'content',
  templateUrl: './edit-case.component.html'
})
export class EditCaseComponent implements OnInit {
  cases =new EditCase("111","sadfnajksdfajkdshfjakdhfsjkadhsfkjadshfajk","111","111","111","111","111","111","111","111","111","111","111","111","111","122");

  caseId="";
  // selectedTodo: Todo;
  constructor(private route: ActivatedRoute,private useCaseSercice: UseCaseService) {

  }
  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      // lettodoId = +;
      // this.selectedTodo =this.todoService.getTodoById(todoId);
      this.caseId = params['caseId'];
       alert(this.caseId);
    });
    // this.useCaseSercice.getDetail(this.caseId)
    //   .then(
    //     cases => this.cases = cases
    //   );
  }


}
