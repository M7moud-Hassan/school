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
import { AdminManagementListComponent } from './Components/admin-management-list/admin-management-list.component';
import { AdminManagementInformationSystemComponent } from './Components/admin-management-information-system/admin-management-information-system.component';
import { AdminManagementComponent } from './Components/admin-management/admin-management.component';

const routes: Routes = [
  {path:'home',component:AdminHomePageComponent},
  {path:'proxies',component:ProxiesComponent},
  {path:'proxy-page',component:ProxyPageComponent},
  {path:'add-school-proxy',component:AddSchoolProxyComponent},
  {path:'users-system',component:UsersSystemComponent},
  {path:'add-user',component:AddUsersComponent},
  {path:'subscriptions',component:SubscriptionsComponent},
  {path:'trips-active',component:TripsActiveComponent},
  {path:'admin-management',component:AdminManagementComponent},
  {path:'admin-management-list',component:AdminManagementListComponent},
  {path:'admin-management-information-system',component:AdminManagementInformationSystemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
