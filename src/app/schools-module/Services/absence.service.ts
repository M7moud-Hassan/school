import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../Core/Models/response-model';
import { AbsenceOrderModel } from '../Core/Models/absence-order-model';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  
  constructor(private http:HttpClient) { }

  addNewAbsence(model:AbsenceOrderModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
}
