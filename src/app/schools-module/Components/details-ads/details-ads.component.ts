import { Component ,AfterViewInit, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-details-ads',
  templateUrl: './details-ads.component.html',
  styleUrls: ['../login/login.component.css', '../register/register.component.css','../profile/profile.component.css','../new-student/new-student.component.css','./details-ads.component.css']
})
export class DetailsAdsComponent  implements OnInit{

  constructor(private service:MainService){}

  ngOnInit(): void {

  }
   
}
