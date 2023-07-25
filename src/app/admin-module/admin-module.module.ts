import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminHomePageComponent } from './Components/admin-home-page/admin-home-page.component';


@NgModule({
  declarations: [
    AdminHomePageComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    // SharedModuleModule
  ]
})
export class AdminModuleModule { }
