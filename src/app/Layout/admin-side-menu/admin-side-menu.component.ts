import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-side-menu',
  templateUrl: './admin-side-menu.component.html',
  styleUrls: ['./admin-side-menu.component.css']
})
export class AdminSideMenuComponent {
  constructor(private router:Router){}
  list = [
    {id:1,isSelected:true,link:'/admin/home',label:'لوحة التحكم',selectedIcon:'assets/images/menu.svg',unSelectedIcon:'assets/images/dashboardDark.svg',subLink: []},
    {id:2,isSelected:false,link:'/admin/proxies',label:'الوكلاء',selectedIcon:'assets/images/agentsLight.svg',unSelectedIcon:'assets/images/agentsDark.svg',subLink: []},
    {id:3,isSelected:false,link:'/admin/users-system',label:'مستخدمى النظام',selectedIcon:'assets/images/systemUserLight.svg',unSelectedIcon:'assets/images/systemUsers.svg',subLink: []},
    {id:4,isSelected:false,link:'/admin/trips-active',label:'الرحلات الفعالة',selectedIcon:'assets/images/tripsAndGroups.svg',unSelectedIcon:'assets/images/trips.svg',subLink: []},
    {id:5,isSelected:false,link:'/admin/notifications',label:'الاشعارات المؤقتة',selectedIcon:'assets/images/subscriptionsLisght.svg',unSelectedIcon:'assets/images/subscriptionsDark.svg',subLink: []},
    {id:9,isSelected:false,link:'/admin/content-management',label:'إدارة المحتوى',selectedIcon:'assets/images/contentManagementLight.svg',unSelectedIcon:'assets/images/contentMAnagementDark.svg',subLink: []},
    {id:10,isSelected:false,link:'/admin/admin-management',label:'إدارة النظام',selectedIcon:'assets/images/systemManagementLight.svg',unSelectedIcon:'assets/images/systemManagementDark.svg',subLink: []},
    
  ]
  
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