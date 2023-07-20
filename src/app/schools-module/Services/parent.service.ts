import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewParentsModel } from '../Core/Models/new-parents-model';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  
  constructor(private http:HttpClient) { }

  addNewParent(model:NewParentsModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }

}
