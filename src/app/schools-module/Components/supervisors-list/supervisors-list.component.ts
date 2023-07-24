import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupPopupComponent } from '../group-popup/group-popup.component';
import { supervisorModel } from '../../Services/supervisor.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-supervisors-list',
  templateUrl: './supervisors-list.component.html',
  styleUrls: ['../parents-list/parents-list.component.css','./supervisors-list.component.css',]
})
export class SupervisorsListComponent implements OnInit {
  isSchoolAccountDropdownVisible:boolean = false;
  supervisor_data:supervisorModel[] = [];
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.supervisor_data.length;
  selectAll:boolean = false;
  detailsVisible: boolean[] = [false, false, false];

  constructor(private service:MainService) {}
  
  ngOnInit(): void {
    this.getAllSupervisor();
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
}