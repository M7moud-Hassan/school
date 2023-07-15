import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorService } from './Services/error-interceptor.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule,
    MatDialogModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  exports:[
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ]
  
})
export class SharedModuleModule { }
