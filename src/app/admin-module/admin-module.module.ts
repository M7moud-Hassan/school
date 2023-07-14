import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { AdminHomePageComponent } from './Components/admin-home-page/admin-home-page.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminHomePageComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
