import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { LoginComponent } from './schools-module/Components/login/login.component';
import { RegisterComponent } from './schools-module/Components/register/register.component';
import { ResetPasswordComponent } from './schools-module/Components/reset-password/reset-password.component';
import { HomePageComponent } from './schools-module/Components/home-page/home-page.component';
import { NewPasswordComponent } from './schools-module/Components/new-password/new-password.component';
import { AgentLayoutComponent } from './Layout/agent-layout/agent-layout.component';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout.component';
import { SchoolHomePageComponent } from './appComponents/school-home-page/school-home-page.component';
import { TermsAndConditionsComponent } from './appComponents/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {path:'home-page',component:SchoolHomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:RegisterComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'new-password',component:NewPasswordComponent},
  {path:'terms-and-conditions',component:TermsAndConditionsComponent},

  {path:'',component:MainLayoutComponent,children:[
    {path:'home',component:HomePageComponent},
    {path:'school',loadChildren:()=>import('./schools-module/schools-module.module').then(m=>m.SchoolsModuleModule)},
  ]},
  {path:'',component:AgentLayoutComponent,children:[
    {path:'agent',loadChildren:()=>import('./agent-module/agent-module.module').then(m=>m.AgentModuleModule)},
  ]},
  {path:'',component:AdminLayoutComponent,children:[
    {path:'admin',loadChildren:()=>import('./admin-module/admin-module.module').then(m=>m.AdminModuleModule)},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
