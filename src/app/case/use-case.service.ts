/**
 * Created by paulliu on 2016/12/8.
 */

import {Injectable}    from '@angular/core';
import {Headers, Http, ResponseContentType, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {SiteCase} from "../home/case"
import {DetailCase} from "../case/detail/detail-case"

import any = jasmine.any;
import {PagedList} from "../home/pagedlist";
import {HttpHelper} from "../BaseService";
import Any = jasmine.Any;

@Injectable()
export class UseCaseService {
  private caseListUrl = '/usecase/search/';  // URL to web api
  private createUrl = "/usecase/create?";
  private detailUrl = "/usecase/detail/";

  constructor(private httpHelper: HttpHelper) {
  }

  getCaseList(pageNo: number = 1, paramter: Any = null): Promise<PagedList<SiteCase>> {
    return this.httpHelper.post(this.caseListUrl + pageNo, paramter).then(cases => cases);
  }

  // postCreateList(caseJson): void {
  //   alert(caseJson);
  //   this.http
  //     .post(this.createUrl, caseJson, {headers: this.headers}).toPromise()
  //
  //     .catch(this.handleError);
  // }
  //
  getDetail(caseId:string): Promise<SiteCase> {

    return this.httpHelper.get(this.detailUrl+caseId).then(siteCase => siteCase );
  }
  //
  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

}
