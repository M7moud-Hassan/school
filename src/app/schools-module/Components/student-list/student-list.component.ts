import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SelectGroupsComponent } from '../select-groups/select-groups.component';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';
import { LocationComponent } from '../location/location.component';
import { StudentPasswordComponent } from '../student-password/student-password.component';
import { MainService } from '../../Services/main.service';
import { studentModel } from '../../Services/student.service';
import { DetailsStudentComponent } from '../details-student/details-student.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css','../parents-list/parents-list.component.css']
})
export class StudentListComponent implements OnInit {
  isSchoolAccountDropdownVisible:boolean = false;
  selectAll:boolean = false;
  student_data:studentModel[] = [];
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.student_data.length;
  overlayRef: OverlayRef | null = null;

  constructor(private service:MainService,private overlay: Overlay,private overlayPositionBuilder: OverlayPositionBuilder,private viewContainerRef: ViewContainerRef) {}
 
  @ViewChild('trigger') trigger: any;
  @ViewChild('overlayTemplate', { static: false }) overlayTemplate!: TemplateRef<any>;
  
  ngOnInit(): void {
    this.getAllStudents();
  }
  getAllStudents(){
    this.student_data = this.service.studentService.getStudentList();
  }

  detailsVisible: boolean[] = [false, false, false];

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSelectAll(){
    this.student_data.forEach(e=>e.isSelected=this.selectAll);
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
    return this.student_data.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.student_data.filter(e=>e.isSelected);
  }

  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }

  openDialogSelectGroup(){
    const dialogRef = this.service.dialog.open(SelectGroupsComponent, {
      width: '50%',
    });
  }

  openDialogDetailsStudent(){
    const dialogRef = this.service.dialog.open(DetailsStudentComponent, {
      width: '50%',
    });
  }

  deleteDialog(){
    const dialogRef = this.service.dialog.open(DeleteStudentComponent, {
      width: '50%',
    });
  }
  locationDialog(){
    const dialogRef = this.service.dialog.open(LocationComponent, {
      width: '50%',
    });
  }
  passwordStudentDialog(){
    const dialogRef = this.service.dialog.open(StudentPasswordComponent, {
      width: '50%',
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