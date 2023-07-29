import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminHomePageComponent } from './Components/admin-home-page/admin-home-page.component';
import { ActivitiesComponent } from './Components/activities/activities.component';
import { ProxiesComponent } from './Components/proxies/proxies.component';
import { ProxyPageComponent } from './Components/proxy-page/ProxyPageComponent';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { DialogSupervisorsComponent } from './Components/dialog-supervisors/dialog-supervisors.component';
import { AddSchoolProxyComponent } from './Components/add-school-proxy/add-school-proxy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { EditorModule } from '@tinymce/tinymce-angular';
import { UsersSystemComponent } from './Components/users-system/users-system.component';
import { AddUsersComponent } from './Components/add-users/add-users.component';
import { SubscriptionsComponent } from './Components/subscriptions/subscriptions.component';
import { TripsActiveComponent } from './Components/trips-active/trips-active.component';
import { ContentManagementComponent } from './Components/content-management/content-management.component';
import { DetailsImgComponent } from './Components/details-img/details-img.component';
import { TargetedsComponent } from './Components/targeteds/targeteds.component';
import { MainContentComponent } from './Components/main-content/main-content.component';
import { DetailsImgDriverComponent } from './Components/details-img-driver/details-img-driver.component';
import { AdminManagementListComponent } from './Components/admin-management-list/admin-management-list.component';
import { AdminManagementInformationSystemComponent } from './Components/admin-management-information-system/admin-management-information-system.component';
import { AdminManagementComponent } from './Components/admin-management/admin-management.component';
import { AdminContentManagementAdsComponent } from './Components/admin-content-management-ads/admin-content-management-ads.component';
import { AdminContentManagementContactUsComponent } from './Components/admin-content-management-contact-us/admin-content-management-contact-us.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AdminContentManagementContactUs2Component } from './Components/admin-content-management-contact-us2/admin-content-management-contact-us2.component';
import { AdminContentManagementHowWeWorkComponent } from './Components/admin-content-management-how-we-work/admin-content-management-how-we-work.component';
import { AdminContentManagementPartnersComponent } from './Components/admin-content-management-partners/admin-content-management-partners.component';
import { AdminContentManagementFeaturesComponent } from './Components/admin-content-management-features/admin-content-management-features.component';

@NgModule({
  declarations: [
    AdminHomePageComponent,
    ActivitiesComponent,
    ProxiesComponent,
    ProxyPageComponent,
    DialogSupervisorsComponent,
    AddSchoolProxyComponent,
    UsersSystemComponent,
    AddUsersComponent,
    SubscriptionsComponent,
    TripsActiveComponent,
    ContentManagementComponent,
    DetailsImgComponent,
    TargetedsComponent,
    MainContentComponent,
    DetailsImgDriverComponent,
    AdminManagementListComponent,
    AdminManagementInformationSystemComponent,
    AdminManagementComponent,
    AdminContentManagementAdsComponent,
    AdminContentManagementContactUsComponent,
    AdminContentManagementContactUs2Component,
    AdminContentManagementHowWeWorkComponent,
    AdminContentManagementPartnersComponent,
    AdminContentManagementFeaturesComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    EditorModule
  ]
})
export class AdminModuleModule { }
