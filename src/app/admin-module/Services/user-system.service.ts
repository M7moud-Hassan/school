import { Injectable } from '@angular/core';
import { studentModel } from 'src/app/schools-module/Services/student.service';

@Injectable({
  providedIn: 'root'
})
export class UserSystemService {

  constructor() { }

  getUsers():studentModel[]{
    return [
     {id:1,name:'شركة شروق نجد',groupName:'مجموعة  1',userNumber:'1111111111123',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:2,name:'شركة شروق نجد',groupName:'مجموعة  2',userNumber:'43423442342',lastActiveDate:'2023-08-02',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:3,name:'شركة شروق نجد',groupName:'مجموعة  3',userNumber:'2786276276282',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:4,name:'شركة شروق نجد',groupName:'مجموعة  4',userNumber:'8763763786383',lastActiveDate:'2023-06-7',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:5,name:'شركة شروق نجد',groupName:'مجموعة  5',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:6,name:'شركة شروق نجد',groupName:'مجموعة  6',userNumber:'8763763786383',lastActiveDate:'2023-08-01',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:7,name:'شركة شروق نجد',groupName:'مجموعة  7',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:8,name:'شركة شروق نجد',groupName:'مجموعة  8',userNumber:'378376373',lastActiveDate:'2023-06-7',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:9,name:'شركة شروق نجد',groupName:'مجموعة  9',userNumber:'8763763786383',lastActiveDate:'2023-06-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:10,name:'شركة شروق نجد',groupName:'مجموعة  10',userNumber:'7822767262782',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     
     {id:11,name:'شركة شروق نجد',groupName:'1مجموعة  1',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:12,name:'شركة شروق نجد',groupName:'1مجموعة  2',userNumber:'8763763786383',lastActiveDate:'2023-08-02',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:13,name:'شركة شروق نجد',groupName:'1مجموعة  3',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:14,name:'شركة شروق نجد',groupName:'1مجموعة  4',userNumber:'98278728279228',lastActiveDate:'2023-06-7',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:15,name:'شركة شروق نجد',groupName:'1مجموعة  5',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:16,name:'شركة شروق نجد',groupName:'1مجموعة  6',userNumber:'8763763786383',lastActiveDate:'2023-08-01',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:17,name:'شركة شروق نجد',groupName:'1مجموعة  7',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:18,name:'شركة شروق نجد',groupName:'1مجموعة  8',userNumber:'8763763786383',lastActiveDate:'2023-06-7',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:19,name:'شركة شروق نجد',groupName:'1مجموعة  9',userNumber:'8763763786383',lastActiveDate:'2023-06-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:20,name:'شركة شروق نجد',groupName:'مجموعة  20',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     
     {id:21,name:'شركة شروق نجد',groupName:'2مجموعة  1',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:22,name:'شركة شروق نجد',groupName:'2مجموعة  2',userNumber:'8763763786383',lastActiveDate:'2023-08-02',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:23,name:'شركة شروق نجد',groupName:'2مجموعة  3',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:24,name:'شركة شروق نجد',groupName:'2مجموعة  4',userNumber:'8763763786383',lastActiveDate:'2023-06-7',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:25,name:'شركة شروق نجد',groupName:'2مجموعة  5',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:26,name:'شركة شروق نجد',groupName:'2مجموعة  6',userNumber:'8763763786383',lastActiveDate:'2023-08-01',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:27,name:'شركة شروق نجد',groupName:'2مجموعة  7',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:28,name:'شركة شروق نجد',groupName:'2مجموعة  8',userNumber:'8763763786383',lastActiveDate:'2023-06-7',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:29,name:'شركة شروق نجد',groupName:'2مجموعة  9',userNumber:'8763763786383',lastActiveDate:'2023-06-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:30,name:'شركة شروق نجد',groupName:'مجموعة  30',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     
     {id:31,name:'3  1',groupName:'3مجموعة  1',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:32,name:'3  2',groupName:'3مجموعة  2',userNumber:'8763763786383',lastActiveDate:'2023-08-02',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:33,name:'3  3',groupName:'3مجموعة  3',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:34,name:'3  4',groupName:'3مجموعة  4',userNumber:'8763763786383',lastActiveDate:'2023-06-7',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:35,name:'3  5',groupName:'3مجموعة  5',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:36,name:'3  6',groupName:'3مجموعة  6',userNumber:'8763763786383',lastActiveDate:'2023-08-01',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:37,name:'3  7',groupName:'3مجموعة  7',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:38,name:'3  8',groupName:'3مجموعة  8',userNumber:'8763763786383',lastActiveDate:'2023-06-7',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:39,name:'3  9',groupName:'3مجموعة  9',userNumber:'8763763786383',lastActiveDate:'2023-06-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:40,name:'  40',groupName:'مجموعة  40',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     
     {id:41,name:'4  1',groupName:'4مجموعة  1',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:42,name:'4  2',groupName:'4مجموعة  2',userNumber:'8763763786383',lastActiveDate:'2023-08-02',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:43,name:'4  3',groupName:'4مجموعة  3',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:44,name:'4  4',groupName:'4مجموعة  4',userNumber:'8763763786383',lastActiveDate:'2023-06-7',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:45,name:'4  5',groupName:'4مجموعة  5',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:46,name:'4  6',groupName:'4مجموعة  6',userNumber:'8763763786383',lastActiveDate:'2023-08-01',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:47,name:'4  7',groupName:'4مجموعة  7',userNumber:'8763763786383',lastActiveDate:'2023-07-15',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:48,name:'4  8',groupName:'4مجموعة  8',userNumber:'8763763786383',lastActiveDate:'2023-06-7',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     {id:49,name:'4  9',groupName:'4مجموعة  9',userNumber:'8763763786383',lastActiveDate:'2023-06-10',isSelected:false,isActive:false,image:'/assets/images/user.png'},
     {id:50,name:'  50',groupName:'مجموعة  50',userNumber:'8763763786383',lastActiveDate:'22-7-2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
     
   ];
   }
}
