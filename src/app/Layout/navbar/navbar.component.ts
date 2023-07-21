import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isSchoolAccountDropdownVisible:boolean = false;
  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }
  isSearchBoxVisible:boolean = false;
  toggleSearchBox(){
    this.isSearchBoxVisible = ! this.isSearchBoxVisible;
  }
  searchType = [
    {id:1,label:'ولى أمر',},
    {id:2,label:'طالـــب',},
    {id:3,label:'رحـلة',},
    {id:4,label:'بـاص',},
    {id:5,label:'مشـرف',},
    {id:6,label:'مجموعة',},
    {id:7,label:'إعـلان'},
  ]; 
}
