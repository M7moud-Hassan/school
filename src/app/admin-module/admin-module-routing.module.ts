import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePageComponent } from './Components/admin-home-page/admin-home-page.component';
import { ProxiesComponent } from './Components/proxies/proxies.component';
import { ProxyPageComponent } from './Components/proxy-page/ProxyPageComponent';
import { AddSchoolProxyComponent } from './Components/add-school-proxy/add-school-proxy.component';
import { UsersSystemComponent } from './Components/users-system/users-system.component';
import { AddUsersComponent } from './Components/add-users/add-users.component';
import { SubscriptionsComponent } from './Components/subscriptions/subscriptions.component';
import { TripsActiveComponent } from './Components/trips-active/trips-active.component';
import { ContentManagementComponent } from './Components/content-management/content-management.component';

const routes: Routes = [
  {path:'home',component:AdminHomePageComponent},
  {path:'proxies',component:ProxiesComponent},
  {path:'proxy-page',component:ProxyPageComponent},
  {path:'add-school-proxy',component:AddSchoolProxyComponent},
  {path:'users-system',component:UsersSystemComponent},
  {path:'add-user',component:AddUsersComponent},
  {path:'subscriptions',component:SubscriptionsComponent},
  {path:'trips-active',component:TripsActiveComponent},
  {path:'content-management',component:ContentManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
