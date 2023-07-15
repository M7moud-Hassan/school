import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { AdminHomePageComponent } from './Components/admin-home-page/admin-home-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminHomePageComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    // SharedModuleModule
  ]
})
export class AdminModuleModule { }
