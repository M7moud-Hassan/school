import { Component, OnInit } from '@angular/core';
import { adminManagementListModel } from '../../Services/admin-management.service';
import { MainAdminService } from '../../Services/main-admin.service';

@Component({
  selector: 'app-admin-management-list',
  templateUrl: './admin-management-list.component.html',
  styleUrls: ['./admin-management-list.component.css']
})
export class AdminManagementListComponent implements OnInit {

  isSchoolAccountDropdownVisible:boolean = false;
  pageNo: number = 1;
  pageSize: number = 10;
  managementList:adminManagementListModel[]=[];
  total :number =  this.managementList.length;
  detailsVisible: boolean[] = [false, false, false];

  constructor(private service:MainAdminService){}
  ngOnInit(): void {
    this.getManagementList();
    this.total =  this.managementList.length;
  }

  getManagementList(){
  this.managementList = this.service.adminManagementService.getManagementList();
  }

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }
}