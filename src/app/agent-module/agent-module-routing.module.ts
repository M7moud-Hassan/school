import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentLayoutComponent } from './Components/agent-layout/agent-layout.component';
import { AgentHomePageComponent } from './Components/agent-home-page/agent-home-page.component';

const routes: Routes = [
  {path:'',component:AgentLayoutComponent,children:[
    {path:'home',component:AgentHomePageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentModuleRoutingModule { }
