import {SiteCase} from "./case";
/**
 * Created by hongying.fu on 12/29/2016.
 */

export class PagedList<T> {

  public pageNum: number;
  public pageSize: number;
  public size: number;
  public total: number;
  public pages: number;
  public list: T[];
  public hasPreviousPage: boolean;
  public hasNextPage: boolean;
  public lastPage: boolean;
  public firstPage: boolean;

  constructor() {
  }
}
