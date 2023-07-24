import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupPopupComponent } from '../group-popup/group-popup.component';
import { DetailsAskComponent } from '../details-ask/details-ask.component';
import { ShowNotificationComponent } from '../show-notification/show-notification.component';
import { SendDialogComponent } from '../send-dialog/send-dialog.component';
import { notificationListModel } from '../../Services/notification.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['../parents-list/parents-list.component.css','./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  isSchoolAccountDropdownVisible:boolean = false;
  notificationList:notificationListModel[]=[];
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.notificationList.length;
  detailsVisible: boolean[] = [false, false, false];

  constructor(private service:MainService) {}
  
  ngOnInit(): void {
    this.getNotificationList();
    this.total =  this.notificationList.length;
  }
  getNotificationList(){
    this.notificationList = this.service.notificationService.getNotificationList();
  }

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }
  openSelectGroupDialog(){
    this.openDialog();
  }
  openDialog() {
    const dialogRef = this.service.dialog.open(GroupPopupComponent, {
      width: '50%',
      direction:'rtl',
      panelClass:'custom-dialog-container',
      data: { name: 'Angular Material' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }

  openDialogDetails(){
    this.service.dialog.open(ShowNotificationComponent,{
      width: '50%',
    })
  }

  openDialogSend(){
    this.service.dialog.open(SendDialogComponent,{
      width: '50%',
     
    })
  }
}
