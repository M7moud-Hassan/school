import { Component } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  groups:any = [
    {groupName:'المجموعة الأولــى',supervisor:'فادى شادى',busNumber:'4',plateNumber:'رود 2326',busColor:'blue'},
    {groupName:'المجموعة الثانية',supervisor:'فادى شادى',busNumber:'5',plateNumber:'رود 2326',busColor:'red'},
    {groupName:'المجموعة الثالثة',supervisor:'فادى شادى',busNumber:'1',plateNumber:'رود 2326',busColor:'yellow'},
    {groupName:'المجموعة الرابعة',supervisor:'فادى شادى',busNumber:'7',plateNumber:'رود 2326',busColor:'green'},
    {groupName:'المجموعة الخامسة',supervisor:'فادى شادى',busNumber:'9',plateNumber:'رود 2326',busColor:'yellow'},
    {groupName:'المجموعة السادسة',supervisor:'فادى شادى',busNumber:'2',plateNumber:'رود 2326',busColor:'blue'},
    {groupName:'المجموعة السابعة',supervisor:'فادى شادى',busNumber:'3',plateNumber:'رود 2326',busColor:'yellow'},
  ];
}
