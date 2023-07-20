import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolsLayoutComponent } from './Components/schools-layout/schools-layout.component';
import { SchoolsHomePageComponent } from './Components/schools-home-page/schools-home-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ProfileComponent } from './Components/profile/profile.component';
import { ReportTripsComponent } from './Components/report-trips/report-trips.component';
import { NewStudentComponent } from './Components/new-student/new-student.component';
import { ParentsComponent } from './Components/parents/parents.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ParentsListComponent } from './Components/parents-list/parents-list.component';
import { TrackingTripComponent } from './Components/tracking-trip/tracking-trip.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { TodayJourneyComponent } from './Components/today-journey/today-journey.component';
import { PrintPopUpComponent } from './Components/print-pop-up/print-pop-up.component';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { BusListComponent } from './Components/bus-list/bus-list.component';
import { SupervisorsListComponent } from './Components/supervisors-list/supervisors-list.component';
import { NewSupervisorComponent } from './Components/new-supervisor/new-supervisor.component';
import { GroupPopupComponent } from './Components/group-popup/group-popup.component';
import { SupportComponent } from './Components/support/support.component';
import { NewAskComponent } from './Components/new-ask/new-ask.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { NewNotificationComponent } from './Components/new-notification/new-notification.component';
import { DeliveryComponent } from './Components/delivery/delivery.component';
import { DoneDeliveryComponent } from './Components/done-delivery/done-delivery.component';
import { AdsComponent } from './Components/ads/ads.component';
import { NewAdsComponent } from './Components/new-ads/new-ads.component';
import { DetailsAdsComponent } from './Components/details-ads/details-ads.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'trip-reports',component:ReportTripsComponent},
  {path:'new-student',component:NewStudentComponent},
  {path:'parents',component:ParentsComponent},
  {path:'home',component:HomePageComponent},
  {path:'parents-list',component:ParentsListComponent},
  {path:'students-list',component:StudentListComponent},
  {path:'tracking',component:TrackingTripComponent},
  {path:'today-journey',component:TodayJourneyComponent},
  {path:'print',component:PrintPopUpComponent},
  {path:'bus-list',component:BusListComponent},
  {path:'supervisor-list',component:SupervisorsListComponent},
  {path:'new-supervisor',component:NewSupervisorComponent},
  {path:'popup',component:GroupPopupComponent},
  {path:'support',component:SupportComponent},
  {path:'new-ask',component:NewAskComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'new-notification',component:NewNotificationComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'done-delivery',component:DoneDeliveryComponent},
  {path:'ads',component:AdsComponent},
  {path:'new-ads',component:NewAdsComponent},
  {path:'details-ads',component:DetailsAdsComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ],
  exports: [RouterModule],
})
export class SchoolsModuleRoutingModule { }
