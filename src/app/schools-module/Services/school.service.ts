import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';
import { SchoolAccountDetailsModel } from '../Core/Models/school-account-details-model';
import { ProfileModel } from '../Core/Models/profile-model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http:HttpClient) { }
  
  updateSchoolAccount(model:SchoolAccountDetailsModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  Editprofile(model:any):Observable<ResponseModel>{
    alert(',,,,,,,,,,,,,,,,,the Form is Valid,,,,,,,,,,,,,,');
    return this.http.post<any>(`${environment.baseApiUrl}/`,model);
  }
  getSchoolProfile():ProfileModel{
    let model:ProfileModel = {
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
