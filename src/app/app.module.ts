import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { SideMenuComponent } from './Layout/side-menu/side-menu.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { WelcomePageComponent } from './Layout/welcome-page/welcome-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SideMenuComponent,
    FooterComponent,
    NavbarComponent,
    WelcomePageComponent
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
