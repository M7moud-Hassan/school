import { Component, OnInit } from '@angular/core';
import { SchoolHomePageService } from 'src/app/appServices/school-home-page.service';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent implements OnInit{
  list:any[] = [];
  model:any;
  year :any ;
  constructor(private service:SchoolHomePageService){}

  ngOnInit(): void {
    this.loadData();
    this. year = new Date().getFullYear();
  }

  loadData(){
    this.model = this.service.getFooterData();
    this.list = this.model.socialLinks;
  }
}