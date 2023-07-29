import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['../content-management/content-management.component.css','./admin-management.component.css']
})
export class AdminManagementComponent {
   isListShown:boolean = false;
}
