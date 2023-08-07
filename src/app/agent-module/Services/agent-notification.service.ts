import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from 'src/app/schools-module/Core/Models/response-model';

@Injectable({
  providedIn: 'root'
})
export class AgentNotificationService {

  constructor(private http:HttpClient) { }
  
  addNewNotification(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getNotificationList():agentNotificationListModel[]{
    return [
      {id:1,title:'الإشعار رقم 001',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-07-11'},
      {id:2,title:'الإشعار رقم 002',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-07-11'},
      {id:3,title:'الإشعار رقم 003',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-07-11'},
      {id:4,title:'الإشعار رقم 004',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-02'},
      {id:5,title:'الإشعار رقم 005',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-02'},
      {id:6,title:'الإشعار رقم 006',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-08-02'},
      {id:7,title:'الإشعار رقم 007',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-07-05'},
      {id:8,title:'الإشعار رقم 008',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-07-05'},
      {id:9,title:'الإشعار رقم 009',recievedTo:'تم الإرسال إلى 15 جهة',recievedDate:'2023-07-05'},
      {id:10,title:'الإشعار رقم 0010',recievedTo:'تم الإرسال إلى 18 جهات',recievedDate:'2023-07-11'},
      {id:11,title:'الإشعار رقم 011',recievedTo: 'تم الإرسال إلى 18 جهات',recievedDate:'2023-07-10'},
      {id:12,title:'الإشعار رقم 012',recievedTo: 'تم الإرسال إلى 18 جهات',recievedDate:'2023-07-10'},
      {id:13,title:'الإشعار رقم 013',recievedTo: 'تم الإرسال إلى 18 جهات',recievedDate:'2023-07-10'},
    ];
  }
}
export interface agentNotificationListModel{
  id:any,
  title:any,
  recievedTo:any,
  recievedDate:any,
}

