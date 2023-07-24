import { Component, OnInit } from '@angular/core';
import { activitiesModel } from '../../Services/activities.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  currentDate = Date.now();
  activities:activitiesModel[]=[];
  strokArray:any[] = this.activities.map(val=>`${val.percent}, 100`);

  constructor(private service:MainService){}

  ngOnInit(): void {
    this.getAllActivities();
  }
  getAllActivities(){
    this.activities = this.service.activitiesService.getAll();
  }


}
