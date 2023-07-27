import { Component, OnInit } from '@angular/core';
import { agentNotificationListModel } from '../../Services/agent-notification.service';
import { MainAgentService } from '../../Services/main-agent.service';

@Component({
  selector: 'app-agent-notification-list',
  templateUrl: './agent-notification-list.component.html',
  styleUrls: ['./agent-notification-list.component.css']
})
export class AgentNotificationListComponent implements OnInit {
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

