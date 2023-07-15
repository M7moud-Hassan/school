import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  exports:[
    // CommonModule
  ],
  
})
export class SharedModuleModule { }
