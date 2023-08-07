import { Component, OnInit } from '@angular/core';
import { agentNotificationListModel } from 'src/app/agent-module/Services/agent-notification.service';
import { MainAgentService } from 'src/app/agent-module/Services/main-agent.service';


@Component({
  selector: 'app-admin-notification-list',
  templateUrl: './admin-notification-list.component.html',
  styleUrls: ['./admin-notification-list.component.css']
})
export class AdminNotificationListComponent implements OnInit {
  isSchoolAccountDropdownVisible:boolean = false;
  notificationList:agentNotificationListModel[]=[];
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.notificationList.length;
  detailsVisible: boolean[] = [false, false, false];

  constructor(private service:MainAgentService) {}
  
  ngOnInit(): void {
    this.getNotificationList();
    this.total =  this.notificationList.length;
  }
  getNotificationList(){
    this.notificationList = this.service.agentNotificationService.getNotificationList();
  }

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }

}

