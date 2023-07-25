import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentHomePageComponent } from './Components/agent-home-page/agent-home-page.component';

const routes: Routes = [
  {path:'home',component:AgentHomePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentModuleRoutingModule { }
