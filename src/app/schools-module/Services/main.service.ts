import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GroupsService } from './groups.service';
import { StatisticsService } from './statistics.service';
import { ActivitiesService } from './activities.service';
import { SchoolService } from './school.service';
import { SchoolReportService } from './school-report.service';
import { SupervisorService } from './supervisor.service';
import { StudentService } from './student.service';
import { ParentService } from './parent.service';
import { TripsTrackingService } from './trips-tracking.service';
import { AdsService } from './ads.service';
import { AbsenceService } from './absence.service';
import { SupportService } from './support.service';
import { NotificationService } from './notification.service';
import { TripsAndGroupsService } from './trips-and-groups.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private _formBuilder:FormBuilder,
    private _dialog: MatDialog,
    private _router: Router,
    private _location:Location,
    private _authService:AuthService,
    private _groupService:GroupsService,
    private _statisticsService:StatisticsService,
    private _activitiesService:ActivitiesService,
    private _schoolService:SchoolService,
    private _schoolReportService:SchoolReportService,
    private _supervisorService:SupervisorService,
    private _studentService:StudentService,
    private _parentService:ParentService,
    private _tripsTrackingService:TripsTrackingService,
    private _adsService:AdsService,
    private _absenceService:AbsenceService,
    private _supportService:SupportService,
    private _notificationService:NotificationService,
    private _tripsAndGroupsService:TripsAndGroupsService,
  ) { }
  
  
  get formBuilder():FormBuilder{
    return this._formBuilder;
  }
  get dialog():MatDialog{
    return this._dialog;
  }
  get router():Router{
    return this._router;
  }
  get  authService():AuthService{
    return this._authService;
  }
  get  groupService():GroupsService{
    return this._groupService;
  }
  get  statisticsService():StatisticsService{
    return this._statisticsService;
  }
  get  activitiesService():ActivitiesService{
    return this._activitiesService;
  }
  get  schoolService():SchoolService{
    return this._schoolService;
  }
  get  schoolReportService():SchoolReportService{
    return this._schoolReportService;
  }
  get  supervisorService():SupervisorService{
    return this._supervisorService;
  }
  get  studentService():StudentService{
    return this._studentService;
  }
  get  parentService():ParentService{
    return this._parentService;
  }
  get  tripsTrackingService():TripsTrackingService{
    return this._tripsTrackingService;
  }
  get  adsService():AdsService{
    return this._adsService;
  }
  get  absenceService():AbsenceService{
    return this._absenceService;
  }
  get  supportService():SupportService{
    return this._supportService;
  }
  get  notificationService():NotificationService{
    return this._notificationService;
  }
  get  tripsAndGroupsService():TripsAndGroupsService{
    return this._tripsAndGroupsService;
  }


























  back(){
    this._location.back();
  }
  printFormValues(myForm:FormGroup): void {
    let  i = 0;
    let displayedValues:String = "";
    for (const controlName in myForm.controls) {
      i++;
      if (myForm.controls.hasOwnProperty(controlName)) {
        displayedValues += `${i} - ${controlName}: ${myForm.controls[controlName].value} \n`;
        console.log(`${controlName}: ${myForm.controls[controlName].value}`);
      }
    }
    alert(displayedValues);
  }

}
