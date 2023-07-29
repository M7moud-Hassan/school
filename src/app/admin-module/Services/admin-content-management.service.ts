import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/schools-module/Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminContentManagementService {

  constructor(private http:HttpClient) { }
  
  addContact(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getConentData(){
    return {
      title:'<p>this is the title</p>',
      content:'<p><b>this is the content</b></p>'
    };
  }
}
