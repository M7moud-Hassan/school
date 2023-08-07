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
import { AbsenceListComponent } from './Components/absence-list/absence-list.component';
import { AddAbsenceOrderComponent } from './Components/add-absence-order/add-absence-order.component';
import { TripsAndGroupsComponent } from './Components/trips-and-groups/trips-and-groups.component';
import { NewTripGroupComponent } from './Components/new-trip-group/new-trip-group.component';
import { ChangeSupervisorPopUpComponent } from './Components/change-supervisor-pop-up/change-supervisor-pop-up.component';
import { AddNewStudentToGroupPopUpComponent } from './Components/add-new-student-to-group-pop-up/add-new-student-to-group-pop-up.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { NewNotificationComponent } from './Components/new-notification/new-notification.component';
import { ShowNotificationComponent } from './Components/show-notification/show-notification.component';
import { DeliveryComponent } from './Components/delivery/delivery.component';
import { SendDialogComponent } from './Components/send-dialog/send-dialog.component';
import { DoneDeliveryComponent } from './Components/done-delivery/done-delivery.component';
import { AdsComponent } from './Components/ads/ads.component';
import { NewAdsComponent } from './Components/new-ads/new-ads.component';
import { DetailsAdsComponent } from './Components/details-ads/details-ads.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { SocialMediaComponent } from './Components/social-media/social-media.component';
import { SchoolAccountDetailsComponent } from './Components/school-account-details/school-account-details.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { SelectGroupsComponent } from './Components/select-groups/select-groups.component';
import { AccountUserComponent } from './Components/account-user/account-user.component';
import { DeleteStudentComponent } from './Components/delete-student/delete-student.component';
import { LocationComponent } from './Components/location/location.component';
import { StudentPasswordComponent } from './Components/student-password/student-password.component';
import { EditSupervisorPopUpComponent } from './Components/edit-supervisor-pop-up/edit-supervisor-pop-up.component';
import { SupervisorProfileComponent } from './Components/supervisor-profile/supervisor-profile.component';
import { TrackingAllComponent } from './Components/tracking-all/tracking-all.component';
import { DetailsStudentComponent } from './Components/details-student/details-student.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TestComponent } from './Components/test/test.component';
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
    AbsenceListComponent,
    AddAbsenceOrderComponent,
    TripsAndGroupsComponent,
    NewTripGroupComponent,
    ChangeSupervisorPopUpComponent,
    AddNewStudentToGroupPopUpComponent,
    NotificationsComponent,
    NewNotificationComponent,
    ShowNotificationComponent,
    DeliveryComponent,
    SendDialogComponent,
    DoneDeliveryComponent,
    AdsComponent,
    NewAdsComponent,
    DetailsAdsComponent,
    ChangePasswordComponent,
    SocialMediaComponent,
    SchoolAccountDetailsComponent,
    SelectGroupsComponent,
    AccountUserComponent,
    DeleteStudentComponent,
    LocationComponent,
    StudentPasswordComponent,
    EditSupervisorPopUpComponent,
    SupervisorProfileComponent,
    TrackingAllComponent,
    DetailsStudentComponent,
    TestComponent
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
    EditorModule,
    MatAutocompleteModule,
    DragDropModule,
    OverlayModule,
    PortalModule,
    DragDropModule,
    OverlayModule,
    PortalModule,    
    SlickCarouselModule
  ]
})
export class SchoolsModuleModule { }
