import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { WelcomePageComponent } from './Layout/welcome-page/welcome-page.component';
import { LoginComponent } from './schools-module/Components/login/login.component';
import { RegisterComponent } from './schools-module/Components/register/register.component';
import { ResetPasswordComponent } from './schools-module/Components/reset-password/reset-password.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'welcome',component:WelcomePageComponent},
    {path:'school',loadChildren:()=>import('./schools-module/schools-module.module').then(m=>m.SchoolsModuleModule)},
    {path:'agent',loadChildren:()=>import('./schools-module/schools-module.module').then(m=>m.SchoolsModuleModule)},
    {path:'admin',loadChildren:()=>import('./admin-module/admin-module.module').then(m=>m.AdminModuleModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
