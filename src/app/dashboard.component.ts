/**
 * Created by paulliu on 2016/12/7.
 */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  cases: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
