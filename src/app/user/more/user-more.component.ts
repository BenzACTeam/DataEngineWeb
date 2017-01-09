/**
 * Created by paulliu on 2016/12/7.
 */

import {Component, OnInit} from '@angular/core';
import {PagedList} from "../../home/pagedlist";
import {UseCaseService} from "../../case/use-case.service";
import {SiteCase} from "../../home/case";



@Component({
  selector: 'content',
  templateUrl: './user-more.component.html'
})
export class UserMoreComponent implements OnInit{
  pagedList: PagedList<SiteCase>;

  constructor(private useCaseSercice: UseCaseService) {
    this.pagedList = new PagedList<SiteCase>();
  }

  ngOnInit(): void {
    this.useCaseSercice.getCaseList().then(cases => {
      this.pagedList = cases;
    });
  }

  showMore() {
    this.useCaseSercice.getCaseList(this.pagedList.pageNum + 1)
      .then(
        cases => {
          var nextPagedList = cases;
          this.pagedList.pageNum = nextPagedList.pageNum;
          this.pagedList.pageSize = nextPagedList.pageSize;
          this.pagedList.size = nextPagedList.size;
          this.pagedList.total = nextPagedList.total;
          this.pagedList.pages = nextPagedList.pages;
          for (let siteCase of nextPagedList.list) {
            this.pagedList.list.push(siteCase);
          }
          this.pagedList.hasPreviousPage = nextPagedList.hasPreviousPage;
          this.pagedList.hasNextPage = nextPagedList.hasNextPage;
          this.pagedList.firstPage = nextPagedList.firstPage;
          this.pagedList.lastPage = nextPagedList.lastPage;
        }
      );
  }

}
