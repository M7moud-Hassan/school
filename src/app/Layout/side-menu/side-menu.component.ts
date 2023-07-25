import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  constructor(private router:Router){}
  list = [
    {id:1,isSelected:true,link:'/school/home',label:'لوحة التحكم',selectedIcon:'assets/images/menu.svg',unSelectedIcon:'assets/images/tracking.svg',subLink:
  [

  ]},
    {id:2,isSelected:false,link:'/school/today-journey',label:'تتبع الرحلات',selectedIcon:'assets/images/trackingLight.svg',unSelectedIcon:'assets/images/tracking.svg',subLink:
  [

  ]},
    {id:3,isSelected:false,link:'/school/students-list',label:'الطلاب',selectedIcon:'assets/images/studentsLight.svg',unSelectedIcon:'assets/images/students.svg',subLink:
  [

  ]},
    {id:4,isSelected:false,link:'/school/parents-list',label:'أولياء الأمور',selectedIcon:'assets/images/parentsLight.svg',unSelectedIcon:'assets/images/parents.svg',subLink:
  [

  ]},
    {id:5,isSelected:false,link:'#',label:'الباصات و المشرفين',selectedIcon:'assets/images/busLight.svg',unSelectedIcon:'assets/images/bus.svg',subLink:
  [
    {id:50,isSelected:true,sub_link:'/school/supervisor-list',label:'المشرفين',selectedIcon:'assets/images/busLight.svg',unSelectedIcon:'assets/images/subLinkSupervisor.svg',},
    {id:51,isSelected:false,sub_link:'/school/bus-list',label:'الباصات',selectedIcon:'assets/images/subLinkbusLight.svg',unSelectedIcon:'assets/images/bus.svg',},
  ]},
    {id:6,isSelected:false,link:'/school/trips-and-groups',label:'الرحلات و المجموعات',selectedIcon:'assets/images/tripsAndGroups.svg',unSelectedIcon:'assets/images/trips.svg',subLink:
  [

  ]},
    {id:7,isSelected:false,link:'/school/ads',label:'الإعلانات',selectedIcon:'assets/images/adsLight.svg',unSelectedIcon:'assets/images/ads.svg',subLink:
  [

  ]},
    {id:8,isSelected:false,link:'/school/notifications',label:'الإشعارات',selectedIcon:'assets/images/notificationLight.svg',unSelectedIcon:'assets/images/notifications.svg',subLink:
  [

  ]},
    {id:9,isSelected:false,link:'/school/absence-list',label:'طلبات الغياب',selectedIcon:'assets/images/absentLight.svg',unSelectedIcon:'assets/images/absent.svg',subLink:
  [

  ]},
    {id:10,isSelected:false,link:'/school/support',label:'الدعم الفنى',selectedIcon:'assets/images/helpLight.svg',unSelectedIcon:'assets/images/help.svg',subLink:
  [

  ]},
  ]
  
  toggleSelectedItem(no:any){
    for (let i = 0; i < this.list.length; i++) {
      if(no==i){
        this.list[i].isSelected = true;
        if(this.list[i].subLink.length>0){
          this.router.navigate([this.list[i].subLink[0].sub_link]);
        }
      }
      else{
        this.list[i].isSelected = false;
      }
    }
  }
  toggleSubSelectedItem(mainItemIndex:any,subItemIndex:any,currentIndex:any){
    this.list[mainItemIndex-1].subLink[0].isSelected = false;
    this.list.map(item=>{
      item.subLink.map(sub=>{
        if(item.id == mainItemIndex && sub.id == subItemIndex){
          sub.isSelected=true;
        }else{
          sub.isSelected=false;
        }
      })
    });
  }
}
