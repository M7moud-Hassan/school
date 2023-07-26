import { Component } from '@angular/core';

@Component({
  selector: 'app-agent-navbar',
  templateUrl: './agent-navbar.component.html',
  styleUrls: ['./agent-navbar.component.css']
})
export class AgentNavbarComponent {
  isSchoolAccountDropdownVisible:boolean = false;
  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }
  isSearchBoxVisible:boolean = false;
  toggleSearchBox(){
    this.isSearchBoxVisible = ! this.isSearchBoxVisible;
  }
  searchType = [
    {id:1,label:'مشترك',},
    {id:2,label:'مدرسة',},
    {id:3,label:'رحـلة',},
    {id:4,label:'بـاص',},
    {id:5,label:'مشـرف',},
    {id:6,label:'مجموعة',},
    {id:7,label:'إعـلان'},
  ];
}
