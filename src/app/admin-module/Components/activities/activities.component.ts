import { Component, OnInit } from '@angular/core';
import { activities_Model } from 'src/app/agent-module/Services/agent-home.service';
import { MainAgentService } from 'src/app/agent-module/Services/main-agent.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['../../../schools-module/Components/Activities/activities.component.css','./activities.component.css']
})
export class ActivitiesComponent implements OnInit{
  currentDate = Date.now();
  activities:activities_Model[]=[];
  strokArray:any[] = [];
  constructor(private service:MainAgentService){}
  ngOnInit(): void {
    this.getAllActivities();
    this.strokArray = this.activities.map(val=>`${val.percent}, 100`);
  }
  getAllActivities(){
    this.activities = this.service.agentHomeService.getAllActivities();
  }

}
