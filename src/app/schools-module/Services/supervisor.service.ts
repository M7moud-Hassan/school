import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewSupervisorModel } from '../Core/Models/new-supervisor-model';
import { ResponseModel } from '../Core/Models/response-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
  constructor(private http:HttpClient) { }

  addNewSupervisor(model:NewSupervisorModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
}
