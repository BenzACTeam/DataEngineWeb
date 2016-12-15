/**
 * Created by paulliu on 2016/12/8.
 */

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {SiteCase} from "./case"

@Injectable()
export class UserCaseService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private caseListUrl = '';  // URL to web api

  constructor(private http: Http){}

  getCaseList(): Promise<SiteCase[]> {
    return this.http.get(this.caseListUrl)
      .toPromise()
      .then(response => response.json().data as SiteCase[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
