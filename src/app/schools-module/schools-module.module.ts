import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsModuleRoutingModule } from './schools-module-routing.module';
import { SchoolsLayoutComponent } from './Components/schools-layout/schools-layout.component';
import { SchoolsHomePageComponent } from './Components/schools-home-page/schools-home-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DilaogContactComponent } from './Components/dilaog-contact/dilaog-contact.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {NgxPaginationModule} from 'ngx-pagination';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { NewPasswordComponent } from './Components/new-password/new-password.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ActivitiesComponent } from './Components/activities/activities.component';
import { GroupsComponent } from './Components/groups/groups.component';
import { ParentsListComponent } from './Components/parents-list/parents-list.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ReportTripsComponent } from './Components/report-trips/report-trips.component';
import { NewStudentComponent } from './Components/new-student/new-student.component';
import { ParentsComponent } from './Components/parents/parents.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { TrackingTripComponent } from './Components/tracking-trip/tracking-trip.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { InfoWindowComponent } from './Components/info-window/info-window.component';
import { TodayJourneyComponent } from './Components/today-journey/today-journey.component';
import {MatIconModule} from '@angular/material/icon';
import { PrintPopUpComponent } from './Components/print-pop-up/print-pop-up.component';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { SupervisorsListComponent } from './Components/supervisors-list/supervisors-list.component';
import { BusListComponent } from './Components/bus-list/bus-list.component';
import { NewSupervisorComponent } from './Components/new-supervisor/new-supervisor.component';
import { GroupPopupComponent } from './Components/group-popup/group-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SupportComponent } from './Components/support/support.component';
import { DetailsAskComponent } from './Components/details-ask/details-ask.component';
import { NewAskComponent } from './Components/new-ask/new-ask.component';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    SchoolsLayoutComponent,
    SchoolsHomePageComponent,
    LoginComponent,
    RegisterComponent,
    DilaogContactComponent,
    ResetPasswordComponent,
    NewPasswordComponent,
    HomePageComponent,
    ActivitiesComponent,
    GroupsComponent,
    ParentsListComponent,
    ProfileComponent,
    ReportTripsComponent,
    NewStudentComponent,
    ParentsComponent,
    StatisticsComponent,
    TrackingTripComponent,
    InfoWindowComponent,
    TodayJourneyComponent,
    PrintPopUpComponent,
    StudentListComponent,
    SupervisorsListComponent,
    BusListComponent,
    NewSupervisorComponent,
    GroupPopupComponent,
    SupportComponent,
    DetailsAskComponent,
    NewAskComponent,
  ],
  imports: [
    CommonModule,
    SchoolsModuleRoutingModule,
    SharedModuleModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    NgxPaginationModule,
    GoogleMapsModule,
    MatIconModule,   
    MatDialogModule ,
    EditorModule
  ]
})
export class SchoolsModuleModule { }
