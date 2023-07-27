import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { statiscticsModel } from 'src/app/schools-module/Services/statistics.service';
import { MainAgentService } from '../../Services/main-agent.service';
import { activities_Model, agentLastAddon, agentLastUpdates } from '../../Services/agent-home.service';

@Component({
  selector: 'app-agent-home-page',
  templateUrl: './agent-home-page.component.html',
  styleUrls: ['./agent-home-page.component.css']
})
export class AgentHomePageComponent implements OnInit {
  currentDate = Date.now();
  statisctics :statiscticsModel[]=[];
  activities:activities_Model[]=[];
  addingsList:agentLastAddon[]=[];
  updatesList:agentLastUpdates[]=[];
  strokArray:any[] = [];
  isNotificationOpened:boolean= true;
  isLastModifiedShown:boolean= true;
  isLastAddedShown:boolean= true;

  constructor(private service:MainAgentService){}
  @ViewChild('cardsContainer') cardsContainerRef!: ElementRef;
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const speed = 20;
    const cardsContainer = this.cardsContainerRef.nativeElement as HTMLElement;

    if (event.pageX < cardsContainer.getBoundingClientRect().left + 20) {
      cardsContainer.scrollLeft -= speed;
    } else if (event.pageX > cardsContainer.getBoundingClientRect().right - 20) {
      cardsContainer.scrollLeft += speed;
    }
  }

  ngOnInit(): void {
    this.getLastUpdates();
    this.getLastAddings();
    this.getAllStatistics();
    this.getAllActivities();
    this.strokArray = this.activities.map(val=>`${val.percent}, 100`);
  }
  closeLastModified(){
    this.isLastModifiedShown = false;
    if(!this.isLastAddedShown)
    this.isNotificationOpened = false;
  }
  closeLastAdded(){
    this.isLastAddedShown = false;
    if(!this.isLastModifiedShown)
    this.isNotificationOpened = false;
  }

  getAllStatistics(){
    this.statisctics = this.service.agentHomeService.getAllStatisctics();
  }

  getAllActivities(){
    this.activities = this.service.agentHomeService.getAllActivities();
  }
  
  getLastAddings(){
    this.addingsList = this.service.agentHomeService.getLastAddon();
  }

  getLastUpdates(){
    this.updatesList = this.service.agentHomeService.getLastUpdates();
  }
  


}
