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

  getJourneyReport(model:JourneyReportModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getAbsenceReport(model:AbsenceReportModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getSupervisorReport(model:SupervisorReportModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
}
