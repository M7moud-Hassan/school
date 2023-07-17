import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolsLayoutComponent } from './Components/schools-layout/schools-layout.component';
import { SchoolsHomePageComponent } from './Components/schools-home-page/schools-home-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { WelcomePageComponent } from '../Layout/welcome-page/welcome-page.component';
import { ParentsComponent } from './Components/parents/parents.component';
import { TestTableComponent } from './Components/test-table/test-table.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'parents',component:ParentsComponent},
  {path:'table',component:TestTableComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule
  ],
  exports: [RouterModule],
})
export class SchoolsModuleRoutingModule { }
