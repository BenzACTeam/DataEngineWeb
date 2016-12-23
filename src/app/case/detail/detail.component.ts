/**
 * Created by paulliu on 2016/12/7.
 */

import {Component, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";
import {UseCaseService} from "../use-case.service";



@Component({
  selector: 'content',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  cases=[]
  caseId="";
  // selectedTodo: Todo;
  constructor(private route: ActivatedRoute,private useCaseSercice: UseCaseService) {}
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      // lettodoId = +;// 使用+将字符串类型的参数转换成数字
      // this.selectedTodo =this.todoService.getTodoById(todoId);
      this.caseId = params['id'];
      alert(this.caseId);
    });
    this.useCaseSercice.getDetail(this.caseId)
      .then(
        cases => this.cases = cases
      );
  }


}
