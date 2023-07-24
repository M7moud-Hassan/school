import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor() { }

  getAll():groupModel[]{
    return  [
      {groupName:'المجموعة الأولــى',supervisor:'فادى شادى',busNumber:'4',plateNumber:'رود 2326',busColor:'blue'},
      {groupName:'المجموعة الثانية',supervisor:'فادى شادى',busNumber:'5',plateNumber:'رود 2326',busColor:'red'},
      {groupName:'المجموعة الثالثة',supervisor:'فادى شادى',busNumber:'1',plateNumber:'رود 2326',busColor:'yellow'},
      {groupName:'المجموعة الرابعة',supervisor:'فادى شادى',busNumber:'7',plateNumber:'رود 2326',busColor:'green'},
      {groupName:'المجموعة الخامسة',supervisor:'فادى شادى',busNumber:'9',plateNumber:'رود 2326',busColor:'yellow'},
      {groupName:'المجموعة السادسة',supervisor:'فادى شادى',busNumber:'2',plateNumber:'رود 2326',busColor:'blue'},
      {groupName:'المجموعة السابعة',supervisor:'فادى شادى',busNumber:'3',plateNumber:'رود 2326',busColor:'yellow'},
      {groupName:'المجموعة الثامنة',supervisor:'فادى شادى',busNumber:'9',plateNumber:'رود 2326',busColor:'yellow'},
    ];
  }
  getGroups():groupSimpleModel[]{
    return [
      {id:1,name:'المجموعة الاولى'},
      {id:3,name:'المجموعة الثانية'},
      {id:2,name:'المجموعة الثالثة'},
      {id:4,name:'المجموعة الرابعة'},
      {id:5,name:'المجموعة الخامسة'},
      {id:6,name:'المجموعة السادسة'},
      {id:7,name:'المجموعة السابعة'},
      {id:8,name:'المجموعة الثامنة'},
      {id:9,name:'المجموعة التاسعه'},
      {id:10,name:'المجموعة العاشرة'},
    ];
  }
  getGroupsForTrips(){
    return [
      {id:1,name:'المجموعة الاولى',studentCount:19},
      {id:3,name:'المجموعة الثانية',studentCount:13},
      {id:2,name:'المجموعة الثالثة',studentCount:15},
      {id:4,name:'المجموعة الرابعة',studentCount:8},
      {id:5,name:'المجموعة الخامسة',studentCount:14},
      {id:6,name:'المجموعة السادسة',studentCount:10},
      {id:7,name:'المجموعة السابعة',studentCount:29},
      {id:8,name:'المجموعة الثامنة',studentCount:39},
      {id:9,name:'المجموعة التاسعه',studentCount:18},
      {id:10,name:'المجموعة العاشرة',studentCount:20},
    ];
  }
}
export interface groupModel{
  groupName:any,
  supervisor:any,
  busNumber:any,
  plateNumber:any,
  busColor:any
}
export interface groupSimpleModel{
  id:any,
  name:any,
}
