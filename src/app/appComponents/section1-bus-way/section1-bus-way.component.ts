import { Component, OnInit } from '@angular/core';
import { SchoolHomePageService, busWaySection_1_model } from 'src/app/appServices/school-home-page.service';

@Component({
  selector: 'app-section1-bus-way',
  templateUrl: './section1-bus-way.component.html',
  styleUrls: ['./section1-bus-way.component.css']
})
export class Section1BusWayComponent implements OnInit{
  model:busWaySection_1_model = {} as busWaySection_1_model;

  constructor(private service:SchoolHomePageService){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.model = this.service.getBusWaySection_1_data();
  }
}
