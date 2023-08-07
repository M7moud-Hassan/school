import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupPopupComponent } from '../group-popup/group-popup.component';
import { supervisorModel } from '../../Services/supervisor.service';
import { MainService } from '../../Services/main.service';
import { EditSupervisorPopUpComponent } from '../edit-supervisor-pop-up/edit-supervisor-pop-up.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisors-list',
  templateUrl: './supervisors-list.component.html',
  styleUrls: ['../parents-list/parents-list.component.css','./supervisors-list.component.css',]
})
export class SupervisorsListComponent implements OnInit {
  searchKeyword: any = '';
  filterType: any = 'name';
  date: any = '';
  isActive: any = "true";

  isSchoolAccountDropdownVisible:boolean = false;
  supervisor_data:supervisorModel[] = [];
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.supervisor_data.length;
  selectAll:boolean = false;
  detailsVisible: boolean[] = [false, false, false];

  constructor(private service:MainService,private router:Router) {}
  
  ngOnInit(): void {
    this.getAllSupervisor();
    this.total =  this.supervisor_data.length;
  }
  getAllSupervisor(){
    this.supervisor_data = this.service.supervisorService.getAll();
  }

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSelectAll(){
    this.supervisor_data.forEach(e=>e.isSelected=this.selectAll);
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
    return this.supervisor_data.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.supervisor_data.filter(e=>e.isSelected);
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
  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent): void {
    // console.log('Global click event occurred using HostListener!');
    // console.log(event.target);

    
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
openDetails() {
  const dialogRef = this.service.dialog.open(EditSupervisorPopUpComponent, {
    width: '50%',
    height:'75%',
    direction:'rtl',
    panelClass:'custom-dialog-container',
    data: { name: 'Angular Material' }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed:', result);
  });
}
openDetailsDialog(){
this.openDetails();
}

checkItems(event: Event): void {
  this.supervisor_data.forEach(element => {
    if(element.isSelected){
      this.router.navigate(['/school/account-user'])
    }
  });

}
filterData(){
  this.getAllSupervisor();
  if(this.filterType == 'name'){
    this.supervisor_data = this.supervisor_data.filter(x=>x.name.toLowerCase().includes(this.searchKeyword.toLowerCase())) ;
  } 
  if(this.filterType == 'number'){
    this.supervisor_data = this.supervisor_data.filter(x=>x.phoneNumber.includes(this.searchKeyword)) ;
  }
  if(this.date != ''){
    this.supervisor_data = this.supervisor_data.filter(x=>x.lastActiveDate == this.date) ;
  }
  if(this.isActive == "false"){
    this.supervisor_data = this.supervisor_data.filter(x=>x.isActive == false) ;
  }
  if(this.isActive == "true"){
    this.supervisor_data = this.supervisor_data.filter(x=>x.isActive == true) ;
  }
  this.total =  this.supervisor_data.length;
}
}