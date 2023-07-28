import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/app/schools-module/Core/Models/profile-model';
import { ResponseModel } from 'src/app/schools-module/Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AgentAuthService {

  constructor(private http:HttpClient) { }

  changePassword(model:any):Observable<ResponseModel>{
    alert(',,,,,,,,,,,,,,,,,the Form is Valid,,,,,,,,,,,,,,');
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  Editprofile(model:any):Observable<ResponseModel>{
    alert(',,,,,,,,,,,,,,,,,the Form is Valid,,,,,,,,,,,,,,');
    return this.http.post<any>(`${environment.baseApiUrl}/`,model);
  }
  getSchoolProfile():agentProfileModel{
    let model:agentProfileModel = {
      name : 'محمد العميرى',
      nameEn : 'Mohamed Elomary',
      userNumber:8726276,
      address : 'مصر -  القاهرة',
      email:'mohamed123@gmail.com',
      location : '1.2222',
      phone : '+20112892233',
      image:'assets/images/userAccount.jpg',
    }
    return model;
  }
  
}

export interface agentProfileModel {
  name:any,
  nameEn:any,
  userNumber:any,
  phone:any,
  address:any,
  email:any,
  location:any,
  image:any
}