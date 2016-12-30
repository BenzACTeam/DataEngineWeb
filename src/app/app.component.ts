import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private showSidebar = true;
  private sidebarStyle;
  private mainContentStyle;

  private toggleSidebar() {
    this.showSidebar = !this.showSidebar;

    if (!this.showSidebar) {
      this.sidebarStyle = {
        'margin-left': '-240px'
      };
      this.mainContentStyle = {
        'margin-left': '0'
      };
    }
    else {
      this.sidebarStyle = {};
      this.mainContentStyle = {};
    }
  }
}
