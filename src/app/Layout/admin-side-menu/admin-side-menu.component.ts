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
    {id:5,isSelected:false,link:'/admin/subscriptions',label:'الإشتراكات',selectedIcon:'assets/images/subscriptionsLisght.svg',unSelectedIcon:'assets/images/subscriptionsDark.svg',subLink: []},
    {id:6,isSelected:false,link:'#',label:'الإعلانات',selectedIcon:'assets/images/adsLight.svg',unSelectedIcon:'assets/images/ads.svg',subLink: []},
    {id:7,isSelected:false,link:'#',label:'الإشعارات',selectedIcon:'assets/images/notificationLight.svg',unSelectedIcon:'assets/images/notifications.svg',subLink: []},
    {id:8,isSelected:false,link:'#',label:'الإشعارات المؤقتة',selectedIcon:'assets/images/tempAdsLight.svg',unSelectedIcon:'assets/images/tempAdsDark.svg',subLink: []},
    {id:9,isSelected:false,link:'/admin/content-management',label:'إدارة المحتوى',selectedIcon:'assets/images/contentManagementLight.svg',unSelectedIcon:'assets/images/contentMAnagementDark.svg',subLink: []},
    {id:10,isSelected:false,link:'/admin/admin-management',label:'إدارة النظام',selectedIcon:'assets/images/systemManagementLight.svg',unSelectedIcon:'assets/images/systemManagementDark.svg',subLink: []},
    {id:11,isSelected:false,link:'#',label:'الدعم الفنى',selectedIcon:'assets/images/helpLight.svg',unSelectedIcon:'assets/images/help.svg',subLink: []},
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