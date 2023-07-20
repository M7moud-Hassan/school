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
}
