import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, HostListener, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
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
  student_data:studentModel[]  = [];
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.student_data.length;
  overlayRef: OverlayRef | null = null;

  constructor(private service:MainService,private overlay: Overlay,private overlayPositionBuilder: OverlayPositionBuilder,private viewContainerRef: ViewContainerRef) {}
 
  @ViewChild('trigger') trigger: any;
  @ViewChild('overlayTemplate', { static: false }) overlayTemplate!: TemplateRef<any>;
  
  ngOnInit(): void {
    this.getAllStudents();
    this.total =  this.student_data.length;
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
      height:'70%',
      direction:'rtl',
      panelClass:'custom-dialog-container',
    });
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
  deleteDialog(){
    let dialogOpened = false;
    this.student_data.forEach(element => {
      if (element.isSelected && !dialogOpened) {
        const dialogRef = this.service.dialog.open(DeleteStudentComponent, {
          width: '50%',
        });
        dialogOpened = true;
      }
    });
   
  }
  locationDialog(){
    const dialogRef = this.service.dialog.open(LocationComponent, {
      width: '50%',
    });
  }
  passwordStudentDialog(){
    const dialogRef = this.service.dialog.open(StudentPasswordComponent, {
      width: '30%',
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


  searchKeyword:any='';
  filterType:any = 'name';
  date:any='';
  isActive:any="true";
  filterData(){
    this.getAllStudents();
    if(this.filterType == 'name'){
      this.student_data = this.student_data.filter(x=>x.name.toLowerCase().includes(this.searchKeyword.toLowerCase())) ;
    } 
    if(this.filterType == 'number'){
      this.student_data = this.student_data.filter(x=>x.userNumber.includes(this.searchKeyword)) ;
    }
    if(this.date != ''){
      this.student_data = this.student_data.filter(x=>x.lastActiveDate == this.date) ;
    }
    if(this.isActive == "false"){
      this.student_data = this.student_data.filter(x=>x.isActive == false) ;
    }
    if(this.isActive == "true"){
      this.student_data = this.student_data.filter(x=>x.isActive == true) ;
    }
    this.total =  this.student_data.length;
  }
}