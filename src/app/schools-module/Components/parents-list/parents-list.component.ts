import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { parentListModel } from '../../Services/parent.service';

@Component({
  selector: 'app-parents-list',
  templateUrl: './parents-list.component.html',
  styleUrls: ['./parents-list.component.css']
})
export class ParentsListComponent implements OnInit {
  childrenNumber: any = [...Array(11).keys()].splice(1, 10);
  parents_data:parentListModel[]=[];
  isSchoolAccountDropdownVisible: boolean = false;
  pageNo: number = 1;
  pageSize: number = 10;
  total: number = this.parents_data.length;
  selectAll: boolean = false;
  detailsVisible: boolean[] = [false, false, false];
  overlayRef: OverlayRef | null = null;

  constructor(private service:MainService,private overlay: Overlay,private overlayPositionBuilder: OverlayPositionBuilder,private viewContainerRef: ViewContainerRef) {}
  
  @ViewChild('trigger') trigger: any;
  @ViewChild('overlayTemplate', { static: false }) overlayTemplate!: TemplateRef<any>;

  ngOnInit(): void {
  this.getParentList();
  this.total = this.parents_data.length;
  }
  getParentList(){
    this.parents_data = this.service.parentService.getParentList();
  }
  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSelectAll() {
    this.parents_data.forEach(e => e.isSelected = this.selectAll);
  }
  checkBoxChange() {
    if (this.isAllCheckboxSelected()) this.selectAll = true;
    else this.selectAll = false;
  }
  isAllCheckboxSelected() {
    return this.parents_data.every(e => e.isSelected == true);
  }
  get getAllSelectedItems() {
    return this.parents_data.filter(e => e.isSelected);
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