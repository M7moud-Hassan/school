import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { subscriptionsListModel } from '../../Services/agent-subscription.service';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { MainAgentService } from '../../Services/main-agent.service';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-agent-subscribers-list',
  templateUrl: './agent-subscribers-list.component.html',
  styleUrls: ['./agent-subscribers-list.component.css']
})
export class AgentSubscribersListComponent implements OnInit {
  childrenNumber: any = [...Array(11).keys()].splice(1, 10);
  subscriptionsList:subscriptionsListModel[]=[];
  isSchoolAccountDropdownVisible: boolean = false;
  pageNo: number = 1;
  pageSize: number = 10;
  total: number = this.subscriptionsList.length;
  selectAll: boolean = false;
  detailsVisible: boolean[] = [false, false, false];
  overlayRef: OverlayRef | null = null;
  
  constructor(private service:MainAgentService,private overlay: Overlay,private overlayPositionBuilder: OverlayPositionBuilder,private viewContainerRef: ViewContainerRef) {}
  
  @ViewChild('trigger') trigger: any;
  @ViewChild('overlayTemplate', { static: false }) overlayTemplate!: TemplateRef<any>;

  ngOnInit(): void {
  this.getParentList();
  this.total = this.subscriptionsList.length;
  }
  getParentList(){
    this.subscriptionsList = this.service.agentSubscriptionService.getSubscribersList();
  }
  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSelectAll() {
    this.subscriptionsList.forEach(e => e.isSelected = this.selectAll);
  }
  checkBoxChange() {
    if (this.isAllCheckboxSelected()) this.selectAll = true;
    else this.selectAll = false;
  }
  isAllCheckboxSelected() {
    return this.subscriptionsList.every(e => e.isSelected == true);
  }
  get getAllSelectedItems() {
    return this.subscriptionsList.filter(e => e.isSelected);
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