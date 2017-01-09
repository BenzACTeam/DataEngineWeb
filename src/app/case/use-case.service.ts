/**
 * Created by paulliu on 2016/12/8.
 */

import {Injectable}    from '@angular/core';
import {Headers, Http, ResponseContentType, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {HttpHelper} from "../http-helper";
import Any = jasmine.Any;
import {SiteCase} from "../home/case"
import {PagedList} from "../home/pagedlist";

@Injectable()
export class UseCaseService {
  private caseListUrl = '/usecase/search/';  // URL to web api
  private createUrl = "/usecase/create";
  private detailUrl = "/usecase/detail/";

  constructor(private httpHelper: HttpHelper) {
  }

  getCaseList(pageNo: number = 1, paramter: Any = null): Promise<PagedList<SiteCase>> {
    return this.httpHelper.post(this.caseListUrl + pageNo, paramter).then(cases => cases);
  }

  getDetail(caseId:string): Promise<SiteCase> {

    return this.httpHelper.get(this.detailUrl+caseId).then(siteCase => siteCase );
  }

  postCreateList(caseJson): void {
    // alert(caseJson);
    this.httpHelper
      .post(this.createUrl, caseJson);
  }


}
