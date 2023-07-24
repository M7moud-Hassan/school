import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor() { }
  getAll():activitiesModel[]{
    return [
      {label:'إجمالي عدد الطلاب : 30',activityName:'طلبات الغياب',count:'9',percent:'15'},
      {label:'إجمالي عدد الرحلات : 30',activityName:'عدد الرحلات',count:'28',percent:'70'},
      {label:'إجمالي عدد الرحلات اليوم : 30',activityName:'الرحلات الفعالة',count:'س',percent:'58'},
    ];
  }
}
export interface activitiesModel{
  label:any,
  activityName:any,
  count:any,
  percent:any,
}
