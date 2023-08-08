import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit{
  language:string = 'EN';
  register=true
  login=true
  ngOnInit(): void {
    this.language = 'EN';
   
  }


  constructor(private location: Location) {
  if(this.location.path().includes('school')){
    this.register=true
    this.login=true
  }else if(this.location.path().includes('agent')){
    this.register=false
    this.login=true
  }
  else if(this.location.path().includes('admin')){
    this.register=false
    this.login=true
  }
}
  changeLang(){
    this.language =  this.language == 'EN' ? 'عربى' : 'EN';
  }




}
