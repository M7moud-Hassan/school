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


@NgModule({
  declarations: [
    AgentHomePageComponent,
    AgentChangePasswordComponent,
    AgentProfileComponent,
    AgentSpeedNotificationComponent,
    AgentSpeedNotificationPopUpComponent,
  ],
  imports: [
    CommonModule,
    AgentModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule
    // SharedModuleModule
  ]
})
export class AgentModuleModule { }
