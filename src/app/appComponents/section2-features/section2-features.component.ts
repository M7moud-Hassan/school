import { Component, OnInit } from '@angular/core';
import { SchoolHomePageService, featureSection_2_model } from 'src/app/appServices/school-home-page.service';

@Component({
  selector: 'app-section2-features',
  templateUrl: './section2-features.component.html',
  styleUrls: ['./section2-features.component.css']
})
export class Section2FeaturesComponent implements OnInit{
  model:featureSection_2_model[] = [];

  constructor(private service:SchoolHomePageService){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.model = this.service.getFeaturesSection_2_data();
  }
}