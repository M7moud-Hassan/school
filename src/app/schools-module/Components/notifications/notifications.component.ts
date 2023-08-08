import { Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupPopupComponent } from '../group-popup/group-popup.component';
import { DetailsAskComponent } from '../details-ask/details-ask.component';
import { ShowNotificationComponent } from '../show-notification/show-notification.component';
import { SendDialogComponent } from '../send-dialog/send-dialog.component';
import { notificationListModel } from '../../Services/notification.service';
import { MainService } from '../../Services/main.service';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

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

  constructor(private service:MainService,private elementRef:ElementRef,
    private overlay: Overlay,private overlayPositionBuilder: OverlayPositionBuilder,private viewContainerRef: ViewContainerRef){}
  
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

  searchKeyword:any='';
  filterType:any = 'name';
  date:any='';
  filterData(){
    this.getNotificationList();
    if(this.filterType == 'name'){
      this.notificationList = this.notificationList.filter(x=>x.title.toLowerCase().includes(this.searchKeyword.toLowerCase())) ;
    } 
    if(this.date != ''){
      this.notificationList = this.notificationList.filter(x=>x.recievedDate == this.date) ;
    }
    this.total =  this.notificationList.length;
  }

  overlayRef: OverlayRef | null = null;
  @ViewChild('trigger') trigger: any;
  @ViewChild('overlayTemplate', { static: false }) overlayTemplate!: TemplateRef<any>;
  showOverlay() {
    this.isSchoolAccountDropdownVisible = !this.isSchoolAccountDropdownVisible;
    if (!this.overlayRef) {
      const positionStrategy = this.overlayPositionBuilder
        .flexibleConnectedTo(this.trigger.nativeElement)
        .withPositions([{ originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' }]);
      this.overlayRef = this.overlay.create({ positionStrategy });
    }

    const portal = new TemplatePortal(this.overlayTemplate, this.viewContainerRef);
    this.overlayRef.attach(portal);
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent): void {
    console.log('Global click event occurred using HostListener!');
    console.log(event.target);

    
    const list1Element = document.getElementById('drop_filter');
    const dropMenu=document.getElementById('dropMenu');

    if (
  event.target !== list1Element &&
  ((event.target as HTMLElement).parentNode?.parentNode?.parentNode !== dropMenu
  &&
  ((event.target as HTMLElement).parentNode?.parentNode?.parentNode?.parentNode !== dropMenu))
) {
  console.log((event.target as HTMLElement).parentNode?.parentNode?.parentNode)
  this.isSchoolAccountDropdownVisible = false;
}
  }
}
