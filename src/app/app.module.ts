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
import { Section1BusWayComponent } from './appComponents/section1-bus-way/section1-bus-way.component';
import { Section2FeaturesComponent } from './appComponents/section2-features/section2-features.component';
import { Section3TargetersComponent } from './appComponents/section3-targeters/section3-targeters.component';
import { Section4HowWeWorkComponent } from './appComponents/section4-how-we-work/section4-how-we-work.component';
import { Section5DownloadAppComponent } from './appComponents/section5-download-app/section5-download-app.component';
import { Section6TrustedPartnersComponent } from './appComponents/section6-trusted-partners/section6-trusted-partners.component';
import { HomeFooterComponent } from './appComponents/home-footer/home-footer.component';
import { HomeNavbarComponent } from './appComponents/home-navbar/home-navbar.component';
import { TermsAndConditionsComponent } from './appComponents/terms-and-conditions/terms-and-conditions.component';
import { SchoolHomePageComponent } from './appComponents/school-home-page/school-home-page.component';
import { Section7ContactUsComponent } from './appComponents/section7-contact-us/section7-contact-us.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentsComponent } from './appComponents/agents/agents.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AgentHomeComponent } from './appComponents/agent-home/agent-home.component';

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
    AdminLayoutComponent,
    Section1BusWayComponent,
    Section2FeaturesComponent,
    Section3TargetersComponent,
    Section4HowWeWorkComponent,
    Section5DownloadAppComponent,
    Section6TrustedPartnersComponent,
    HomeFooterComponent,
    HomeNavbarComponent,
    TermsAndConditionsComponent,
    SchoolHomePageComponent,
    Section7ContactUsComponent,
    AgentsComponent,
    AgentHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgxIntlTelInputModule ,
    ReactiveFormsModule,
    FormsModule,
    SlickCarouselModule
    
  ],
  providers: [
    AppComponent,
    ComponentLoaderFactory,
    PositioningService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
