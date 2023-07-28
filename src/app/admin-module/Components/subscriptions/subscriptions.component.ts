import { Component,OnInit,TemplateRef,ViewChild,ViewContainerRef } from '@angular/core';
import { studentModel } from 'src/app/schools-module/Services/student.service';
import { AdminHomeService } from '../../Services/admin-home.service';
import { MainAdminService } from '../../Services/main-admin.service';
import { shareReplay } from 'rxjs';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['../../../schools-module/Components/student-list/student-list.component.css', '../../../schools-module/Components/parents-list/parents-list.component.css','./subscriptions.component.css']
})
export class SubscriptionsComponent {
  isSchoolAccountDropdownVisible:boolean = false;
  users:studentModel[]=[]
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.users.length;
  overlayRef: OverlayRef | null = null;
  selectAll:boolean = false;
constructor(private service:MainAdminService,private overlay: Overlay,private overlayPositionBuilder: OverlayPositionBuilder,private viewContainerRef: ViewContainerRef) {
  
}
@ViewChild('trigger') trigger: any;
@ViewChild('overlayTemplate', { static: false }) overlayTemplate!: TemplateRef<any>;
  ngOnInit(): void {
   this.getAllUsers();
   this.total=this.users.length;
  }
  getAllUsers(){
    this.users= this.service.adminSubscriptions.getUsers();
  }
  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
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
  
}
