import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../Core/Models/response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }
  
  addNew(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getNotificationList():notificationListModel[]{
    return [
      {id:1,title:'الإشعار رقم 001',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-05'},
      {id:2,title:'الإشعار رقم 002',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-05'},
      {id:3,title:'الإشعار رقم 003',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-05'},
      {id:4,title:'الإشعار رقم 004',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-01'},
      {id:5,title:'الإشعار رقم 005',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-01'},
      {id:6,title:'الإشعار رقم 006',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-01'},
      {id:7,title:'الإشعار رقم 007',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-10'},
      {id:8,title:'الإشعار رقم 008',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-10'},
      {id:9,title:'الإشعار رقم 009',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-10'},
      {id:10,title:'الإشعار رقم 0010',recievedTo:'تم الإرسال إلى 18 جهات',recievedDate:'2023-08-05'},
      {id:11,title:'الإشعار رقم 011',recievedTo: 'تم الإرسال إلى 18 جهات',recievedDate:'2023-07-15'},
      {id:12,title:'الإشعار رقم 012',recievedTo: 'تم الإرسال إلى 18 جهات',recievedDate:'2023-07-15'},
      {id:13,title:'الإشعار رقم 013',recievedTo: 'تم الإرسال إلى 18 جهات',recievedDate:'2023-07-15'},
    ];
  }
}
export interface notificationListModel{
  id:any,
  title:any,
  recievedTo:any,
  recievedDate:any,
}
