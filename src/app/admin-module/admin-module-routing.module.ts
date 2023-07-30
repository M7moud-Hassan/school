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
import { AdminManagementListComponent } from './Components/admin-management-list/admin-management-list.component';
import { AdminManagementInformationSystemComponent } from './Components/admin-management-information-system/admin-management-information-system.component';
import { AdminManagementComponent } from './Components/admin-management/admin-management.component';
import { AdminContentManagementAdsComponent } from './Components/admin-content-management-ads/admin-content-management-ads.component';
import { AdminContentManagementContactUsComponent } from './Components/admin-content-management-contact-us/admin-content-management-contact-us.component';
import { AdminContentManagementContactUs2Component } from './Components/admin-content-management-contact-us2/admin-content-management-contact-us2.component';
import { AdminContentManagementHowWeWorkComponent } from './Components/admin-content-management-how-we-work/admin-content-management-how-we-work.component';
import { AdminContentManagementPartnersComponent } from './Components/admin-content-management-partners/admin-content-management-partners.component';
import { AdminContentManagementHomeComponent } from './Components/admin-content-management-home/admin-content-management-home.component';
import { AdminContentManagementPrivacyComponent } from './Components/admin-content-management-privacy/admin-content-management-privacy.component';
import { MainContentComponent } from './Components/main-content/main-content.component';
import { AddProxiyComponent } from './Components/add-proxiy/add-proxiy.component';
import { GroupsProxyComponent } from './Components/groups-proxy/groups-proxy.component';
import { AdminNotificationListComponent } from './Components/admin-notification-list/admin-notification-list.component';


const routes: Routes = [
  {path:'home',component:AdminHomePageComponent},
  {path:'proxies',component:ProxiesComponent},
  {path:'proxy-page',component:ProxyPageComponent},
  {path:'add-school-proxy',component:AddSchoolProxyComponent},
  {path:'add-proxy',component:AddProxiyComponent},
  {path:'proxy-groups',component:GroupsProxyComponent},
  {path:'users-system',component:UsersSystemComponent},
  {path:'add-user',component:AddUsersComponent},
  {path:'subscriptions',component:SubscriptionsComponent},
  {path:'notifications',component:AdminNotificationListComponent},
  {path:'trips-active',component:TripsActiveComponent},
  {path:'content-management',component:ContentManagementComponent},
  {path:'admin-management',component:AdminManagementComponent},
  {path:'admin-management-list',component:AdminManagementListComponent},
  {path:'admin-management-information-system',component:AdminManagementInformationSystemComponent},
  {path:'admin-content-management-ads',component:AdminContentManagementAdsComponent},
  {path:'admin-contenet-management-contact-us',component:AdminContentManagementContactUsComponent},
  {path:'admin-contenet-management-contact-us-2',component:AdminContentManagementContactUs2Component},
  {path:'admin-contenet-management-how-we-work',component:AdminContentManagementHowWeWorkComponent},
  {path:'admin-contenet-management-partners',component:AdminContentManagementPartnersComponent},
  {path:'admin-contenet-management-home',component:AdminContentManagementHomeComponent},
  {path:'admin-contenet-management-privacy',component:AdminContentManagementPrivacyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
