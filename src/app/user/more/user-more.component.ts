/**
 * Created by paulliu on 2016/12/7.
 */

import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'content',
  templateUrl: './user-more.component.html'
})
export class UserMoreComponent {
  public tabs:any[] = [
    {title: 'Create Cases  ', content: ''},
    {title: 'Liked Cases', content: '', },

  ];

}
