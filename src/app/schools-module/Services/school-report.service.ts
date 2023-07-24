import { Injectable } from '@angular/core';
import { JourneyReportModel } from '../Core/Models/journey-report-model';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AbsenceReportModel } from '../Core/Models/absence-report-model';
import { SupervisorReportModel } from '../Core/Models/supervisor-report-model';

@Injectable({
  providedIn: 'root'
})
export class SchoolReportService {

  constructor(private http:HttpClient) { }

  getJourneyReport(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getAbsenceReport(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getSupervisorReport(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getAllCities():citiesModel[]{
    return [
      {id:1,name:'اهرامات الجيزة'},
      {id:2,name:'محمية وادى الريان'},
      {id:3,name:'وادى الملوك و الملكات'},
      {id:4,name:'الاسكندرية'},
      {id:5,name:'اسوان'},
      {id:6,name:'الاقصر'},
      {id:7,name:'قلعة صلاح الدين الايوبى'},
      {id:8,name:'قلعة محمد على'},
      {id:9,name:'قلعة قايتباى'},
      {id:10,name:'رأس سدر'},
      {id:11,name:'العين السخنة'},
      {id:12,name:'حديقة الحيوان'},
      {id:13,name:'حديقة النباتات'},
      {id:14,name:'معبد الكرنك'},
      {id:15,name:'معبد ابو سنبل'},
    ];
  }
}

export interface citiesModel{
  id:any,
  name:any
}
