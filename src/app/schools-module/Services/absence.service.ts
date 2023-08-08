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
    {id:1,studentName:'طالب رقم 01',from:'2023-07-15',to:'2023-06-15',reason:'سبب غياب الطالب رقم 1',isSelected:false,by:'بواسطة 01',createdAt:'2023-08-05',image:'assets/images/user.png'},
    {id:2,studentName:'طالب رقم 02',from:'2023-07-16',to:'2023-06-16',reason:'سبب غياب الطالب رقم 2',isSelected:false,by:'بواسطة 02',createdAt:'2023-08-06',image:'assets/images/user.png'},
    {id:3,studentName:'طالب رقم 03',from:'2023-07-17',to:'2023-06-17',reason:'سبب غياب الطالب رقم 3',isSelected:false,by:'بواسطة 03',createdAt:'2023-08-07',image:'assets/images/user.png'},
    {id:4,studentName:'طالب رقم 04',from:'2023-07-18',to:'2023-06-18',reason:'سبب غياب الطالب رقم 4',isSelected:false,by:'بواسطة 04',createdAt:'2023-08-08',image:'assets/images/user.png'},
    {id:5,studentName:'طالب رقم 05',from:'2023-07-19',to:'2023-06-19',reason:'سبب غياب الطالب رقم 5',isSelected:false,by:'بواسطة 05',createdAt:'2023-08-09',image:'assets/images/user.png'},
    {id:6,studentName:'طالب رقم 06',from:'2023-07-20',to:'2023-06-20',reason:'سبب غياب الطالب رقم 6',isSelected:false,by:'بواسطة 06',createdAt:'2023-08-09',image:'assets/images/user.png'},
    {id:7,studentName:'طالب رقم 07',from:'2023-07-15',to:'2023-06-15',reason:'سبب غياب الطالب رقم 7',isSelected:false,by:'بواسطة 07',createdAt:'2023-08-01',image:'assets/images/user.png'},
    {id:8,studentName:'طالب رقم 08',from:'2023-07-15',to:'2023-06-15',reason:'سبب غياب الطالب رقم 8',isSelected:false,by:'بواسطة 08',createdAt:'2023-08-02',image:'assets/images/user.png'},
    {id:9,studentName:'طالب رقم 09',from:'2023-07-15',to:'2023-06-15',reason:'سبب غياب الطالب رقم 9',isSelected:false,by:'بواسطة 09',createdAt:'2023-08-03',image:'assets/images/user.png'},
    {id:10,studentName:'طالب رقم 10',from:'2023-07-15',to:'2023-06-15',reason:'سبب غياب الطالب رقم 10',isSelected:false,by:'بواسطة 10',createdAt:'2023-08-04',image:'assets/images/user.png'},
    
    {id:11,studentName:'طالب رقم 011',from:'2023-07-16',to:'2023-06-16',reason:'سبب غياب الطالب رقم 11',isSelected:false,by:'بواسطة 011',createdAt:'2023-08-05',image:'assets/images/user.png'},
    {id:12,studentName:'طالب رقم 012',from:'2023-07-17',to:'2023-06-17',reason:'سبب غياب الطالب رقم 12',isSelected:false,by:'بواسطة 012',createdAt:'2023-08-06',image:'assets/images/user.png'},
    {id:13,studentName:'طالب رقم 013',from:'2023-07-18',to:'2023-06-18',reason:'سبب غياب الطالب رقم 13',isSelected:false,by:'بواسطة 013',createdAt:'2023-08-07',image:'assets/images/user.png'},
    {id:14,studentName:'طالب رقم 014',from:'2023-07-19',to:'2023-06-19',reason:'سبب غياب الطالب رقم 14',isSelected:false,by:'بواسطة 014',createdAt:'2023-08-08',image:'assets/images/user.png'},
    {id:15,studentName:'طالب رقم 015',from:'2023-07-11',to:'2023-06-11',reason:'سبب غياب الطالب رقم 15',isSelected:false,by:'بواسطة 015',createdAt:'2023-08-09',image:'assets/images/user.png'},
    {id:16,studentName:'طالب رقم 016',from:'2023-07-12',to:'2023-06-12',reason:'سبب غياب الطالب رقم 16',isSelected:false,by:'بواسطة 016',createdAt:'2023-08-10',image:'assets/images/user.png'},
    {id:17,studentName:'طالب رقم 017',from:'2023-07-13',to:'2023-06-13',reason:'سبب غياب الطالب رقم 17',isSelected:false,by:'بواسطة 017',createdAt:'2023-08-05',image:'assets/images/user.png'},
    {id:18,studentName:'طالب رقم 018',from:'2023-07-14',to:'2023-06-14',reason:'سبب غياب الطالب رقم 18',isSelected:false,by:'بواسطة 018',createdAt:'2023-08-05',image:'assets/images/user.png'},
    {id:19,studentName:'طالب رقم 019',from:'2023-07-16',to:'2023-06-16',reason:'سبب غياب الطالب رقم 19',isSelected:false,by:'بواسطة 019',createdAt:'2023-08-05',image:'assets/images/user.png'},
    {id:20,studentName:'طالب رقم 20',from:'2023-07-15',to:'2023-06-15',reason:'سبب غياب الطالب رقم 20',isSelected:false,by:'بواسطة 20',createdAt:'2023-08-05',image:'assets/images/user.png'},
    
    {id:21,studentName:'طالب رقم 021',from:'2023-07-15',to:'2023-06-15',reason:'سبب غياب الطالب رقم 21',isSelected:false,by:'بواسطة 021',createdAt:'2023-08-05',image:'assets/images/user.png'},
    {id:22,studentName:'طالب رقم 022',from:'2023-07-15',to:'2023-06-15',reason:'سبب غياب الطالب رقم 22',isSelected:false,by:'بواسطة 022',createdAt:'2023-08-05',image:'assets/images/user.png'},
    {id:23,studentName:'طالب رقم 023',from:'2023-07-14',to:'2023-06-14',reason:'سبب غياب الطالب رقم 23',isSelected:false,by:'بواسطة 023',createdAt:'2023-08-05',image:'assets/images/user.png'},
    {id:24,studentName:'طالب رقم 024',from:'2023-07-15',to:'2023-06-15',reason:'سبب غياب الطالب رقم 24',isSelected:false,by:'بواسطة 024',createdAt:'2023-08-05',image:'assets/images/user.png'},
    {id:25,studentName:'طالب رقم 025',from:'2023-07-17',to:'2023-06-17',reason:'سبب غياب الطالب رقم 25',isSelected:false,by:'بواسطة 025',createdAt:'2023-08-02',image:'assets/images/user.png'},
    {id:26,studentName:'طالب رقم 026',from:'2023-07-18',to:'2023-06-18',reason:'سبب غياب الطالب رقم 26',isSelected:false,by:'بواسطة 026',createdAt:'2023-08-03',image:'assets/images/user.png'},
    {id:27,studentName:'طالب رقم 027',from:'2023-07-19',to:'2023-06-19',reason:'سبب غياب الطالب رقم 27',isSelected:false,by:'بواسطة 027',createdAt:'2023-08-04',image:'assets/images/user.png'},
    {id:28,studentName:'طالب رقم 028',from:'2023-07-20',to:'2023-06-20',reason:'سبب غياب الطالب رقم 28',isSelected:false,by:'بواسطة 028',createdAt:'2023-08-05',image:'assets/images/user.png'},
    {id:29,studentName:'طالب رقم 029',from:'2023-07-15',to:'2023-06-15',reason:'سبب غياب الطالب رقم 29',isSelected:false,by:'بواسطة 029',createdAt:'2023-08-06',image:'assets/images/user.png'},
    {id:30,studentName:'طالب رقم 30',from:'2023-07-15',to:'2023-06-15',reason:'سبب غياب الطالب رقم 30',isSelected:false,by:'بواسطة 30',createdAt:'2023-08-05',image:'assets/images/user.png'},
    
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
