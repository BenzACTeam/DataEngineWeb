/**
 * Created by paulliu on 2016/12/8.
 */

import { Injectable }    from '@angular/core';
import {Headers, Http, ResponseContentType, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {SiteCase} from "../home/case"
import {DetailCase} from "../case/detail/detail-case"

import any = jasmine.any;

@Injectable()
export class UseCaseService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private caseListUrl = 'http://127.0.0.1:8080/usecase/list?';  // URL to web api
  private createUrl="http://127.0.0.1:8080/usecase/create?";
  private detailUrl="http://127.0.0.1:8080/usecase/detail?id=";

  constructor(private http: Http){

  }
  getCaseList(url): Promise<SiteCase[]> {
    return this.http.get(this.caseListUrl+url)
      .toPromise()
      .then(response => response.json().list as SiteCase[])
      .catch(this.handleError);

  }
  postCreateList(caseJson):void{
    alert(caseJson);
     this.http
       .post(this.createUrl,caseJson,{headers: this.headers}).toPromise()

       .catch(this.handleError);
  }
  getDetail(url):Promise<DetailCase[]>{

    return this.http.get(this.detailUrl+url)
      .toPromise()
      .then(response => response.json() as DetailCase[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
