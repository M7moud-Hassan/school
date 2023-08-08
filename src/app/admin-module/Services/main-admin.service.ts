import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminUsersService } from './admin-users.service';
import { AdminHomeService } from './admin-home.service';
import { ProxiesService } from './proxies.service';
import { ProxyPageService } from './proxy-page.service';
import { UserSystemService } from './user-system.service';
import { SubscriptionsService } from './subscriptions.service';
import { AdminManagementService } from './admin-management.service';
import { AdminContentManagementService } from './admin-content-management.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MainAdminService {

  constructor(
    private _formBuilder:FormBuilder,
    private _dialog: MatDialog,
    private _router: Router,
    private _location:Location,
    private _adminUsersService: AdminUsersService,
    private _adminHomeService:AdminHomeService,
    private _adminProxiesService:ProxiesService,
    private _adminProxyPageService:ProxyPageService,
    private _adminUsersSystem:UserSystemService,
    private _adminSubscriptions:SubscriptionsService,
    private _adminManagementService:AdminManagementService,
    private _adminContentManagementService:AdminContentManagementService,
    ){}
get adminProxyPageService():ProxyPageService{
  return this._adminProxyPageService;
  
}
get adminUserssystem():UserSystemService{
  return this._adminUsersSystem;
}
    get formBuilder():FormBuilder{
      return this._formBuilder;
    }
    get dialog():MatDialog{
      return this._dialog;
    }
    get router():Router{
      return this._router;
    }
    get adminUsersService():AdminUsersService{
      return this._adminUsersService;
    }
    get adminHomeService():AdminHomeService{
      return this._adminHomeService
    }
    get adminProxiesService():ProxiesService{
      return this._adminProxiesService
    }
    get adminSubscriptions():SubscriptionsService{
      return this._adminSubscriptions;
    }
    get adminManagementService():AdminManagementService{
      return this._adminManagementService;
    }
    get adminContentManagementService():AdminContentManagementService{
      return this._adminContentManagementService;
    }




    back(){
      this._location.back();
    }
    printFormValues(myForm:FormGroup): void {
      let  i = 0;
      let displayedValues:String = "";
      for (const controlName in myForm.controls) {
        i++;
        if (myForm.controls.hasOwnProperty(controlName)) {
          displayedValues += `${i} - ${controlName}: ${myForm.controls[controlName].value} \n`;
          console.log(`${controlName}: ${myForm.controls[controlName].value}`);
        }
      }
      alert(displayedValues);
    }
}
