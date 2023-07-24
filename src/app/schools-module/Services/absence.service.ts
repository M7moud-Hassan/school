import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../Core/Models/response-model';
import { AbsenceOrderModel } from '../Core/Models/absence-order-model';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  
  constructor(private http:HttpClient) { }

  addNewAbsence(model:AbsenceOrderModel):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getAbsenceList():absenceListModel[]{
   return [
    {id:1,studentName:'طالب رقم 01',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 1',isSelected:false,by:'بواسطة 01',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:2,studentName:'طالب رقم 02',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 2',isSelected:false,by:'بواسطة 02',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:3,studentName:'طالب رقم 03',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 3',isSelected:false,by:'بواسطة 03',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:4,studentName:'طالب رقم 04',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 4',isSelected:false,by:'بواسطة 04',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:5,studentName:'طالب رقم 05',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 5',isSelected:false,by:'بواسطة 05',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:6,studentName:'طالب رقم 06',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 6',isSelected:false,by:'بواسطة 06',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:7,studentName:'طالب رقم 07',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 7',isSelected:false,by:'بواسطة 07',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:8,studentName:'طالب رقم 08',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 8',isSelected:false,by:'بواسطة 08',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:9,studentName:'طالب رقم 09',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 9',isSelected:false,by:'بواسطة 09',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:10,studentName:'طالب رقم 10',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 10',isSelected:false,by:'بواسطة 10',createdAt:'10/6/2023',image:'assets/images/user.png'},
    
    {id:11,studentName:'طالب رقم 011',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 11',isSelected:false,by:'بواسطة 011',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:12,studentName:'طالب رقم 012',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 12',isSelected:false,by:'بواسطة 012',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:13,studentName:'طالب رقم 013',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 13',isSelected:false,by:'بواسطة 013',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:14,studentName:'طالب رقم 014',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 14',isSelected:false,by:'بواسطة 014',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:15,studentName:'طالب رقم 015',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 15',isSelected:false,by:'بواسطة 015',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:16,studentName:'طالب رقم 016',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 16',isSelected:false,by:'بواسطة 016',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:17,studentName:'طالب رقم 017',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 17',isSelected:false,by:'بواسطة 017',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:18,studentName:'طالب رقم 018',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 18',isSelected:false,by:'بواسطة 018',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:19,studentName:'طالب رقم 019',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 19',isSelected:false,by:'بواسطة 019',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:20,studentName:'طالب رقم 20',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 20',isSelected:false,by:'بواسطة 20',createdAt:'10/6/2023',image:'assets/images/user.png'},
    
    {id:21,studentName:'طالب رقم 021',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 21',isSelected:false,by:'بواسطة 021',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:22,studentName:'طالب رقم 022',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 22',isSelected:false,by:'بواسطة 022',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:23,studentName:'طالب رقم 023',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 23',isSelected:false,by:'بواسطة 023',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:24,studentName:'طالب رقم 024',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 24',isSelected:false,by:'بواسطة 024',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:25,studentName:'طالب رقم 025',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 25',isSelected:false,by:'بواسطة 025',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:26,studentName:'طالب رقم 026',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 26',isSelected:false,by:'بواسطة 026',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:27,studentName:'طالب رقم 027',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 27',isSelected:false,by:'بواسطة 027',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:28,studentName:'طالب رقم 028',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 28',isSelected:false,by:'بواسطة 028',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:29,studentName:'طالب رقم 029',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 29',isSelected:false,by:'بواسطة 029',createdAt:'10/6/2023',image:'assets/images/user.png'},
    {id:30,studentName:'طالب رقم 30',from:'15/6/2023',to:'20/6/2023',reason:'سبب غياب الطالب رقم 30',isSelected:false,by:'بواسطة 30',createdAt:'10/6/2023',image:'assets/images/user.png'},
    
  ];
;
  }
}
export interface absenceListModel{
  id:any,
  studentName:any,
  from:any,
  to:any,
  reason:any,
  isSelected:any,
  by:any,
  createdAt:any,
  image:any
}
