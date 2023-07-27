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
import { UsersSystemComponent } from './Components/users-system/users-system.component';
import { AddUsersComponent } from './Components/add-users/add-users.component';
import { SubscriptionsComponent } from './Components/subscriptions/subscriptions.component';
import { TripsActiveComponent } from './Components/trips-active/trips-active.component';
import { AdminManagementListComponent } from './Components/admin-management-list/admin-management-list.component';
import { AdminManagementInformationSystemComponent } from './Components/admin-management-information-system/admin-management-information-system.component';
import { AdminManagementComponent } from './Components/admin-management/admin-management.component';

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
    AdminManagementListComponent,
    AdminManagementInformationSystemComponent,
    AdminManagementComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
  ]
})
export class AdminModuleModule { }
