import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared-module/Components/main-layout/main-layout.component';
import { WelcomePageComponent } from './shared-module/Components/welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/welcome',pathMatch:'full'},
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
