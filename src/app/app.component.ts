import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NbSidebarService, NbMenuItem, NbIconConfig } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection : ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  title = 'Testing Nebular';
  constructor(private sidebarService : NbSidebarService){}
  
  toggle(){
    this.sidebarService.toggle();
  }

  items : NbMenuItem[] = [
    {
      title : 'Profile',
      expanded : true,
      children : [ { title : 'Change Password', link : '/some' },
                   { title : 'Logout' } ]
    },
    { title : 'Shopping Bag' },
    { title : 'Orders' }
  ];

  disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };

}