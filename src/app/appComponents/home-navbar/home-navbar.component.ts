import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit{
  language:string = 'EN';
  ngOnInit(): void {
    this.language = 'EN';
  }

  changeLang(){
    this.language =  this.language == 'EN' ? 'عربى' : 'EN';
  }
}
