import { Component, OnInit } from '@angular/core';
import { SchoolHomePageService } from 'src/app/appServices/school-home-page.service';

@Component({
  selector: 'app-section3-targeters',
  templateUrl: './section3-targeters.component.html',
  styleUrls: ['./section3-targeters.component.css']
})
export class Section3TargetersComponent implements OnInit {
  list:any[] = [];
  model:any;

  constructor(private service:SchoolHomePageService){}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.model = this.service.loadTheTargetersData()
    this.list = this.model.imagesData;
  }
}
