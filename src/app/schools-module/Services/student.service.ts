import { Injectable } from '@angular/core';
import { NewStudentModel } from '../Core/Models/new-student-model';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ProfileModel } from '../Core/Models/profile-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  addNewStudent(model:NewStudentModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getStudentDetails():studentDetailsModel{
    let model:studentDetailsModel = {
      name:'حسن محمد حسن',
      nameEn:'Hassan Mohammed Hassan',
      address:'Egypt - Cairo',
      city:'Dar Elsalam',
      email:'hassan29827289@gmail.com',
      image:'/assets/images/user.png',
      phone:'+2092278627822',
      userNumber:'87526522',
      group:'Group Number #01'
    }; 
    return model;
  }
  getStudentDataForEdit():studentEditProfileModel{
    let model:studentEditProfileModel = {
      name:'محمد الشوالى',
      nameEn:'Mohammed Elshawally',
      email:'moh722652@gmail.co',
      address:'Cairo - Egypt',
      image:'/assets/images/user.png',
      city:'العاشر',
      userNumber:'432487622',
      phone:'+2033763783637',
     location:'Cairo , Egypt',
    }
   return model;
  }
  getStudents():studentSimpleModel[]{
    return [
      {id:1,name:'محمد حسن احمد'},
      {id:2,name:'خاد مصطفى عبدالجابر'},
      {id:3,name:'ابراهيم على قايد'},
      {id:4,name:'السيد احمد محمد'},
      {id:5,name:'مازن مصطفى على'},
      {id:6,name:'عبدالله احمد السيد'},
      {id:7,name:'مراد احمد السيد'},
      {id:8,name:'فراج على ناصف'},
      {id:10,name:'المنتصر بالله احمد'},
      {id:11,name:'رمضان احمد جاد الكريم'},
      {id:12,name:'محمد السيد على'},
      {id:13,name:'كمال على مصطفى'},
      {id:14,name:'المنذر على هاشم'},
      {id:15,name:'محمد مصطفى هاشم'},
      {id:16,name:'كمال السيد عباس'},
      {id:17,name:'حماده احمد حماده'},
      {id:18,name:'تيمور على البنا'},
      {id:19,name:'الماجد على اللبان'},
      {id:20,name:'احمد شريف السيد'},
    ];
  }

  getStudentList():studentModel[]{
   return [
    {id:1,name:'طالب رقم 1',groupName:'مجموعة رقم 1',userNumber:'8973987839',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:2,name:'طالب رقم 2',groupName:'مجموعة رقم 2',userNumber:'8763763786383',lastActiveDate:'2023-07-16',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:3,name:'طالب رقم 3',groupName:'مجموعة رقم 3',userNumber:'983787393',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:4,name:'طالب رقم 4',groupName:'مجموعة رقم 4',userNumber:'8763763786383',lastActiveDate:'2023-01-08',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:5,name:'طالب رقم 5',groupName:'مجموعة رقم 5',userNumber:'87817187',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:6,name:'طالب رقم 6',groupName:'مجموعة رقم 6',userNumber:'8763763786383',lastActiveDate:'2023-07-10',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:7,name:'طالب رقم 7',groupName:'مجموعة رقم 7',userNumber:'98272897',lastActiveDate:'2023-07-14',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:8,name:'طالب رقم 8',groupName:'مجموعة رقم 8',userNumber:'09389038',lastActiveDate:'2023-01-08',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:9,name:'طالب رقم 9',groupName:'مجموعة رقم 9',userNumber:'6265722',lastActiveDate:'2023-06-01',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:10,name:'طالب رقم 10',groupName:'مجموعة رقم 10',userNumber:'983787933',lastActiveDate:'2023-07-23',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
    {id:11,name:'1طالب رقم 1',groupName:'1مجموعة رقم 1',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:12,name:'1طالب رقم 2',groupName:'1مجموعة رقم 2',userNumber:'8763763786383',lastActiveDate:'2023-07-16',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:13,name:'1طالب رقم 3',groupName:'1مجموعة رقم 3',userNumber:'8637368376387',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:14,name:'1طالب رقم 4',groupName:'1مجموعة رقم 4',userNumber:'8763763786383',lastActiveDate:'2023-01-08',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:15,name:'1طالب رقم 5',groupName:'1مجموعة رقم 5',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:16,name:'1طالب رقم 6',groupName:'1مجموعة رقم 6',userNumber:'8736873637863',lastActiveDate:'2023-07-10',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:17,name:'1طالب رقم 7',groupName:'1مجموعة رقم 7',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:18,name:'1طالب رقم 8',groupName:'1مجموعة رقم 8',userNumber:'8763763786383',lastActiveDate:'2023-01-08',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:19,name:'1طالب رقم 9',groupName:'1مجموعة رقم 9',userNumber:'783637863833',lastActiveDate:'2023-06-01',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:20,name:'طالب رقم 20',groupName:'مجموعة رقم 20',userNumber:'8763763786383',lastActiveDate:'2023-07-23',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
    {id:21,name:'2طالب رقم 1',groupName:'2مجموعة رقم 1',userNumber:'876376378683683',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:22,name:'2طالب رقم 2',groupName:'2مجموعة رقم 2',userNumber:'8763763786383',lastActiveDate:'2023-07-16',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:23,name:'2طالب رقم 3',groupName:'2مجموعة رقم 3',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:24,name:'2طالب رقم 4',groupName:'2مجموعة رقم 4',userNumber:'8763763786383',lastActiveDate:'2023-01-08',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:25,name:'2طالب رقم 5',groupName:'2مجموعة رقم 5',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:26,name:'2طالب رقم 6',groupName:'2مجموعة رقم 6',userNumber:'8763763786383',lastActiveDate:'2023-07-10',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:27,name:'2طالب رقم 7',groupName:'2مجموعة رقم 7',userNumber:'837363763783',lastActiveDate:'2023-07-14',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:28,name:'2طالب رقم 8',groupName:'2مجموعة رقم 8',userNumber:'8763763786383',lastActiveDate:'2023-01-08',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:29,name:'2طالب رقم 9',groupName:'2مجموعة رقم 9',userNumber:'8763763786383',lastActiveDate:'2023-06-01',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:30,name:'طالب رقم 30',groupName:'مجموعة رقم 30',userNumber:'76565272572',lastActiveDate:'2023-07-23',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
    {id:31,name:'3طالب رقم 1',groupName:'3مجموعة رقم 1',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:32,name:'3طالب رقم 2',groupName:'3مجموعة رقم 2',userNumber:'4312312314',lastActiveDate:'2023-07-16',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:33,name:'3طالب رقم 3',groupName:'3مجموعة رقم 3',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:34,name:'3طالب رقم 4',groupName:'3مجموعة رقم 4',userNumber:'4212143108098',lastActiveDate:'2023-01-08',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:35,name:'3طالب رقم 5',groupName:'3مجموعة رقم 5',userNumber:'8726726282',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:36,name:'3طالب رقم 6',groupName:'3مجموعة رقم 6',userNumber:'8763763786383',lastActiveDate:'2023-07-10',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:37,name:'3طالب رقم 7',groupName:'3مجموعة رقم 7',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:38,name:'3طالب رقم 8',groupName:'3مجموعة رقم 8',userNumber:'8763763786383',lastActiveDate:'2023-01-08',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:39,name:'3طالب رقم 9',groupName:'3مجموعة رقم 9',userNumber:'8763763786383',lastActiveDate:'2023-06-01',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:40,name:'طالب رقم 40',groupName:'مجموعة رقم 40',userNumber:'8763763786383',lastActiveDate:'2023-07-23',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
    {id:41,name:'4طالب رقم 1',groupName:'4مجموعة رقم 1',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:42,name:'4طالب رقم 2',groupName:'4مجموعة رقم 2',userNumber:'8763763786383',lastActiveDate:'2023-07-16',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:43,name:'4طالب رقم 3',groupName:'4مجموعة رقم 3',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:44,name:'4طالب رقم 4',groupName:'4مجموعة رقم 4',userNumber:'8763763786383',lastActiveDate:'2023-01-08',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:45,name:'4طالب رقم 5',groupName:'4مجموعة رقم 5',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:46,name:'4طالب رقم 6',groupName:'4مجموعة رقم 6',userNumber:'8763763786383',lastActiveDate:'2023-07-10',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:47,name:'4طالب رقم 7',groupName:'4مجموعة رقم 7',userNumber:'8763763786383',lastActiveDate:'2023-07-14',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:48,name:'4طالب رقم 8',groupName:'4مجموعة رقم 8',userNumber:'8763763786383',lastActiveDate:'2023-01-08',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:49,name:'4طالب رقم 9',groupName:'4مجموعة رقم 9',userNumber:'8763763786383',lastActiveDate:'2023-06-01',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:50,name:'طالب رقم 50',groupName:'مجموعة رقم 50',userNumber:'8763763786383',lastActiveDate:'2023-07-23',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    
  ];
  }
  getStudentForSendNotification():student_SendNotification_Model[]{
    return [
      {
        name: "احمد محمد",
        type: "طالب",
        date: "2020-09-05"
      },
      {
        name: "احمد محمد",
        type: "طالب",
        date: "2020-09-05"
      },
      {
        name: "احمد محمد",
        type: "طالب",
        date: "2020-09-05"
      },
      {
        name: "احمد محمد",
        type: "طالب",
        date: "2020-09-05"
      },
      {
        name: "احمد محمد",
        type: "طالب",
        date: "2020-09-05"
      }
      , {
        name: "احمد محمد",
        type: "طالب",
        date: "2020-09-05"
      },
      {
        name: "احمد محمد",
        type: "طالب",
        date: "2020-09-05"
      },
      {
        name: "احمد محمد",
        type: "طالب",
        date: "2020-09-05"
      }
    ]
  }
  getStudentNames():string[]{
    return [
      'محمد حسن احمد',
      'خاد مصطفى عبدالجابر',
      'ابراهيم على قايد',
      'السيد احمد محمد',
      'مازن مصطفى على',
      'عبدالله احمد السيد',
      'مراد احمد السيد',
      'فراج على ناصف',
      'المنتصر بالله احمد',
      'رمضان احمد جاد الكريم',
      'محمد السيد على',
      'كمال على مصطفى',
      'المنذر على هاشم',
      'محمد مصطفى هاشم',
      'كمال السيد عباس',
      'حماده احمد حماده',
      'تيمور على البنا',
      'الماجد على اللبان',
      'احمد شريف السيد',
    ];
  }
}
export interface studentSimpleModel{
  id:any,
  name:any
}
export interface studentModel{
  id:any,
  name:any,
  groupName:any,
  userNumber:any,
  lastActiveDate:any,
  isSelected:any,
  isActive:any,
  image:any,
}

export interface studentEditProfileModel{
  name:any,
  nameEn:any,
  userNumber:any,
  email:any,
  phone:any,
  address:any,
  city:any,
  location:any,
  image:any
}
export interface studentDetailsModel{
  name:any,
  nameEn:any,
  userNumber:any,
  email:any,
  phone:any,
  address:any,
  city:any,
  group:any,
  image:any,
}
export interface student_SendNotification_Model{
    name:any,
    type: any,
    date: any
}