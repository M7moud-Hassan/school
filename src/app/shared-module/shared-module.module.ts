import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,
    WelcomePageComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],
  exports:[
    MainLayoutComponent
  ]
})
export class SharedModuleModule { }
