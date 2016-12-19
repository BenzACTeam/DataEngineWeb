/**
 * Created by paulliu on 2016/12/8.
 */

import { Injectable }    from '@angular/core';
import {Headers, Http, ResponseContentType, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {SiteCase} from "../home/case"

@Injectable()
export class UseCaseService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private caseListUrl = 'http://127.0.0.1:8080/usecase/list?';  // URL to web api
  constructor(private http: Http){

  }
  getCaseList(url): Promise<SiteCase[]> {
    return this.http.get(this.caseListUrl+url)
      .toPromise()
      .then(response => response.json().list as SiteCase[])
      .catch(this.handleError);

  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
