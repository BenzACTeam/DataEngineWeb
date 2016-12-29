/**
 * Created by hongying.fu on 12/29/2016.
 */

import {Headers, Http} from "@angular/http";
import {Injectable} from "@angular/core";
import Any = jasmine.Any;
import {SiteCase} from "./home/case";

@Injectable()
export class HttpHelper {
  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = "http://59.110.42.188:8080";

  constructor(private http: Http) {
  }

  post<T>(relativePath: string, paramter: Any = null): Promise<T> {
    return this.http.post(this.baseUrl + relativePath, paramter, this.headers)
      .toPromise()
      .then(response => response.json() as T)
      .catch(this.handleError);
  }

  get(relativePath): Promise<SiteCase> {
    return this.http.get(this.baseUrl + relativePath, this.headers)
      .toPromise()
      .then(response => response.json() as SiteCase)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
