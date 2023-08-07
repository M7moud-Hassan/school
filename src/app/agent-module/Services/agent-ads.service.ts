import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from 'src/app/schools-module/Core/Models/response-model';

@Injectable({
  providedIn: 'root'
})
export class AgentAdsService {

  constructor(private http:HttpClient) { }
  
  addNewAd(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getAdsList():agentAdsListModel[]{
    return [
      {id:1, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 001', schoolName:'اسم المدرسة رقم 01', creationDate:'2023-06-14', isShown:true},
      {id:2, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 002', schoolName:'اسم المدرسة رقم 02', creationDate:'2023-07-20', isShown:true},
      {id:3, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 003', schoolName:'اسم المدرسة رقم 03', creationDate:'2023-06-14', isShown:false},
      {id:4, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 004', schoolName:'اسم المدرسة رقم 04', creationDate:'2023-08-10', isShown:true},
      {id:5, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 005', schoolName:'اسم المدرسة رقم 05', creationDate:'2023-06-11', isShown:false},
      {id:6, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 006', schoolName:'اسم المدرسة رقم 06', creationDate:'2023-07-01', isShown:true},
      {id:7, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 007', schoolName:'اسم المدرسة رقم 07', creationDate:'2023-06-10', isShown:false},
      {id:8, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 008', schoolName:'اسم المدرسة رقم 08', creationDate:'2023-05-10', isShown:false},
      {id:9, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 009', schoolName:'اسم المدرسة رقم 09', creationDate:'2023-07-20', isShown:true},
      {id:10, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 0010', schoolName:'اسم المدرسة رقم 010', creationDate:'2023-06-11', isShown:true},

      {id:1, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 001', schoolName:'اسم المدرسة رقم 011', creationDate:'2023-06-14', isShown:true},
      {id:12, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 011', schoolName:'اسم المدرسة رقم 01', creationDate:'2023-07-20', isShown:true},
      {id:13, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 013', schoolName:'اسم المدرسة رقم 013', creationDate:'2023-06-14', isShown:false},
      {id:14, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 014', schoolName:'اسم المدرسة رقم 014', creationDate:'2023-08-10', isShown:true},
      {id:15, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 015', schoolName:'اسم المدرسة رقم 015', creationDate:'2023-06-11', isShown:false},
      {id:16, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 016', schoolName:'اسم المدرسة رقم 016', creationDate:'2023-07-01', isShown:true},
      {id:17, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 017', schoolName:'اسم المدرسة رقم 017', creationDate:'2023-06-10', isShown:false},
      {id:18, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 018', schoolName:'اسم المدرسة رقم 018', creationDate:'2023-05-10', isShown:false},
      {id:19, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 019', schoolName:'اسم المدرسة رقم 019', creationDate:'2023-07-20', isShown:true},
      {id:20, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 020', schoolName:'اسم المدرسة رقم 020', creationDate:'2023-06-11', isShown:true},

      {id:21, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 021', schoolName:'اسم المدرسة رقم 021', creationDate:'2023-06-14', isShown:true},
      {id:22, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 022', schoolName:'اسم المدرسة رقم 022', creationDate:'2023-07-20', isShown:true},
      {id:23, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 023', schoolName:'اسم المدرسة رقم 023', creationDate:'2023-06-14', isShown:false},
      {id:24, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 024', schoolName:'اسم المدرسة رقم 024', creationDate:'2023-08-10', isShown:true},
      {id:25, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 025', schoolName:'اسم المدرسة رقم 025', creationDate:'2023-06-11', isShown:false},
      {id:26, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 026', schoolName:'اسم المدرسة رقم 026', creationDate:'2023-07-01', isShown:true},
      {id:27, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 027', schoolName:'اسم المدرسة رقم 027', creationDate:'2023-06-10', isShown:false},
      {id:28, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 028', schoolName:'اسم المدرسة رقم 028', creationDate:'2023-05-10', isShown:false},
      {id:29, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 029', schoolName:'اسم المدرسة رقم 029', creationDate:'2023-07-20', isShown:true},
      {id:30, image:'/assets/images/user.png', title:'عنوان الاعلان رقم 0030', schoolName:'اسم المدرسة رقم 030', creationDate:'2023-06-11', isShown:true},
    ];
  }
}
export interface agentAdsListModel{
  id:any,
  image:any,
  title:any,
  schoolName:any,
  creationDate:any,
  isShown:any,
}
