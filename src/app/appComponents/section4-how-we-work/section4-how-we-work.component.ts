import { Component, OnInit } from '@angular/core';
import { SchoolHomePageService } from 'src/app/appServices/school-home-page.service';

@Component({
  selector: 'app-section4-how-we-work',
  templateUrl: './section4-how-we-work.component.html',
  styleUrls: ['./section4-how-we-work.component.css']
})
export class Section4HowWeWorkComponent  implements OnInit{
  model:any ;

  constructor(private service:SchoolHomePageService){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.model = this.service.getHowWeWorkSection_4_data();
  }
}
