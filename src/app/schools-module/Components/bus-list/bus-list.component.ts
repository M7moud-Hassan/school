import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupPopupComponent } from '../group-popup/group-popup.component';
import { EditSupervisorPopUpComponent } from '../edit-supervisor-pop-up/edit-supervisor-pop-up.component';
import { busListModel } from '../../Services/supervisor.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['../parents-list/parents-list.component.css','./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  isSchoolAccountDropdownVisible:boolean = false;
  bus_data:busListModel[] = [];
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.bus_data.length;
  selectAll:boolean = false;
  detailsVisible: boolean[] = [false, false, false];
  constructor(private service:MainService) {}
  ngOnInit(): void {
    this.getBusList();
  }
  getBusList(){
    this.bus_data = this.service.supervisorService.getBusList();
  }

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSelectAll(){
    this.bus_data.forEach(e=>e.isSelected=this.selectAll);
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
    return this.bus_data.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.bus_data.filter(e=>e.isSelected);
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
  openDetails() {
    const dialogRef = this.service.dialog.open(EditSupervisorPopUpComponent, {
      width: '50%',
      height:'100%',
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
}