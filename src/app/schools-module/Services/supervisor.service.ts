import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditSupervisorModel, NewSupervisorModel } from '../Core/Models/new-supervisor-model';
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
  editBus(model:NewSupervisorModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  editSupervisor(model:EditSupervisorModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getSupervisors():supervisorSimpleModel[]{
    return [
      {id:30,name:'المنتصر بالله احمد'},
      {id:37,name:'حماده احمد حماده'},
      {id:27,name:'مراد احمد السيد'},
      {id:40,name:'احمد شريف السيد'},
      {id:32,name:'محمد السيد على'},
      {id:21,name:'محمد حسن احمد'},
      {id:33,name:'كمال على مصطفى'},
      {id:28,name:'فراج على ناصف'},
      {id:36,name:'كمال السيد عباس'},
      {id:22,name:'خاد مصطفى عبدالجابر'},
      {id:26,name:'عبدالله احمد السيد'},
      {id:25,name:'مازن مصطفى على'},
      {id:24,name:'السيد احمد محمد'},
      {id:33,name:'رمضان احمد جاد الكريم'},
      {id:38,name:'تيمور على البنا'},
      {id:34,name:'المنذر على هاشم'},
      {id:35,name:'محمد مصطفى هاشم'},
      {id:23,name:'ابراهيم على قايد'},
      {id:39,name:'الماجد على اللبان'},
    ];
  }
  getAll():supervisorModel[]{
    return [
      {id:1,name:'مشرف رقم 1',phoneNumber:'01987373873731',groupName:'المجموعة رقم 1',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:2,name:'مشرف رقم 2',phoneNumber:'01987373873831',groupName:'المجموعة رقم 2',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:3,name:'مشرف رقم 3',phoneNumber:'01987373873791',groupName:'المجموعة رقم 3',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:4,name:'مشرف رقم 4',phoneNumber:'01987373873721',groupName:'المجموعة رقم 4',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:5,name:'مشرف رقم 5',phoneNumber:'01987373873231',groupName:'المجموعة رقم 5',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:6,name:'مشرف رقم 6',phoneNumber:'01987373873431',groupName:'المجموعة رقم 6',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:7,name:'مشرف رقم 7',phoneNumber:'01987373873901',groupName:'المجموعة رقم 7',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:8,name:'مشرف رقم 8',phoneNumber:'01987373873101',groupName:'المجموعة رقم 8',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:9,name:'مشرف رقم 9',phoneNumber:'01987373873873',groupName:'المجموعة رقم 9',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:10,name:'مشرف رقم 10',phoneNumber:'01987373873878',groupName:'المجموعة رقم 10',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      
      {id:11,name:'1مشرف رقم 1',phoneNumber:'01987373873731',groupName:'المجموعة رقم 11',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:12,name:'1مشرف رقم 2',phoneNumber:'01987373873831',groupName:'المجموعة رقم 12',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:13,name:'1مشرف رقم 3',phoneNumber:'01987373873791',groupName:'المجموعة رقم 13',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:14,name:'1مشرف رقم 4',phoneNumber:'01987373873721',groupName:'المجموعة رقم 14',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:15,name:'1مشرف رقم 5',phoneNumber:'01987373873231',groupName:'المجموعة رقم 15',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:16,name:'1مشرف رقم 6',phoneNumber:'01987373873431',groupName:'المجموعة رقم 16',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:17,name:'1مشرف رقم 7',phoneNumber:'01987373873901',groupName:'المجموعة رقم 17',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:18,name:'1مشرف رقم 8',phoneNumber:'019873738731031',groupName:'المجموعة رقم 18',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:19,name:'1مشرف رقم 9',phoneNumber:'01987373873873',groupName:'المجموعة رقم 19',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:20,name:'مشرف رقم 20',phoneNumber:'01987373873878',groupName:'المجموعة رقم 20',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
  
      {id:21,name:'2مشرف رقم 1',phoneNumber:'01987373873731',groupName:'المجموعة رقم 21',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:22,name:'2مشرف رقم 2',phoneNumber:'01987373873831',groupName:'المجموعة رقم 22',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:23,name:'2مشرف رقم 3',phoneNumber:'01987373873791',groupName:'المجموعة رقم 23',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:24,name:'2مشرف رقم 4',phoneNumber:'01987373873721',groupName:'المجموعة رقم 24',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:25,name:'2مشرف رقم 5',phoneNumber:'01987373873231',groupName:'المجموعة رقم 25',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:26,name:'2مشرف رقم 6',phoneNumber:'01987373873431',groupName:'المجموعة رقم 26',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:27,name:'2مشرف رقم 7',phoneNumber:'01987373873901',groupName:'المجموعة رقم 27',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:28,name:'2مشرف رقم 8',phoneNumber:'01987373873103',groupName:'المجموعة رقم 81',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:29,name:'2مشرف رقم 9',phoneNumber:'01987373873873',groupName:'المجموعة رقم 28',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:20,name:'مشرف رقم 20',phoneNumber:'01987373873878',groupName:'المجموعة رقم 29',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    ];
  }
  getAllCompanies():companiesModel[]{
    return [
      {id:1,name:'الشركة رقم 1'},
      {id:2,name:'الشركة رقم 2'},
      {id:3,name:'الشركة رقم 3'},
      {id:4,name:'الشركة رقم 4'},
      {id:5,name:'الشركة رقم 5'},
      {id:6,name:'الشركة رقم 6'},
      {id:7,name:'الشركة رقم 7'},
      {id:8,name:'الشركة رقم 8'},
      {id:9,name:'الشركة رقم 9'},
      {id:10,name:'الشركة رقم 10'},
      {id:11,name:'الشركة رقم 11'},
      {id:12,name:'الشركة رقم 12'},
      {id:13,name:'الشركة رقم 13'},
      {id:14,name:'الشركة رقم 14'},
      {id:15,name:'الشركة رقم 15'},
      {id:16,name:'الشركة رقم 16'}
    ];  
  }
  getBusList():busListModel[]{
    return [
      {id:1,name:'مشرف رقم 1',busNumber:'731',manufacturingCompany:'الشركة المنتجة رقم 1',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:2,name:'مشرف رقم 2',busNumber:'831',manufacturingCompany:'الشركة المنتجة رقم 2',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:3,name:'مشرف رقم 3',busNumber:'791',manufacturingCompany:'الشركة المنتجة رقم 3',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:4,name:'مشرف رقم 4',busNumber:'721',manufacturingCompany:'الشركة المنتجة رقم 4',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:5,name:'مشرف رقم 5',busNumber:'231',manufacturingCompany:'الشركة المنتجة رقم 5',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:6,name:'مشرف رقم 6',busNumber:'431',manufacturingCompany:'الشركة المنتجة رقم 6',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:7,name:'مشرف رقم 7',busNumber:'901',manufacturingCompany:'الشركة المنتجة رقم 7',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:8,name:'مشرف رقم 8',busNumber:'1031',manufacturingCompany:'الشركة المنتجة رقم 8',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:9,name:'مشرف رقم 9',busNumber:'873',manufacturingCompany:'الشركة المنتجة رقم 9',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:10,name:'مشرف رقم 10',busNumber:'878',manufacturingCompany:'الشركة المنتجة رقم 10',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      
      {id:11,name:'1مشرف رقم 1',busNumber:'731',manufacturingCompany:'الشركة المنتجة رقم 11',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:12,name:'1مشرف رقم 2',busNumber:'831',manufacturingCompany:'الشركة المنتجة رقم 12',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:13,name:'1مشرف رقم 3',busNumber:'791',manufacturingCompany:'الشركة المنتجة رقم 13',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:14,name:'1مشرف رقم 4',busNumber:'721',manufacturingCompany:'الشركة المنتجة رقم 14',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:15,name:'1مشرف رقم 5',busNumber:'231',manufacturingCompany:'الشركة المنتجة رقم 15',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:16,name:'1مشرف رقم 6',busNumber:'431',manufacturingCompany:'الشركة المنتجة رقم 16',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:17,name:'1مشرف رقم 7',busNumber:'901',manufacturingCompany:'الشركة المنتجة رقم 17',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:18,name:'1مشرف رقم 8',busNumber:'1031',manufacturingCompany:'الشركة المنتجة رقم 18',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:19,name:'1مشرف رقم 9',busNumber:'873',manufacturingCompany:'الشركة المنتجة رقم 19',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:20,name:'مشرف رقم 20',busNumber:'878',manufacturingCompany:'الشركة المنتجة رقم 20',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
  
      {id:21,name:'2مشرف رقم 1',busNumber:'731',manufacturingCompany:'الشركة المنتجة رقم 21',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:22,name:'2مشرف رقم 2',busNumber:'831',manufacturingCompany:'الشركة المنتجة رقم 22',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:23,name:'2مشرف رقم 3',busNumber:'791',manufacturingCompany:'الشركة المنتجة رقم 23',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:24,name:'2مشرف رقم 4',busNumber:'721',manufacturingCompany:'الشركة المنتجة رقم 24',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:25,name:'2مشرف رقم 5',busNumber:'231',manufacturingCompany:'الشركة المنتجة رقم 25',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:26,name:'2مشرف رقم 6',busNumber:'431',manufacturingCompany:'الشركة المنتجة رقم 26',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
      {id:27,name:'2مشرف رقم 7',busNumber:'901',manufacturingCompany:'الشركة المنتجة رقم 27',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:28,name:'2مشرف رقم 8',busNumber:'1031',manufacturingCompany:'الشركة المنتجة رقم 81',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:29,name:'2مشرف رقم 9',busNumber:'873',manufacturingCompany:'الشركة المنتجة رقم 28',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
      {id:20,name:'مشرف رقم 20',busNumber:'878',manufacturingCompany:'الشركة المنتجة رقم 29',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    ];
  }
  getSupervisorData():NewSupervisorModel{
    let model:NewSupervisorModel = {
      name:'محمد الشوالى',
      nameEn:'Mohammed Elshawally',
      email:'moh722652@gmail.co',
      busColor:'grey',
      busNumber:'777',
      address:'Cairo - Egypt',
      image:'/assets/images/user.png',
      group:'المجموعه العاشرة',
      manufacturingCompany:'شركه العاشر',
      password:'4324@@*@*#',
      phone:'+2033763783637',
      userNumber:'387638763738'
    }
   return model;
  }
  getSupervisorDataForEdit():EditSupervisorModel{
    let model:EditSupervisorModel = {
      name:'محمد الشوالى',
      nameEn:'Mohammed Elshawally',
      email:'moh722652@gmail.co',
      busColor:'grey',
      busNumber:'777',
      address:'Cairo - Egypt',
      image:'/assets/images/user.png',
      group:'المجموعه العاشرة',
      city:'العاشر',
      userNumber:'432487622',
      busType:'ألمانى النوع',
      phone:'+2033763783637',
     location:'Cairo , Egypt',
    }
   return model;
  }
}

export interface supervisorModel{
  id:any,
  name:any,
  phoneNumber:any,
  groupName:any,
  lastActiveDate:any,
  isSelected:any,
  isActive:any,
  image:any
}

export interface supervisorSimpleModel{
  id:any,
  name:any
}
export interface companiesModel{
  id:any,
  name:any
}
export interface busListModel{
  id:any,
  name:any,
  busNumber:any,
  manufacturingCompany:any,
  lastActiveDate:any,
  isSelected:any,
  isActive:any,
  image:any
}
