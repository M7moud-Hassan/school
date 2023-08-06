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
import { AgentAddNewAdsComponent } from './Components/agent-add-new-ads/agent-add-new-ads.component';
import { AgentAdsListComponent } from './Components/agent-ads-list/agent-ads-list.component';
import { AgentNotificationListComponent } from './Components/agent-notification-list/agent-notification-list.component';
import { AgentAddNewNotificationComponent } from './Components/agent-add-new-notification/agent-add-new-notification.component';
import { AgentSupportListComponent } from './Components/agent-support-list/agent-support-list.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:AgentHomePageComponent},
  {path:'change-password',component:AgentChangePasswordComponent},
  {path:'agent-profile',component:AgentProfileComponent},
  {path:'speed-notification',component:AgentSpeedNotificationComponent},

  {path:'users',component:AgentUsersComponent},
  {path:'add-new-user',component:AgentAddNewUserComponent},

  {path:'add-new-subscriber',component:AgentAddNewSubscribersComponent},
  {path:'subscribers-list',component:AgentSubscribersListComponent},

  {path:'advertisement-list',component:AgentAdsListComponent},
  {path:'add-new-advertisement',component:AgentAddNewAdsComponent},

  {path:'notification-list',component:AgentNotificationListComponent},
  {path:'add-new-notification',component:AgentAddNewNotificationComponent},
  
  {path:'support-list',component:AgentSupportListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentModuleRoutingModule { }
