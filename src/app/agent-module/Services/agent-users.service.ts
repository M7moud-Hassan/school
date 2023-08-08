import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from 'src/app/schools-module/Core/Models/response-model';

@Injectable({
  providedIn: 'root'
})
export class AgentUsersService {

  constructor(private http:HttpClient) { }

  addNewUser(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getUsersList():userListModel[]{
    return [
     {id:1,name:'مستخدم رقم 1',phone:'+2 7656733',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:2,name:'مستخدم رقم 2',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-08-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:3,name:'مستخدم رقم 3',phone:'+2 8767367873',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:4,name:'مستخدم رقم 4',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-11',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:5,name:'مستخدم رقم 5',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:6,name:'مستخدم رقم 6',phone:'+2 87637368373',userNumber:'8763763786383',lastActiveDate:'2023-07-01',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:7,name:'مستخدم رقم 7',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:8,name:'مستخدم رقم 8',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-11',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:9,name:'مستخدم رقم 9',phone:'+2 3876373673873',userNumber:'8763763786383',lastActiveDate:'2023-07-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:10,name:'مستخدم رقم 10',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     
     {id:11,name:'1مستخدم رقم 1',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:12,name:'1مستخدم رقم 2',phone:'+2 387637863738',userNumber:'8763763786383',lastActiveDate:'2023-08-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:13,name:'1مستخدم رقم 3',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:14,name:'1مستخدم رقم 4',phone:'+2 37863763738',userNumber:'8763763786383',lastActiveDate:'2023-07-11',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:15,name:'1مستخدم رقم 5',phone:'+2 3323231321',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:16,name:'1مستخدم رقم 6',phone:'+2 24342343423',userNumber:'8763763786383',lastActiveDate:'2023-07-01',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:17,name:'1مستخدم رقم 7',phone:'+2 989829898298',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:18,name:'1مستخدم رقم 8',phone:'+2 56245242652',userNumber:'8763763786383',lastActiveDate:'2023-07-11',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:19,name:'1مستخدم رقم 9',phone:'+2 65225425262',userNumber:'8763763786383',lastActiveDate:'2023-07-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:20,name:'مستخدم رقم 20',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
     {id:21,name:'2مستخدم رقم 1',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:22,name:'2مستخدم رقم 2',phone:'+2 265245264262',userNumber:'8763763786383',lastActiveDate:'2023-08-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:23,name:'2مستخدم رقم 3',phone:'+2 672525267257',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:24,name:'2مستخدم رقم 4',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-11',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:25,name:'2مستخدم رقم 5',phone:'+2 4321321411',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:26,name:'2مستخدم رقم 6',phone:'+2 2522543452',userNumber:'8763763786383',lastActiveDate:'2023-07-01',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:27,name:'2مستخدم رقم 7',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:28,name:'2مستخدم رقم 8',phone:'+2 725625722762',userNumber:'8763763786383',lastActiveDate:'2023-07-11',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:29,name:'2مستخدم رقم 9',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:30,name:'مستخدم رقم 30',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
     {id:31,name:'3مستخدم رقم 1',phone:'+2 562456242422',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:32,name:'3مستخدم رقم 2',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-08-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:33,name:'3مستخدم رقم 3',phone:'+2 14321342143',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:34,name:'3مستخدم رقم 4',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-11',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:35,name:'3مستخدم رقم 5',phone:'+2 32133213213',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:36,name:'3مستخدم رقم 6',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-01',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:37,name:'3مستخدم رقم 7',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:38,name:'3مستخدم رقم 8',phone:'+2 876786837637',userNumber:'8763763786383',lastActiveDate:'2023-07-11',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:39,name:'3مستخدم رقم 9',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:40,name:'مستخدم رقم 40',phone:'+2 65456461541',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
     {id:41,name:'4مستخدم رقم 1',phone:'+2 43124312131',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:42,name:'4مستخدم رقم 2',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-08-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:43,name:'4مستخدم رقم 3',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:44,name:'4مستخدم رقم 4',phone:'+2 54342325322',userNumber:'8763763786383',lastActiveDate:'2023-07-11',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:45,name:'4مستخدم رقم 5',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:46,name:'4مستخدم رقم 6',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-01',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:47,name:'4مستخدم رقم 7',phone:'+2 452432452',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:48,name:'4مستخدم رقم 8',phone:'+2 12098398337',userNumber:'8763763786383',lastActiveDate:'2023-07-11',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:49,name:'4مستخدم رقم 9',phone:'+2 431243214312',userNumber:'8763763786383',lastActiveDate:'2023-07-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:50,name:'مستخدم رقم 50',phone:'+2 4312341211',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
   ];
   }
}
export interface userListModel{
  id:any,
  name:any,
  phone:any,
  userNumber:any,
  lastActiveDate:any,
  isSelected:any,
  isActive:any,
  image:any,
}