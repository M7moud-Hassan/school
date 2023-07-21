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

  searchTripReport(model:JourneyReportModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  addNewTripGroup(model:NewTripGroupModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
}
