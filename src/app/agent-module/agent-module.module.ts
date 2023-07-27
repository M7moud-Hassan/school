import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentModuleRoutingModule } from './agent-module-routing.module';
import { AgentHomePageComponent } from './Components/agent-home-page/agent-home-page.component';
import { AgentChangePasswordComponent } from './Components/agent-change-password/agent-change-password.component';
import { AgentProfileComponent } from './Components/agent-profile/agent-profile.component';
import { AgentSpeedNotificationComponent } from './Components/agent-speed-notification/agent-speed-notification.component';
import { AgentSpeedNotificationPopUpComponent } from './Components/agent-speed-notification-pop-up/agent-speed-notification-pop-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import {NgxPaginationModule} from 'ngx-pagination';
import { AgentUsersComponent } from './Components/agent-users/agent-users.component';
import { AgentUsersWarningPopUpComponent } from './Components/agent-users-warning-pop-up/agent-users-warning-pop-up.component';
import { AgentAddNewUserComponent } from './Components/agent-add-new-user/agent-add-new-user.component';
import { AgentAddNewSubscribersComponent } from './Components/agent-add-new-subscribers/agent-add-new-subscribers.component';
import { AgentSubscribersListComponent } from './Components/agent-subscribers-list/agent-subscribers-list.component';
import { AgentExtendSubscriptionPopUpComponent } from './Components/agent-extend-subscription-pop-up/agent-extend-subscription-pop-up.component';
import { AgentSchoolLocationPopUpComponent } from './Components/agent-school-location-pop-up/agent-school-location-pop-up.component';


@NgModule({
  declarations: [
    AgentHomePageComponent,
    AgentChangePasswordComponent,
    AgentProfileComponent,
    AgentSpeedNotificationComponent,
    AgentSpeedNotificationPopUpComponent,
    AgentUsersComponent,
    AgentUsersWarningPopUpComponent,
    AgentAddNewUserComponent,
    AgentAddNewSubscribersComponent,
    AgentSubscribersListComponent,
    AgentExtendSubscriptionPopUpComponent,
    AgentSchoolLocationPopUpComponent,
  ],
  imports: [
    CommonModule,
    AgentModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    NgxPaginationModule
    // SharedModuleModule
  ]
})
export class AgentModuleModule { }
