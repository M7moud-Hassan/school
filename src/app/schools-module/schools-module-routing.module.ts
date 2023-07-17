import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolsLayoutComponent } from './Components/schools-layout/schools-layout.component';
import { SchoolsHomePageComponent } from './Components/schools-home-page/schools-home-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ProfileComponent } from './Components/profile/profile.component';
import { ReportTripsComponent } from './Components/report-trips/report-trips.component';
import { NewStudentComponent } from './Components/new-student/new-student.component';
import { ParentsComponent } from './Components/parents/parents.component';

const routes: Routes = [
  {path:'',component:SchoolsLayoutComponent,children:[
    {path:'',component:SchoolsHomePageComponent}
  ]},
  {path:'profile',component:ProfileComponent},
  {path:'trip-reports',component:ReportTripsComponent},
  {path:'new-student',component:NewStudentComponent},
  {path:'parents',component:ParentsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ],
  exports: [RouterModule],
})
export class SchoolsModuleRoutingModule { }
