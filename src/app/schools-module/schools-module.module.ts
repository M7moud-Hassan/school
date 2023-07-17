import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsModuleRoutingModule } from './schools-module-routing.module';
import { SchoolsLayoutComponent } from './Components/schools-layout/schools-layout.component';
import { SchoolsHomePageComponent } from './Components/schools-home-page/schools-home-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DilaogContactComponent } from './Components/dilaog-contact/dilaog-contact.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {NgxPaginationModule} from 'ngx-pagination';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { NewPasswordComponent } from './Components/new-password/new-password.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ActivitiesComponent } from './Components/activities/activities.component';
import { GroupsComponent } from './Components/groups/groups.component';
import { ParentsComponent } from './Components/parents/parents.component';
import {MatTableModule} from '@angular/material/table';
import { TestTableComponent } from './Components/test-table/test-table.component';

@NgModule({
  declarations: [
    SchoolsLayoutComponent,
    SchoolsHomePageComponent,
    LoginComponent,
    RegisterComponent,
    DilaogContactComponent,
    ResetPasswordComponent,
    NewPasswordComponent,
    HomePageComponent,
    ActivitiesComponent,
    GroupsComponent,
    ParentsComponent,
    TestTableComponent,
  ],
  imports: [
    CommonModule,
    SchoolsModuleRoutingModule,
    SharedModuleModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    NgxPaginationModule,
    MatTableModule
  ]
})
export class SchoolsModuleModule { }
