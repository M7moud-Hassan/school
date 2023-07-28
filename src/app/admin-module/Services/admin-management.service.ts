import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/schools-module/Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminManagementService {

  constructor(private http:HttpClient) { }
  Editprofile(model:any):Observable<ResponseModel>{
    alert(',,,,,,,,,,,,,,,,,the Form is Valid,,,,,,,,,,,,,,');
    return this.http.post<any>(`${environment.baseApiUrl}/`,model);
  }
  getManagementList():adminManagementListModel[]{
    return [
      {id:1, area:'منطقة الاعلان رقم 001', schoolName:'اسم   الشركة   / المدرسة رقم 01', creationDate:'03/05/2023', isShown:true},
      {id:2, area:'منطقة الاعلان رقم 002', schoolName:'اسم   الشركة   / المدرسة رقم 02', creationDate:'05/05/2023', isShown:true},
      {id:3, area:'منطقة الاعلان رقم 003', schoolName:'اسم   الشركة   / المدرسة رقم 03', creationDate:'03/05/2023', isShown:false},
      {id:4, area:'منطقة الاعلان رقم 004', schoolName:'اسم   الشركة   / المدرسة رقم 04', creationDate:'07/05/2023', isShown:true},
      {id:5, area:'منطقة الاعلان رقم 005', schoolName:'اسم   الشركة   / المدرسة رقم 05', creationDate:'01/05/2023', isShown:false},
      {id:6, area:'منطقة الاعلان رقم 006', schoolName:'اسم   الشركة   / المدرسة رقم 06', creationDate:'09/05/2023', isShown:true},
      {id:7, area:'منطقة الاعلان رقم 007', schoolName:'اسم   الشركة   / المدرسة رقم 07', creationDate:'02/05/2023', isShown:false},
      {id:8, area:'منطقة الاعلان رقم 008', schoolName:'اسم   الشركة   / المدرسة رقم 08', creationDate:'06/05/2023', isShown:false},
      {id:9, area:'منطقة الاعلان رقم 009', schoolName:'اسم   الشركة   / المدرسة رقم 09', creationDate:'05/05/2023', isShown:true},
      {id:10, area:'منطقة الاعلان رقم 0010', schoolName:'اسم   الشركة   / المدرسة رقم 010', creationDate:'01/05/2023', isShown:true},

      {id:1, area:'منطقة الاعلان رقم 001', schoolName:'اسم   الشركة   / المدرسة رقم 011', creationDate:'03/05/2023', isShown:true},
      {id:12, area:'منطقة الاعلان رقم 011', schoolName:'اسم   الشركة   / المدرسة رقم 01', creationDate:'05/05/2023', isShown:true},
      {id:13, area:'منطقة الاعلان رقم 013', schoolName:'اسم   الشركة   / المدرسة رقم 013', creationDate:'03/05/2023', isShown:false},
      {id:14, area:'منطقة الاعلان رقم 014', schoolName:'اسم   الشركة   / المدرسة رقم 014', creationDate:'07/05/2023', isShown:true},
      {id:15, area:'منطقة الاعلان رقم 015', schoolName:'اسم   الشركة   / المدرسة رقم 015', creationDate:'01/05/2023', isShown:false},
      {id:16, area:'منطقة الاعلان رقم 016', schoolName:'اسم   الشركة   / المدرسة رقم 016', creationDate:'09/05/2023', isShown:true},
      {id:17, area:'منطقة الاعلان رقم 017', schoolName:'اسم   الشركة   / المدرسة رقم 017', creationDate:'02/05/2023', isShown:false},
      {id:18, area:'منطقة الاعلان رقم 018', schoolName:'اسم   الشركة   / المدرسة رقم 018', creationDate:'06/05/2023', isShown:false},
      {id:19, area:'منطقة الاعلان رقم 019', schoolName:'اسم   الشركة   / المدرسة رقم 019', creationDate:'05/05/2023', isShown:true},
      {id:20, area:'منطقة الاعلان رقم 020', schoolName:'اسم   الشركة   / المدرسة رقم 020', creationDate:'01/05/2023', isShown:true},

      {id:21, area:'منطقة الاعلان رقم 021', schoolName:'اسم   الشركة   / المدرسة رقم 021', creationDate:'03/05/2023', isShown:true},
      {id:22, area:'منطقة الاعلان رقم 022', schoolName:'اسم   الشركة   / المدرسة رقم 022', creationDate:'05/05/2023', isShown:true},
      {id:23, area:'منطقة الاعلان رقم 023', schoolName:'اسم   الشركة   / المدرسة رقم 023', creationDate:'03/05/2023', isShown:false},
      {id:24, area:'منطقة الاعلان رقم 024', schoolName:'اسم   الشركة   / المدرسة رقم 024', creationDate:'07/05/2023', isShown:true},
      {id:25, area:'منطقة الاعلان رقم 025', schoolName:'اسم   الشركة   / المدرسة رقم 025', creationDate:'01/05/2023', isShown:false},
      {id:26, area:'منطقة الاعلان رقم 026', schoolName:'اسم   الشركة   / المدرسة رقم 026', creationDate:'09/05/2023', isShown:true},
      {id:27, area:'منطقة الاعلان رقم 027', schoolName:'اسم   الشركة   / المدرسة رقم 027', creationDate:'02/05/2023', isShown:false},
      {id:28, area:'منطقة الاعلان رقم 028', schoolName:'اسم   الشركة   / المدرسة رقم 028', creationDate:'06/05/2023', isShown:false},
      {id:29, area:'منطقة الاعلان رقم 029', schoolName:'اسم   الشركة   / المدرسة رقم 029', creationDate:'05/05/2023', isShown:true},
      {id:30, area:'منطقة الاعلان رقم 0030', schoolName:'اسم   الشركة   / المدرسة رقم 030', creationDate:'01/05/2023', isShown:true},
    ];
  }
  getAdminManagementProfile():adminManagementInformationModel{
    let model:adminManagementInformationModel = {
      image:'/assets/images/logo_busway.svg',
      email:'email account here ..',
      facebook:'facebook account here ..',
      googlePlay:'googlePlay account here ..',
      instagram:'instagram account here ..',
      itunesApple:'itunesApple account here ..',
      location:'location here ..',
      phone:'phone here ..',
      siteName:'siteName  here ..',
      SMTPHostorIP:'SMTPHostorIP here ..',
      SMTPPassword:'SMTPPassword here ..',
      SMTPPort:'SMTPPort here ..',
      SMTPUserName:'SMTPUserName here ..',
      snapChat:'snapChat account here ..',
      telegram:'telegram account here ..',
      twitter:'twitter account here ..',
      whatsApp:'whatsApp account here ..',
    }
    return model;
  }
}
export interface adminManagementListModel{
  id:any,
  area:any,
  schoolName:any,
  creationDate:any,
  isShown:any,
}
export interface adminManagementInformationModel{
  image:any,
  siteName:any,
  email:any,
  phone:any,
  facebook:any,
  twitter:any,
  whatsApp:any,
  telegram:any,
  instagram:any,
  snapChat:any,
  location:any,
  SMTPUserName:any,
  SMTPPassword:any,
  SMTPHostorIP:any,
  SMTPPort:any,
  googlePlay:any,
  itunesApple:any,
}