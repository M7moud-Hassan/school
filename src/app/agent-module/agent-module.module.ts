import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentModuleRoutingModule } from './agent-module-routing.module';
import { AgentHomePageComponent } from './Components/agent-home-page/agent-home-page.component';
import { AgentLayoutComponent } from './Components/agent-layout/agent-layout.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    AgentHomePageComponent,
    AgentLayoutComponent
  ],
  imports: [
    CommonModule,
    AgentModuleRoutingModule,
    SharedModuleModule
  ]
})
export class AgentModuleModule { }
