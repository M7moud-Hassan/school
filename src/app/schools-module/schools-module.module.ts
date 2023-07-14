import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsModuleRoutingModule } from './schools-module-routing.module';
import { SchoolsLayoutComponent } from './Components/schools-layout/schools-layout.component';
import { SchoolsHomePageComponent } from './Components/schools-home-page/schools-home-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    SchoolsLayoutComponent,
    SchoolsHomePageComponent
  ],
  imports: [
    CommonModule,
    SchoolsModuleRoutingModule,
    SharedModuleModule
  ]
})
export class SchoolsModuleModule { }
