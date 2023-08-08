import { Component } from '@angular/core';
import { MainAdminService } from '../../Services/main-admin.service';

@Component({
  selector: 'app-admin-content-management-ads',
  templateUrl: './admin-content-management-ads.component.html',
  styleUrls: ['../content-management/content-management.component.css','./admin-content-management-ads.component.css']
})
export class AdminContentManagementAdsComponent {
  isMainAdsShown:boolean = true;
  constructor(private service:MainAdminService){}
  back(){
    this.service.back();
  }
}
