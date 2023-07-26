import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { userListModel } from '../../Services/agent-users.service';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { MainAgentService } from '../../Services/main-agent.service';
import { AgentUsersWarningPopUpComponent } from '../agent-users-warning-pop-up/agent-users-warning-pop-up.component';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-agent-users',
  templateUrl: './agent-users.component.html',
  styleUrls: ['./agent-users.component.css']
})
export class AgentUsersComponent implements OnInit {
  isSchoolAccountDropdownVisible:boolean = false;
  selectAll:boolean = false;
  usersList:userListModel[] = [];
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.usersList.length;
  overlayRef: OverlayRef | null = null;

  constructor(private service:MainAgentService,private overlay: Overlay,private overlayPositionBuilder: OverlayPositionBuilder,private viewContainerRef: ViewContainerRef) {}
 
  @ViewChild('trigger') trigger: any;
  @ViewChild('overlayTemplate', { static: false }) overlayTemplate!: TemplateRef<any>;
  
  ngOnInit(): void {
    this.getAllStudents();
    this.total =  this.usersList.length;
  }
  getAllStudents(){
    this.usersList = this.service.agentUsersService.getUsersList();
  }

  detailsVisible: boolean[] = [false, false, false];

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSelectAll(){
    this.usersList.forEach(e=>e.isSelected=this.selectAll);
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
    return this.usersList.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.usersList.filter(e=>e.isSelected);
  }

  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }


  openWarningDialog(){
    const dialogRef = this.service.dialog.open(AgentUsersWarningPopUpComponent, {
      width: '30%',
      direction:'rtl',
      panelClass:'custom-dialog-container',
    });
  }

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

  hideOverlay() {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
