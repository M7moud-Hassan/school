import { Component,OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { TripsTrackingModel } from '../../Services/trips-tracking.service';
import { AddNewStudentToGroupPopUpComponent } from '../add-new-student-to-group-pop-up/add-new-student-to-group-pop-up.component';
import { ChangeSupervisorPopUpComponent } from '../change-supervisor-pop-up/change-supervisor-pop-up.component';

@Component({
  selector: 'app-today-journey',
  templateUrl: './today-journey.component.html',
  styleUrls: ['./today-journey.component.css', '../activities/activities.component.css']
})
export class TodayJourneyComponent implements OnInit {
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
  openChangeGroupSupervisorDialog(){
    this.openDialog();
  }
  openDialog() {
    const dialogRef = this.service.dialog.open(ChangeSupervisorPopUpComponent, {
      width: '50%',
      direction:'rtl',
      panelClass:'custom-dialog-container',
      data: { name: 'Angular Material' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }
  openAddStudentToGroupDialog(){
    this.addStudentToGroupDialog();
  }
  addStudentToGroupDialog() {
    const dialogRef = this.service.dialog.open(AddNewStudentToGroupPopUpComponent, {
      width: '50%',
      direction:'rtl',
      panelClass:'custom-dialog-container',
      data: { name: 'Angular Material' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }
}
