import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentHomePageComponent } from './Components/agent-home-page/agent-home-page.component';
import { AgentChangePasswordComponent } from './Components/agent-change-password/agent-change-password.component';
import { AgentProfileComponent } from './Components/agent-profile/agent-profile.component';
import { AgentSpeedNotificationComponent } from './Components/agent-speed-notification/agent-speed-notification.component';
import { AgentUsersComponent } from './Components/agent-users/agent-users.component';
import { AgentAddNewUserComponent } from './Components/agent-add-new-user/agent-add-new-user.component';
import { AgentAddNewSubscribersComponent } from './Components/agent-add-new-subscribers/agent-add-new-subscribers.component';
import { AgentSubscribersListComponent } from './Components/agent-subscribers-list/agent-subscribers-list.component';

const routes: Routes = [
  {path:'home',component:AgentHomePageComponent},
  {path:'change-password',component:AgentChangePasswordComponent},
  {path:'agent-profile',component:AgentProfileComponent},
  {path:'speed-notification',component:AgentSpeedNotificationComponent},
  {path:'users',component:AgentUsersComponent},
  {path:'add-new-user',component:AgentAddNewUserComponent},
  {path:'add-new-subscriber',component:AgentAddNewSubscribersComponent},
  {path:'subscribers-list',component:AgentSubscribersListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentModuleRoutingModule { }
