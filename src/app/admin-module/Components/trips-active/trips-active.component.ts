import { Component,AfterViewInit, HostListener,OnInit } from '@angular/core';
import { MainService } from 'src/app/schools-module/Services/main.service';
import { TripsTrackingModel } from 'src/app/schools-module/Services/trips-tracking.service';

@Component({
  selector: 'app-trips-active',
  templateUrl: './trips-active.component.html',
  styleUrls: ['../../../schools-module/Components/today-journey/today-journey.component.css', '../../../schools-module/Components/activities/activities.component.css','../../../Layout/admin-navbar/admin-navbar.component.css','../../../schools-module/Components/register/register.component.css','../../../schools-module/Components/login/login.component.css',
  '../../../schools-module/Components/profile/profile.component.css','../../../schools-module/Components/new-student/new-student.component.css','./trips-active.component.css']
})
export class TripsActiveComponent implements AfterViewInit,OnInit{
  ngAfterViewInit(): void {
   
  }
  @HostListener('window:click', ['$event'])
  onClick(event: MouseEvent) {
    if(event.target != document.getElementById("dropdown-menu"))
    if(this.topSearch==0){
      this.topSearch=-50;
     }else{
      this.topSearch=0;
     }
  }

  topSearch=0;
  dropdownItems = [
    { text: 'HTML', visible: true },
    { text: 'CSS', visible: true },
    { text: 'JavaScript', visible: true },
    { text: 'jQuery', visible: true },
    { text: 'Bootstrap', visible: true },
    { text: 'Angular', visible: true },
  ];

  filterItems(value: string) {
    const lowerCaseValue = value.toLowerCase();
    this.dropdownItems.forEach(item => {
      item.visible = item.text.toLowerCase().indexOf(lowerCaseValue) > -1;
    });
  }

  allJournies:boolean = true;
  returnJourney:boolean = false;
  outboundJourney:boolean = false;
  isAllJourneySelected:boolean=false;
  isActiveJourneySelected:boolean=false;
  journies:any[] = [];
  journey_data:TripsTrackingModel[] = [];
  groups : any[]=[];
  
  constructor(private service:MainService){}

  ngOnInit(): void {
    this.getAllTrips();
    this.getGroups();
    this.getAllJourney();
  }
  getAllTrips(){
    this.journey_data = this.service.tripsTrackingService.getAllTrips();
  }

   getAllJourney(){
    this.journies =  this.journey_data;
    this.allJournies = true;
    this.returnJourney = false;
    this.outboundJourney = false;
  }
   getReturnJourney(){
    this.journies = this.journey_data.filter(x=>x.journeyType=='returnJourney');
    this.allJournies = false;
    this.returnJourney = true;
    this.outboundJourney = false;
  }
  getOutboundJourney(){
    this.journies = this.journey_data.filter(x=>x.journeyType=='outboundJourney');
    this.allJournies = false;
    this.returnJourney = false;
    this.outboundJourney = true;
  }
  todayJournies=[
    {type:'all',label:'إجمالي عدد الرحلات : ',activityName:'عدد الرحلات',count:'28',percent:'70'},
    {type:'active',label:' عدد الرحلات الفعالة الآن : ',activityName:'طلبات الغياب',count:'9',percent:'15'},
  ];
  strokArray:any[] = this.todayJournies.map(val=>`${val.percent}, 100`);
  
  
  getGroups(){
    this.groups = this.service.groupService.getGroupsForTrips();
  }

  showJourney(type:any){
    if(type=='all'){
      this.isAllJourneySelected = true;
      this.isActiveJourneySelected = false;
    }else{
      this.isActiveJourneySelected = true;
      this.isAllJourneySelected = false;
    }
  }
}
