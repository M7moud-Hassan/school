import { Component, OnInit } from '@angular/core';
import { ProxyPageData } from '../../Services/proxy-page.service';
import { MainAdminService } from '../../Services/main-admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogSupervisorsComponent } from '../dialog-supervisors/dialog-supervisors.component';


@Component({
  selector: 'app-proxy-page',
  templateUrl: './proxy-page.component.html',
  styleUrls: ['../../../schools-module/Components/student-list/student-list.component.css', '../../../schools-module/Components/parents-list/parents-list.component.css', './proxy-page.component.css']
})
export class ProxyPageComponent implements OnInit {
  pageNo: number = 1;
  pageSize: number = 10;
  school_data: ProxyPageData[] = [];
  total :number =  this.school_data.length;
  constructor(private service: MainAdminService,private dialog:MatDialog) {
  }
  ngOnInit(): void {
    this.getAllschools();
    this.total=this.school_data.length;
    console.log(this.total);
    
  }
  getAllschools() {
    this.school_data=this.service.adminProxyPageService.getAll();
    
  }
 openDialogSupervisors(){
  this.dialog.open(DialogSupervisorsComponent,
    {
      width:'50%'
    })
 }
}
