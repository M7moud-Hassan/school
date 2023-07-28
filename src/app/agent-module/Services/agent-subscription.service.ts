import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from 'src/app/schools-module/Core/Models/response-model';

@Injectable({
  providedIn: 'root'
})
export class AgentSubscriptionService {

  constructor(private http:HttpClient) { }

  addNewSubscriber(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getSubscribersList():subscriptionsListModel[]{
    return [
      {id:3, name:'المشترك شركه رقم 003', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:false, extraInfo:{supervisors:17,subscribers:7,students:11,parents:3,groups:1,buses:1,todayTrips:3}},
      {id:1, name:'المشترك شركه رقم 001', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:12,subscribers:5,students:10,parents:4,groups:5,buses:2,todayTrips:1}},
      {id:2, name:'المشترك شركه رقم 002', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:14,subscribers:4,students:18,parents:1,groups:3,buses:3,todayTrips:7}},
      {id:4, name:'المشترك شركه رقم 004', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:false, extraInfo:{supervisors:11,subscribers:1,students:12,parents:4,groups:6,buses:7,todayTrips:7}},
      {id:5, name:'المشترك شركه رقم 005', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:false, extraInfo:{supervisors:10,subscribers:9,students:15,parents:6,groups:9,buses:3,todayTrips:5}},
      {id:6, name:'المشترك شركه رقم 006', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:13,subscribers:2,students:13,parents:4,groups:2,buses:6,todayTrips:6}},
      {id:7, name:'المشترك شركه رقم 007', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:12,subscribers:4,students:11,parents:7,groups:10,buses:3,todayTrips:8}},
      {id:8, name:'المشترك شركه رقم 008', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:11,subscribers:8,students:15,parents:9,groups:7,buses:2,todayTrips:2}},
      {id:9, name:'المشترك شركه رقم 009', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:18,subscribers:9,students:19,parents:2,groups:2,buses:6,todayTrips:9}},
      {id:10, name:'المشترك شركه رقم 0010', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:12,subscribers:5,students:10,parents:4,groups:5,buses:2,todayTrips:1}},

      {id:11, name:'المشترك شركه رقم 011', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:12,subscribers:5,students:10,parents:4,groups:5,buses:2,todayTrips:1}},
      {id:12, name:'المشترك شركه رقم 012', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:14,subscribers:4,students:18,parents:1,groups:3,buses:3,todayTrips:7}},
      {id:13, name:'المشترك شركه رقم 013', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:17,subscribers:7,students:11,parents:3,groups:1,buses:1,todayTrips:3}},
      {id:14, name:'المشترك شركه رقم 014', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:11,subscribers:1,students:12,parents:4,groups:6,buses:7,todayTrips:7}},
      {id:15, name:'المشترك شركه رقم 015', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:10,subscribers:9,students:15,parents:6,groups:9,buses:3,todayTrips:5}},
      {id:16, name:'المشترك شركه رقم 016', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:13,subscribers:2,students:13,parents:4,groups:2,buses:6,todayTrips:6}},
      {id:17, name:'المشترك شركه رقم 017', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:12,subscribers:4,students:11,parents:7,groups:10,buses:3,todayTrips:8}},
      {id:18, name:'المشترك شركه رقم 018', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:11,subscribers:8,students:15,parents:9,groups:7,buses:2,todayTrips:2}},
      {id:19, name:'المشترك شركه رقم 019', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:18,subscribers:9,students:19,parents:2,groups:2,buses:6,todayTrips:9}},
      {id:20, name:'المشترك شركه رقم 0020', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:12,subscribers:5,students:10,parents:4,groups:5,buses:2,todayTrips:1}},

      {id:21, name:'المشترك شركه رقم 021', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:false, extraInfo:{supervisors:12,subscribers:5,students:10,parents:4,groups:5,buses:2,todayTrips:1}},
      {id:22, name:'المشترك شركه رقم 022', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:false, extraInfo:{supervisors:14,subscribers:4,students:18,parents:1,groups:3,buses:3,todayTrips:7}},
      {id:23, name:'المشترك شركه رقم 023', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:false, extraInfo:{supervisors:17,subscribers:7,students:11,parents:3,groups:1,buses:1,todayTrips:3}},
      {id:24, name:'المشترك شركه رقم 024', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:11,subscribers:1,students:12,parents:4,groups:6,buses:7,todayTrips:7}},
      {id:25, name:'المشترك شركه رقم 025', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:10,subscribers:9,students:15,parents:6,groups:9,buses:3,todayTrips:5}},
      {id:26, name:'المشترك شركه رقم 026', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:13,subscribers:2,students:13,parents:4,groups:2,buses:6,todayTrips:6}},
      {id:27, name:'المشترك شركه رقم 027', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:12,subscribers:4,students:11,parents:7,groups:10,buses:3,todayTrips:8}},
      {id:28, name:'المشترك شركه رقم 028', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:11,subscribers:8,students:15,parents:9,groups:7,buses:2,todayTrips:2}},
      {id:29, name:'المشترك شركه رقم 029', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:18,subscribers:9,students:19,parents:2,groups:2,buses:6,todayTrips:9}},
      {id:30, name:'المشترك شركه رقم 030', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:12,subscribers:5,students:10,parents:4,groups:5,buses:2,todayTrips:1}},

      {id:31, name:'المشترك شركه رقم 031', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:12,subscribers:5,students:10,parents:4,groups:5,buses:2,todayTrips:1}},
      {id:32, name:'المشترك شركه رقم 032', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:false, extraInfo:{supervisors:14,subscribers:4,students:18,parents:1,groups:3,buses:3,todayTrips:7}},
      {id:33, name:'المشترك شركه رقم 033', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:false, extraInfo:{supervisors:17,subscribers:7,students:11,parents:3,groups:1,buses:1,todayTrips:3}},
      {id:34, name:'المشترك شركه رقم 034', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:false, extraInfo:{supervisors:11,subscribers:1,students:12,parents:4,groups:6,buses:7,todayTrips:7}},
      {id:35, name:'المشترك شركه رقم 035', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:10,subscribers:9,students:15,parents:6,groups:9,buses:3,todayTrips:5}},
      {id:36, name:'المشترك شركه رقم 036', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:13,subscribers:2,students:13,parents:4,groups:2,buses:6,todayTrips:6}},
      {id:37, name:'المشترك شركه رقم 037', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:false, finishingTripUsingQR:true, extraInfo:{supervisors:12,subscribers:4,students:11,parents:7,groups:10,buses:3,todayTrips:8}},
      {id:38, name:'المشترك شركه رقم 038', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:11,subscribers:8,students:15,parents:9,groups:7,buses:2,todayTrips:2}},
      {id:39, name:'المشترك شركه رقم 039', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:false, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:18,subscribers:9,students:19,parents:2,groups:2,buses:6,todayTrips:9}},
      {id:40, name:'المشترك شركه رقم 0040', phone:'+201287363783', image:'/assets/images/user.png', subscriptionDate:'12/05/2023', expirationDate:'14/06/2023', isOpened : false,isSelected:false,drawPath:true, saveTripPath:true, finishingTripUsingQR:true, extraInfo:{supervisors:12,subscribers:5,students:10,parents:4,groups:5,buses:2,todayTrips:1}},
    ]
  }
}
export interface subscriptionsListModel{
  id:any,
  name:any,
  phone:any,
  image:any,
  subscriptionDate:any,
  expirationDate:any,
  drawPath:any,
  isSelected:any,
  isOpened:any,
  saveTripPath:any,
  finishingTripUsingQR:any,
  extraInfo:{
    supervisors:any,
    subscribers:any,
    students:any,
    parents:any,
    groups:any,
    buses:any,
    todayTrips:any,
  },
}
