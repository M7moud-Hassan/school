import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentModuleRoutingModule } from './agent-module-routing.module';
import { AgentHomePageComponent } from './Components/agent-home-page/agent-home-page.component';


@NgModule({
  declarations: [
    AgentHomePageComponent,
  ],
  imports: [
    CommonModule,
    AgentModuleRoutingModule,
    // SharedModuleModule
  ]
})
export class AgentModuleModule { }
