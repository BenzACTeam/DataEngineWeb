/**
 * Created by paulliu on 2016/12/7.
 */

import {Component, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";
import {UseCaseService} from "../use-case.service";
import {DetailCase} from './detail-case';
import {SiteCase} from "../../home/case";


@Component({
  selector: 'content',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  siteCase: SiteCase;
  caseId = "";

  constructor(private route: ActivatedRoute, private useCaseSercice: UseCaseService) {
    this.siteCase = new SiteCase();
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.caseId = params['id'];
    });
    this.useCaseSercice.getDetail(this.caseId)
      .then(
        siteCase => {
          this.siteCase = siteCase;
        }
      );
  }
}
