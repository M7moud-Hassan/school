import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-content-management-ads',
  templateUrl: './admin-content-management-ads.component.html',
  styleUrls: ['../content-management/content-management.component.css','./admin-content-management-ads.component.css']
})
export class AdminContentManagementAdsComponent {
  isMainAdsShown:boolean = true;
}
