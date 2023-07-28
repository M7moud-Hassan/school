import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/schools-module/Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AgentSupportService {

  constructor(private http:HttpClient) { }
  
  addNew(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getSupprotList():agentSupportListModel[]{
    return [
      {id:1,title:' مشكلة فى حساب المشرف رقم 1',schoolName:'مدرسة رقم 001',date:'15/6/2013',status:true,},
      {id:2,title:' مشكلة فى حساب المشرف رقم 2',schoolName:'مدرسة رقم 002',date:'15/6/2013',status:true,},
      {id:3,title:' مشكلة فى حساب المشرف رقم 3',schoolName:'مدرسة رقم 003',date:'15/6/2013',status:false,},
      {id:4,title:' مشكلة فى حساب المشرف رقم 4',schoolName:'مدرسة رقم 004',date:'15/6/2013',status:true,},
      {id:5,title:' مشكلة فى حساب المشرف رقم 5',schoolName:'مدرسة رقم 005',date:'15/6/2013',status:true,},
      {id:6,title:' مشكلة فى حساب المشرف رقم 6',schoolName:'مدرسة رقم 006',date:'15/6/2013',status:true,},
      {id:7,title:' مشكلة فى حساب المشرف رقم 7',schoolName:'مدرسة رقم 007',date:'15/6/2013',status:true,},
      {id:8,title:' مشكلة فى حساب المشرف رقم 8',schoolName:'مدرسة رقم 008',date:'15/6/2013',status:false,},
      {id:9,title:' مشكلة فى حساب المشرف رقم 9',schoolName:'مدرسة رقم 009',date:'15/6/2013',status:true,},
      {id:10,title:' مشكلة فى حساب المشرف رقم 10',schoolName:'مدرسة رقم 010',date:'15/6/2013',status:true,},
  
      {id:11,title:' مشكلة فى حساب المشرف رقم 11',schoolName:'مدرسة رقم 011',date:'15/6/2013',status:true,},
      {id:12,title:' مشكلة فى حساب المشرف رقم 12',schoolName:'مدرسة رقم 012',date:'15/6/2013',status:true,},
      {id:13,title:' مشكلة فى حساب المشرف رقم 13',schoolName:'مدرسة رقم 013',date:'15/6/2013',status:true,},
      {id:14,title:' مشكلة فى حساب المشرف رقم 14',schoolName:'مدرسة رقم 014',date:'15/6/2013',status:true,},
      {id:15,title:' مشكلة فى حساب المشرف رقم 15',schoolName:'مدرسة رقم 015',date:'15/6/2013',status:false,},
      {id:16,title:' مشكلة فى حساب المشرف رقم 16',schoolName:'مدرسة رقم 016',date:'15/6/2013',status:true,},
      {id:17,title:' مشكلة فى حساب المشرف رقم 17',schoolName:'مدرسة رقم 017',date:'15/6/2013',status:true,},
      {id:18,title:' مشكلة فى حساب المشرف رقم 18',schoolName:'مدرسة رقم 018',date:'15/6/2013',status:true,},
      {id:19,title:' مشكلة فى حساب المشرف رقم 19',schoolName:'مدرسة رقم 019',date:'15/6/2013',status:false,},
      {id:20,title:'مشكلة فى حساب المشرف رقم 20 ',schoolName:'مدرسة رقم 020',date:'15/6/2013',status:true,},
      
      {id:21,title:' مشكلة فى حساب المشرف رقم 21',schoolName:'مدرسة رقم 021',date:'15/6/2013',status:false,},
      {id:22,title:' مشكلة فى حساب المشرف رقم 22',schoolName:'مدرسة رقم 022',date:'15/6/2013',status:true,},
      {id:23,title:' مشكلة فى حساب المشرف رقم 23',schoolName:'مدرسة رقم 023',date:'15/6/2013',status:true,},
      {id:24,title:' مشكلة فى حساب المشرف رقم 24',schoolName:'مدرسة رقم 024',date:'15/6/2013',status:true,},
      {id:25,title:' مشكلة فى حساب المشرف رقم 25',schoolName:'مدرسة رقم 025',date:'15/6/2013',status:true,},
      {id:26,title:' مشكلة فى حساب المشرف رقم 26',schoolName:'مدرسة رقم 026',date:'15/6/2013',status:false,},
      {id:27,title:' مشكلة فى حساب المشرف رقم 27',schoolName:'مدرسة رقم 027',date:'15/6/2013',status:false,},
      {id:28,title:' مشكلة فى حساب المشرف رقم 28',schoolName:'مدرسة رقم 028',date:'15/6/2013',status:false,},
      {id:29,title:' مشكلة فى حساب المشرف رقم 29',schoolName:'مدرسة رقم 029',date:'15/6/2013',status:false,},
      {id:30,title:' مشكلة فى حساب المشرف رقم 30',schoolName:'مدرسة رقم 030',date:'15/6/2013',status:true,},
  
      {id:41,title:' مشكلة فى حساب المشرف رقم 41',schoolName:'مدرسة رقم 031',date:'15/6/2013',status:true,},
      {id:42,title:' مشكلة فى حساب المشرف رقم 42',schoolName:'مدرسة رقم 032',date:'15/6/2013',status:false,},
      {id:43,title:' مشكلة فى حساب المشرف رقم 43',schoolName:'مدرسة رقم 033',date:'15/6/2013',status:true,},
      {id:44,title:' مشكلة فى حساب المشرف رقم 44',schoolName:'مدرسة رقم 034',date:'15/6/2013',status:false,},
      {id:45,title:' مشكلة فى حساب المشرف رقم 45',schoolName:'مدرسة رقم 035',date:'15/6/2013',status:true,},
      {id:46,title:' مشكلة فى حساب المشرف رقم 46',schoolName:'مدرسة رقم 036',date:'15/6/2013',status:true,},
      {id:47,title:' مشكلة فى حساب المشرف رقم 47',schoolName:'مدرسة رقم 037',date:'15/6/2013',status:true,},
      {id:48,title:' مشكلة فى حساب المشرف رقم 48',schoolName:'مدرسة رقم 038',date:'15/6/2013',status:true,},
      {id:49,title:' مشكلة فى حساب المشرف رقم 49',schoolName:'مدرسة رقم 039',date:'15/6/2013',status:true,},
      {id:50,title:' مشكلة فى حساب المشرف رقم 50',schoolName:'مدرسة رقم 040',date:'15/6/2013',status:false,},
    ];
  }
}
export interface agentSupportListModel{
  id:any,
  title:any,
  date:any,
  schoolName:any,
  status:any,

}