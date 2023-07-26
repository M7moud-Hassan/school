import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentHomeService {

  constructor() { }
  
  getAllStatisctics():statisctics_Model[]{
    return [
      {label:'المستخدمين',count:130,image:'/assets/images/users.svg'},
      {label:'المشرفين',count:17,image:'/assets/images/supervisor.svg'},
      {label:'الرحلات',count:94,image:'/assets/images/journey.svg'},
      {label:'الإشتراكات',count:5,image:'/assets/images/blueSubscriptions.svg'},
    ];
  }
  getAllActivities():activities_Model[]{
    return [
      {label:'إجمالي عدد الرحلات : 30',activityName:'عدد الرحلات',count:'28',percent:'70'},
      {label:'إجمالي عدد رحلات اليوم : 30',activityName:'الرحلات الفعالة',count:'9',percent:'15'},
      {label:'إجمالي عدد المدارس : 30',activityName:'المدارس الفعالة',count:'س',percent:'58'},
    ];
  }
}

export interface statisctics_Model{
  label:any,
  count:any,
  image:any,
}
export interface activities_Model{
  label:any,
  activityName:any,
  count:any,
  percent:any,
}