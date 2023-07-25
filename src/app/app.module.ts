import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { SideMenuComponent } from './Layout/side-menu/side-menu.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { AgentLayoutComponent } from './Layout/agent-layout/agent-layout.component';
import { AgentSideMenuComponent } from './Layout/agent-side-menu/agent-side-menu.component';
import { AgentNavbarComponent } from './Layout/agent-navbar/agent-navbar.component';
import { AdminNavbarComponent } from './Layout/admin-navbar/admin-navbar.component';
import { AdminSideMenuComponent } from './Layout/admin-side-menu/admin-side-menu.component';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SideMenuComponent,
    NavbarComponent,
    AgentLayoutComponent,
    AgentSideMenuComponent,
    AgentNavbarComponent,
    AdminNavbarComponent,
    AdminSideMenuComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    BrowserAnimationsModule,
    NgxPaginationModule
    
  ],
  providers: [
    AppComponent,
    ComponentLoaderFactory,
    PositioningService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
