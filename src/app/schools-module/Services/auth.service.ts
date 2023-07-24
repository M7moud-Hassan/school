import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';
import { LoginModel } from '../Core/Models/login-model';
import { RegisterModel } from '../Core/Models/register-model';
import { ResetPasswordModel } from '../Core/Models/reset-password-model';
import { ProfileModel } from '../Core/Models/profile-model';
import { NewStudentModel } from '../Core/Models/new-student-model';
import { ChangePasswordModel } from '../Core/Models/change-password-model';
import { SocilaMediaLinksModel } from '../Core/Models/socila-media-links-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) { }
  
  login(model:any):Observable<ResponseModel>{
    alert(',,,,,,,,,,,,,,,,,the Form is Valid,,,,,,,,,,,,,,');
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }

  register(model:any):Observable<ResponseModel>{
    alert(',,,,,,,,,,,,,,,,,the Form is Valid,,,,,,,,,,,,,,');
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  resetPassword(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }

  changePassword(model:any):Observable<ResponseModel>{
    alert(',,,,,,,,,,,,,,,,,the Form is Valid,,,,,,,,,,,,,,');
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  saveSocialMediaLinks(model:any):Observable<ResponseModel>{
    alert(',,,,,,,,,,,,,,,,,the Form is Valid,,,,,,,,,,,,,,');
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  
}
