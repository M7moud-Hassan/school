import { Injectable } from '@angular/core';
import { statiscticsModel } from 'src/app/schools-module/Services/statistics.service';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeService {

  constructor() { }
  getAll():statiscticsModel[]{
    return [
      {label:'المستخدمين',count:130,image:'/assets/images/users.svg'},
      {label:'المشرفين',count:17,image:'/assets/images/supervisor.svg'},
      {label:'الرحلات',count:94,image:'/assets/images/journey.svg'},
      {label:'الاشتراكات',count:94,image:'/assets/images/suspend.svg'},
    ];
  }
}
