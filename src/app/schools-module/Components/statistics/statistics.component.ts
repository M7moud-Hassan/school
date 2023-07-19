import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  statisctics=[
    {label:'المجموعات',count:5,image:'/assets/images/group.png'},
    {label:'طلبات الغياب',count:31,image:'/assets/images/calender.svg'},
    {label:'الانشطة',count:19,image:'/assets/images/group.png'},
    {label:'المستخدمين',count:130,image:'/assets/images/users.svg'},
    {label:'المشرفين',count:17,image:'/assets/images/supervisor.svg'},
    {label:'الرحلات',count:94,image:'/assets/images/journey.svg'},
    {label:'الامتحانات',count:10,image:'/assets/images/group.png'},
    {label:'المجموعات',count:5,image:'/assets/images/group.png'},
    {label:'طلبات الغياب',count:31,image:'/assets/images/calender.svg'},
    {label:'الانشطة',count:19,image:'/assets/images/group.png'},
    {label:'المستخدمين',count:130,image:'/assets/images/users.svg'},
    {label:'المشرفين',count:17,image:'/assets/images/supervisor.svg'},
    {label:'الرحلات',count:94,image:'/assets/images/journey.svg'},
    {label:'الامتحانات',count:10,image:'/assets/images/group.png'},
  ];
}
