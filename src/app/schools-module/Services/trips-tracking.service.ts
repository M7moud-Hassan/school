import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripsTrackingService {

  constructor() { }
  getAllTrips():TripsTrackingModel[]{
    return [
      {id:1,groupNameAr:'حى البشر',groupNameEn:'Hi Elbishr',supervisorName:'محمد كمال',studentCount:14,active:false,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى الكاظم',groupNameEn:'Hi Elkazem',supervisorName:'على خضيرى',studentCount:12,active:true,codeActive:true,date:'22/5/2023',journeyType:'outboundJourney'},
      {id:1,groupNameAr:'حى الهادى',groupNameEn:'Hi Elhadi',supervisorName:'احمد هراس',studentCount:8,active:false,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى الكافورى',groupNameEn:'Hi Elkafoury',supervisorName:'مصطفى ماجد',studentCount:11,active:true,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى الهدى',groupNameEn:'Hi Elhuda',supervisorName:'عبدالعزيز خالد',studentCount:10,active:false,codeActive:true,date:'22/5/2023',journeyType:'outboundJourney'},
      {id:1,groupNameAr:'حى العملين',groupNameEn:'Hi Elalamein',supervisorName:'رجب العريان',studentCount:8,active:true,codeActive:false,date:'22/5/2023',journeyType:'outboundJourney'},
      {id:1,groupNameAr:'حى المنتزه',groupNameEn:'Hi Elmontazah',supervisorName:'منتصر حازم',studentCount:15,active:true,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى خان',groupNameEn:'Hi Khan',supervisorName:'عامر القرنى',studentCount:8,active:true,codeActive:false,date:'22/5/2023',journeyType:'outboundJourney'},
      {id:1,groupNameAr:'حى العمورى',groupNameEn:'Hi Elamoury',supervisorName:'بلال محمد',studentCount:9,active:false,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى الرشيد',groupNameEn:'Hi Elrasheed',supervisorName:'على فراج',studentCount:17,active:true,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى الراشد',groupNameEn:'Hi Elrashed',supervisorName:'علاء محمود',studentCount:21,active:false,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى المعتصم',groupNameEn:'Hi Elmoatasem',supervisorName:'مصطفى عبدالعال',studentCount:8,active:false,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
    ];
  }
}
export interface TripsTrackingModel{
      id:any,
      groupNameAr:any,
      groupNameEn:any,
      supervisorName:any,
      studentCount:any,
      active:any,
      codeActive:any,
      date:any,
      journeyType:any,
}
