import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { AdminHomePageComponent } from './Components/admin-home-page/admin-home-page.component';

const routes: Routes = [
  {path:'',component:AdminLayoutComponent,children:[
    {path:'home',component:AdminHomePageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
