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
     {id:1,name:'مستخدم رقم 1',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:2,name:'مستخدم رقم 2',userNumber:'8763763786383',lastActiveDate:'14-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:3,name:'مستخدم رقم 3',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:4,name:'مستخدم رقم 4',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:5,name:'مستخدم رقم 5',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:6,name:'مستخدم رقم 6',userNumber:'8763763786383',lastActiveDate:'15-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:7,name:'مستخدم رقم 7',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:8,name:'مستخدم رقم 8',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:9,name:'مستخدم رقم 9',userNumber:'8763763786383',lastActiveDate:'10-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:10,name:'مستخدم رقم 10',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     
     {id:11,name:'1مستخدم رقم 1',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:12,name:'1مستخدم رقم 2',userNumber:'8763763786383',lastActiveDate:'14-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:13,name:'1مستخدم رقم 3',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:14,name:'1مستخدم رقم 4',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:15,name:'1مستخدم رقم 5',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:16,name:'1مستخدم رقم 6',userNumber:'8763763786383',lastActiveDate:'15-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:17,name:'1مستخدم رقم 7',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:18,name:'1مستخدم رقم 8',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:19,name:'1مستخدم رقم 9',userNumber:'8763763786383',lastActiveDate:'10-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:20,name:'مستخدم رقم 20',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
     {id:21,name:'2مستخدم رقم 1',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:22,name:'2مستخدم رقم 2',userNumber:'8763763786383',lastActiveDate:'14-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:23,name:'2مستخدم رقم 3',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:24,name:'2مستخدم رقم 4',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:25,name:'2مستخدم رقم 5',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:26,name:'2مستخدم رقم 6',userNumber:'8763763786383',lastActiveDate:'15-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:27,name:'2مستخدم رقم 7',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:28,name:'2مستخدم رقم 8',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:29,name:'2مستخدم رقم 9',userNumber:'8763763786383',lastActiveDate:'10-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:30,name:'مستخدم رقم 30',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
     {id:31,name:'3مستخدم رقم 1',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:32,name:'3مستخدم رقم 2',userNumber:'8763763786383',lastActiveDate:'14-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:33,name:'3مستخدم رقم 3',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:34,name:'3مستخدم رقم 4',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:35,name:'3مستخدم رقم 5',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:36,name:'3مستخدم رقم 6',userNumber:'8763763786383',lastActiveDate:'15-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:37,name:'3مستخدم رقم 7',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:38,name:'3مستخدم رقم 8',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:39,name:'3مستخدم رقم 9',userNumber:'8763763786383',lastActiveDate:'10-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:40,name:'مستخدم رقم 40',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
     {id:41,name:'4مستخدم رقم 1',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:42,name:'4مستخدم رقم 2',userNumber:'8763763786383',lastActiveDate:'14-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:43,name:'4مستخدم رقم 3',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:44,name:'4مستخدم رقم 4',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:45,name:'4مستخدم رقم 5',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:46,name:'4مستخدم رقم 6',userNumber:'8763763786383',lastActiveDate:'15-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:47,name:'4مستخدم رقم 7',userNumber:'8763763786383',lastActiveDate:'12-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:48,name:'4مستخدم رقم 8',userNumber:'8763763786383',lastActiveDate:'11-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:49,name:'4مستخدم رقم 9',userNumber:'8763763786383',lastActiveDate:'10-7-2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:50,name:'مستخدم رقم 50',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
   ];
   }
}
export interface userListModel{
  id:any,
  name:any,
  userNumber:any,
  lastActiveDate:any,
  isSelected:any,
  isActive:any,
  image:any,
}