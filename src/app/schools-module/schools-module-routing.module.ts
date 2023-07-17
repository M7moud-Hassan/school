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

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'trip-reports',component:ReportTripsComponent},
  {path:'new-student',component:NewStudentComponent},
  {path:'parents',component:ParentsComponent},
  {path:'home',component:HomePageComponent},
  {path:'parents-list',component:ParentsListComponent},
  {path:'tracking',component:TrackingTripComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ],
  exports: [RouterModule],
})
export class SchoolsModuleRoutingModule { }
