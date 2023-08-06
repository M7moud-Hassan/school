import { Component, OnInit } from '@angular/core';
import { SchoolHomePageService } from 'src/app/appServices/school-home-page.service';

@Component({
  selector: 'app-section5-download-app',
  templateUrl: './section5-download-app.component.html',
  styleUrls: ['./section5-download-app.component.css']
})
export class Section5DownloadAppComponent implements OnInit {
  list:any[] = [];
  model:any;

  constructor(private service:SchoolHomePageService){}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.model = this.service.loadTheBusWaySection_5_Data()
    this.list = this.model.keypoints;
  }
}