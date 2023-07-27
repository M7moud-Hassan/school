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
    DetailsImgDriverComponent
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
