import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewParentsModel } from '../Core/Models/new-parents-model';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  
  constructor(private http:HttpClient) { }

  addNewParent(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  addStudentDate(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getParentList():parentListModel[]{
    return  [
      {
        id: 1, name: 'حساب ولى الأمر 1', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/01', isActive: false, childrenInfo: [{
          id: 100,
          name: 'الابـــن 1',
          phone: '055251521252'
        }]
      },
      {
        id: 2, name: 'حساب ولى الأمر 2', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/06', isActive: false, childrenInfo:
          [
            { id: 101, name: 'الابـــن 1', phone: '055251521252' },
            { id: 102, name: 'الابـــن 2', phone: '055251521252' },
            { id: 103, name: 'الابـــن 3', phone: '055251521252' },
            { id: 104, name: 'الابـــن 4', phone: '055251521252' },
            { id: 105, name: 'الابـــن 5', phone: '055251521252' },
          ]
      },
      {
        id: 3, name: 'حساب ولى الأمر 3', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/05', isActive: true, childrenInfo: [{
          id: 111,
          name: 'الابـــن 1',
          phone: '055251521252'
        }]
      },
      {
        id: 4, name: 'حساب ولى الأمر 4', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/08', isActive: true, childrenInfo:
          [
            { id: 106, name: 'الابـــن 1', phone: '055251521252' },
            { id: 107, name: 'الابـــن 2', phone: '055251521252' },
            { id: 108, name: 'الابـــن 3', phone: '055251521252' },
            { id: 109, name: 'الابـــن 4', phone: '055251521252' },
          ]
      },
      {
        id: 5, name: 'حساب ولى الأمر 5', phone: '047868736783', isSelected: false, lastActiveDate: '2023/06/25', isActive: true, childrenInfo: [{
          id: 112,
          name: 'الابـــن 1',
          phone: '055251521252'
        }]
      },
      {
        id: 6, name: 'حساب ولى الأمر 6', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/04', isActive: false, childrenInfo:
          [
            { id: 121, name: 'الابـــن 1', phone: '055251521252' },
            { id: 122, name: 'الابـــن 2', phone: '055251521252' },
            { id: 123, name: 'الابـــن 3', phone: '055251521252' },
            { id: 124, name: 'الابـــن 4', phone: '055251521252' },
            { id: 125, name: 'الابـــن 5', phone: '055251521252' },
          ]
      },
      {
        id: 16, name: ' 1حساب ولى الأمر 6', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/03', isActive: false, childrenInfo: [{
          id: 113,
          name: 'الابـــن 1',
          phone: '055251521252'
        }]
      },
      {
        id: 7, name: 'حساب ولى الأمر 7', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/05', isActive: false, childrenInfo:
          [
            { id: 131, name: 'الابـــن 1', phone: '055251521252' },
            { id: 132, name: 'الابـــن 2', phone: '055251521252' },
          ]
      },
      {
        id: 8, name: 'حساب ولى الأمر 8', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/09', isActive: false, childrenInfo: [{
          id: 114,
          name: 'الابـــن 1',
          phone: '055251521252'
        }]
      },
      {
        id: 9, name: 'حساب ولى الأمر 9', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/15', isActive: false, childrenInfo:
          [
            { id: 141, name: 'الابـــن 1', phone: '055251521252' },
            { id: 142, name: 'الابـــن 2', phone: '055251521252' },
            { id: 143, name: 'الابـــن 3', phone: '055251521252' },
            { id: 144, name: 'الابـــن 4', phone: '055251521252' },
            { id: 145, name: 'الابـــن 5', phone: '055251521252' },
          ]
      },
      {
        id: 10, name: 'حساب ولى الأمر 10', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/08', isActive: true, childrenInfo: [{
          id: 115,
          name: 'الابـــن 1',
          phone: '055251521252'
        }]
      },
      {
        id: 11, name: 'حساب ولى الأمر 11', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/14', isActive: false, childrenInfo:
          [
            { id: 151, name: 'الابـــن 1', phone: '055251521252' },
            { id: 152, name: 'الابـــن 2', phone: '055251521252' },
            { id: 153, name: 'الابـــن 3', phone: '055251521252' },
            { id: 154, name: 'الابـــن 4', phone: '055251521252' },
          ]
      },
      {
        id: 12, name: 'حساب ولى الأمر 12', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/11', isActive: true, childrenInfo: [{
          id: 116,
          name: 'الابـــن 1',
          phone: '055251521252'
        }]
      },
      {
        id: 13, name: 'حساب ولى الأمر 13', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/12', isActive: false, childrenInfo:
          [
            { id: 161, name: 'الابـــن 1', phone: '055251521252' },
            { id: 162, name: 'الابـــن 2', phone: '055251521252' },
            { id: 163, name: 'الابـــن 3', phone: '055251521252' },
          ]
      },
      {
        id: 14, name: 'حساب ولى الأمر 14', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/01', isActive: false, childrenInfo: [{
          id: 117,
          name: 'الابـــن 1',
          phone: '055251521252'
        }]
      },
      {
        id: 15, name: 'حساب ولى الأمر 15', phone: '047868736783', isSelected: false, lastActiveDate: '2023/07/03', isActive: false, childrenInfo:
          [
            { id: 171, name: 'الابـــن 1', phone: '055251521252' },
            { id: 172, name: 'الابـــن 2', phone: '055251521252' },
            { id: 173, name: 'الابـــن 3', phone: '055251521252' },
            { id: 174, name: 'الابـــن 4', phone: '055251521252' },
            { id: 175, name: 'الابـــن 5', phone: '055251521252' },
          ]
      },
    ];
  }
  getRelativesList():relativeModel[]{
    return [
      {id:1,type:'أب'},
      {id:2,type:'أم'},
      {id:3,type:'أخ'},
      {id:4,type:'أخت'},
      {id:5,type:'خال'},
      {id:6,type:'خالة'},
      {id:7,type:'عم'},
      {id:8,type:'عمة'},
      {id:9,type:'جد'},
      {id:10,type:'جدة'},
    ];
  }
}

export interface childInfoModel{
  id: any,
  name:any, 
  phone: any 
}
export interface parentListModel{
  id: any,
  name: any,
  phone: any,
  isSelected: any,
  lastActiveDate: any,
  isActive: any,
  childrenInfo:childInfoModel[],
}


export interface relativeModel{
  id:any,
  type:any
}