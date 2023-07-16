import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolsLayoutComponent } from './Components/schools-layout/schools-layout.component';
import { SchoolsHomePageComponent } from './Components/schools-home-page/schools-home-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ProfileComponent } from './Components/profile/profile.component';
import { ReportTripsComponent } from './Components/report-trips/report-trips.component';

const routes: Routes = [
  {path:'',component:SchoolsLayoutComponent,children:[
    {path:'',component:SchoolsHomePageComponent}
  ]},
  {path:'profile',component:ProfileComponent},
  {path:'trip-reports',component:ReportTripsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ],
  exports: [RouterModule],
})
export class SchoolsModuleRoutingModule { }
