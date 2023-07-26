import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-side-menu',
  templateUrl: './agent-side-menu.component.html',
  styleUrls: ['./agent-side-menu.component.css']
})
export class AgentSideMenuComponent {
  constructor(private router:Router){}
  list = [
    {id:1,isSelected:true,link:'/agent/home',label:'لوحة التحكم',selectedIcon:'assets/images/menu.svg',unSelectedIcon:'assets/images/dashboardDark.svg',subLink: []},
    {id:2,isSelected:false,link:'/agent/users',label:'مستخدمى النظام',selectedIcon:'assets/images/systemUserLight.svg',unSelectedIcon:'assets/images/systemUsers.svg',subLink: []},
    {id:3,isSelected:false,link:'#',label:'الإشتراكات',selectedIcon:'assets/images/subscriptionsLisght.svg',unSelectedIcon:'assets/images/subscriptionsDark.svg',subLink: []},
    {id:4,isSelected:false,link:'#',label:'الإعلانات',selectedIcon:'assets/images/adsLight.svg',unSelectedIcon:'assets/images/ads.svg',subLink: []},
    {id:5,isSelected:false,link:'#',label:'الإشعارات',selectedIcon:'assets/images/notificationLight.svg',unSelectedIcon:'assets/images/notifications.svg',subLink: []},
    {id:6,isSelected:false,link:'#',label:'الدعم الفنى',selectedIcon:'assets/images/helpLight.svg',unSelectedIcon:'assets/images/help.svg',subLink: []},
  ];
  
  toggleSelectedItem(no:any){
    for (let i = 0; i < this.list.length; i++) {
      if(no==i){
        this.list[i].isSelected = true;
      }
      else{
        this.list[i].isSelected = false;
      }
    }
  }
}