import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http:HttpClient) { }
  
  addNewAd(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getDetailsAd():adsEditModel{
    let model:adsEditModel = {
      details:'<p>this is details for the Ads</p>',
      image:'/assets/images/user.png',
      title:'this is simple title for the Ads'
    }
    return model
  }

  getAllAds():adsModel[]{
   return [
    {image:'/assets/images/user.png',isSelected:false,isShown:true,creationDate:'12/7/2023',title:'يوم التأسيس رقم 01'},
    {image:'/assets/images/user.png',isSelected:false,isShown:false,creationDate:'12/7/2023',title:'يوم التأسيس رقم 02'},
    {image:'/assets/images/user.png',isSelected:false,isShown:false,creationDate:'12/7/2023',title:'يوم التأسيس رقم 03'},
    {image:'/assets/images/user.png',isSelected:false,isShown:false,creationDate:'12/7/2023',title:'يوم التأسيس رقم 04'},
    {image:'/assets/images/user.png',isSelected:false,isShown:true,creationDate:'12/7/2023',title:'يوم التأسيس رقم 05'},
    {image:'/assets/images/user.png',isSelected:false,isShown:false,creationDate:'12/7/2023',title:'يوم التأسيس رقم 07'},
    {image:'/assets/images/user.png',isSelected:false,isShown:true,creationDate:'12/7/2023',title:'يوم التأسيس رقم 08'},
    {image:'/assets/images/user.png',isSelected:false,isShown:true,creationDate:'12/7/2023',title:'يوم التأسيس رقم 09'},
    {image:'/assets/images/user.png',isSelected:false,isShown:true,creationDate:'12/7/2023',title:'يوم التأسيس رقم 011'},
    {image:'/assets/images/user.png',isSelected:false,isShown:false,creationDate:'12/7/2023',title:'يوم التأسيس رقم 012'},
    {image:'/assets/images/user.png',isSelected:false,isShown:false,creationDate:'12/7/2023',title:'يوم التأسيس رقم 013'},
    {image:'/assets/images/user.png',isSelected:false,isShown:true,creationDate:'12/7/2023',title:'يوم التأسيس رقم 014'},
    {image:'/assets/images/user.png',isSelected:false,isShown:true,creationDate:'12/7/2023',title:'يوم التأسيس رقم 015'},
    {image:'/assets/images/user.png',isSelected:false,isShown:false,creationDate:'12/7/2023',title:'يوم التأسيس رقم 016'},
    {image:'/assets/images/user.png',isSelected:false,isShown:false,creationDate:'12/7/2023',title:'يوم التأسيس رقم 017'},
    {image:'/assets/images/user.png',isSelected:false,isShown:false,creationDate:'12/7/2023',title:'يوم التأسيس رقم 018'},
   ];
  }
}
export interface adsModel{
  image:any,
  title:any,
  isShown:any,
  isSelected:any,
  creationDate:any,
}
export interface adsEditModel{
  image:any,
  title:any,
  details:any,
}
