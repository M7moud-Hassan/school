import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JourneyReportModel } from '../Core/Models/journey-report-model';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';
import { NewTripGroupModel } from '../Core/Models/new-trip-group-model';

@Injectable({
  providedIn: 'root'
})
export class TripsAndGroupsService {

  constructor(private http:HttpClient) { }

  searchTripReport(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  addNewTripGroup(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getTripsList():tripsListModel[]{
    return [
      {id:1,groupNameAr:'حى البشر',groupNameEn:'Hi Elbishr',supervisorName:'محمد كمال',studentCount:14,active:false,codeActive:false,date:'2023-06-01',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى الكاظم',groupNameEn:'Hi Elkazem',supervisorName:'على خضيرى',studentCount:12,active:true,codeActive:true,date:'2023-06-02',journeyType:'outboundJourney'},
      {id:1,groupNameAr:'حى الهادى',groupNameEn:'Hi Elhadi',supervisorName:'احمد هراس',studentCount:8,active:false,codeActive:false,date:'2023-06-01',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى الكافورى',groupNameEn:'Hi Elkafoury',supervisorName:'مصطفى ماجد',studentCount:11,active:true,codeActive:true,date:'2023-06-02',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى الهدى',groupNameEn:'Hi Elhuda',supervisorName:'عبدالعزيز خالد',studentCount:10,active:false,codeActive:true,date:'2023-06-01',journeyType:'outboundJourney'},
      {id:1,groupNameAr:'حى العملين',groupNameEn:'Hi Elalamein',supervisorName:'رجب العريان',studentCount:8,active:true,codeActive:false,date:'2023-06-05',journeyType:'outboundJourney'},
      {id:1,groupNameAr:'حى المنتزه',groupNameEn:'Hi Elmontazah',supervisorName:'منتصر حازم',studentCount:15,active:true,codeActive:false,date:'2023-06-01',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى خان',groupNameEn:'Hi Khan',supervisorName:'عامر القرنى',studentCount:8,active:true,codeActive:false,date:'2023-06-01',journeyType:'outboundJourney'},
      {id:1,groupNameAr:'حى العمورى',groupNameEn:'Hi Elamoury',supervisorName:'بلال محمد',studentCount:9,active:false,codeActive:true,date:'2023-06-06',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى الرشيد',groupNameEn:'Hi Elrasheed',supervisorName:'على فراج',studentCount:17,active:true,codeActive:true,date:'2023-06-09',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى الراشد',groupNameEn:'Hi Elrashed',supervisorName:'علاء محمود',studentCount:21,active:false,codeActive:false,date:'2023-06-11',journeyType:'returnJourney'},
      {id:1,groupNameAr:'حى المعتصم',groupNameEn:'Hi Elmoatasem',supervisorName:'مصطفى عبدالعال',studentCount:8,active:false,codeActive:true,date:'2023-06-10',journeyType:'returnJourney'},
    ];
  }
  getGroupDetails():groupsDetailsModel{
    return {
      groupNameAr:'مجموعة حي البشر',
      groupNameEn:'Al Bishr',
      studentDetails:[
        {id:1,studentName:'الطالب رقم 1',supervisorName:'المشرف رقم 1',phone:'+2 3367368363',isOutgoingTrip:false,isReturnTrip:true,isSelected:false},
        {id:2,studentName:'الطالب رقم 2',supervisorName:'المشرف رقم 2',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:3,studentName:'الطالب رقم 3',supervisorName:'المشرف رقم 3',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:true,isSelected:false},
        {id:4,studentName:'الطالب رقم 4',supervisorName:'المشرف رقم 4',phone:'+2 3367368363',isOutgoingTrip:false,isReturnTrip:true,isSelected:false},
        {id:5,studentName:'الطالب رقم 5',supervisorName:'المشرف رقم 5',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:true,isSelected:false},
        {id:6,studentName:'الطالب رقم 6',supervisorName:'المشرف رقم 6',phone:'+2 3367368363',isOutgoingTrip:false,isReturnTrip:true,isSelected:false},
        {id:7,studentName:'الطالب رقم 7',supervisorName:'المشرف رقم 7',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:8,studentName:'الطالب رقم 8',supervisorName:'المشرف رقم 8',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:9,studentName:'الطالب رقم 9',supervisorName:'المشرف رقم 9',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:10,studentName:'الطالب رقم 10',supervisorName:'المشرف رقم 10',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:true,isSelected:false},

        {id:11,studentName:'الطالب رقم 11',supervisorName:'المشرف رقم 11',phone:'+2 3367368363',isOutgoingTrip:false,isReturnTrip:true,isSelected:false},
        {id:12,studentName:'الطالب رقم 12',supervisorName:'المشرف رقم 12',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:13,studentName:'الطالب رقم 13',supervisorName:'المشرف رقم 13',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:true,isSelected:false},
        {id:14,studentName:'الطالب رقم 14',supervisorName:'المشرف رقم 14',phone:'+2 3367368363',isOutgoingTrip:false,isReturnTrip:true,isSelected:false},
        {id:15,studentName:'الطالب رقم 15',supervisorName:'المشرف رقم 15',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:true,isSelected:false},
        {id:16,studentName:'الطالب رقم 16',supervisorName:'المشرف رقم 16',phone:'+2 3367368363',isOutgoingTrip:false,isReturnTrip:true,isSelected:false},
        {id:17,studentName:'الطالب رقم 17',supervisorName:'المشرف رقم 17',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:18,studentName:'الطالب رقم 18',supervisorName:'المشرف رقم 18',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:19,studentName:'الطالب رقم 19',supervisorName:'المشرف رقم 19',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:20,studentName:'الطالب رقم 20',supervisorName:'المشرف رقم 20',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:true,isSelected:false},

        {id:21,studentName:'الطالب رقم 21',supervisorName:'المشرف رقم 21',phone:'+2 3367368363',isOutgoingTrip:false,isReturnTrip:true,isSelected:false},
        {id:22,studentName:'الطالب رقم 22',supervisorName:'المشرف رقم 22',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:23,studentName:'الطالب رقم 23',supervisorName:'المشرف رقم 23',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:true,isSelected:false},
        {id:24,studentName:'الطالب رقم 24',supervisorName:'المشرف رقم 24',phone:'+2 3367368363',isOutgoingTrip:false,isReturnTrip:true,isSelected:false},
        {id:25,studentName:'الطالب رقم 25',supervisorName:'المشرف رقم 25',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:true,isSelected:false},
        {id:26,studentName:'الطالب رقم 26',supervisorName:'المشرف رقم 26',phone:'+2 3367368363',isOutgoingTrip:false,isReturnTrip:true,isSelected:false},
        {id:27,studentName:'الطالب رقم 27',supervisorName:'المشرف رقم 27',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:28,studentName:'الطالب رقم 28',supervisorName:'المشرف رقم 28',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:29,studentName:'الطالب رقم 29',supervisorName:'المشرف رقم 29',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:false,isSelected:false},
        {id:30,studentName:'الطالب رقم 30',supervisorName:'المشرف رقم 30',phone:'+2 3367368363',isOutgoingTrip:true,isReturnTrip:true,isSelected:false},
      ]
    };
  }
  getGroupDetailsData():groupDataModel{
    let model:groupDataModel = {
      groupNameAr:'مجموعة حي البشر',
      groupNameEn:'Al Bishr',
      qrCodeStatus:true,
      supervisor:'محمد الصاوي',
      students:[
        {id:1,name:'الطالب رقم 1',isDeleted:false},
        {id:2,name:'الطالب رقم 2',isDeleted:false},
        {id:3,name:'الطالب رقم 3',isDeleted:false},
        {id:4,name:'الطالب رقم 4',isDeleted:false},
        {id:5,name:'الطالب رقم 5',isDeleted:false},
        {id:6,name:'الطالب رقم 6',isDeleted:false},
        {id:7,name:'الطالب رقم 7',isDeleted:false},
        {id:8,name:'الطالب رقم 8',isDeleted:false},
        {id:9,name:'الطالب رقم 9',isDeleted:false},
        {id:10,name:'الطالب رقم 10',isDeleted:false},
        {id:11,name:'الطالب رقم 11',isDeleted:false},
        {id:12,name:'الطالب رقم 12',isDeleted:false},
      ]
    }
   return model;
  }
}
export interface tripsListModel{
  id:any,
  groupNameAr:any,
  groupNameEn:any,
  supervisorName:any,
  studentCount:any,
  active:any,
  codeActive:any,
  date:any,
  journeyType:any
}
export interface groupsDetailsModel{
  groupNameEn:any,
  groupNameAr:any,
  studentDetails:studentsDetailsModel[]
}
export interface studentsDetailsModel{
  id:any,
  studentName:any,
  supervisorName:any,
  isReturnTrip:any,
  isOutgoingTrip:any,
  phone:any,
  isSelected:any
}
export interface groupDataModel{
  groupNameAr:any,
  groupNameEn:any,
  supervisor:any,
  qrCodeStatus:any,
  students:any
}