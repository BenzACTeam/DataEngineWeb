/**
 * Created by paulliu on 2016/12/7.
 */

import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'content',
  templateUrl: './user.component.html'
})
export class UserComponent {
  public max: number = 200;
  public showWarning: boolean;
  public dynamic: number=100;


}
