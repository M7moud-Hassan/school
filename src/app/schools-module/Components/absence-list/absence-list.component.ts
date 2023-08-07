import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupPopupComponent } from '../group-popup/group-popup.component';
import { DetailsAskComponent } from '../details-ask/details-ask.component';
import { absenceListModel } from '../../Services/absence.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['../parents-list/parents-list.component.css','./absence-list.component.css']
})
export class AbsenceListComponent implements OnInit{
  searchKeyword:any='';
  filterType:any = 'name';
  date:any='';
  from:any='';
  to:any=''; 
  absence_data:absenceListModel[] =[] ;
  isSchoolAccountDropdownVisible:boolean = false;
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.absence_data.length;
  selectAll:boolean = false;
  detailsVisible: boolean[] = [false, false, false];

  constructor(private service:MainService) {}
  ngOnInit(): void {
    this.getAbsenceList();
    this.total =  this.absence_data.length;
  }
  
  getAbsenceList(){
    this.absence_data = this.service.absenceService.getAbsenceList();
  }

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSelectAll(){
    this.absence_data.forEach(e=>e.isSelected=this.selectAll);
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
    return this.absence_data.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.absence_data.filter(e=>e.isSelected);
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
    this.service.dialog.open(DetailsAskComponent,{
      width: '50%',
    })
  }

 
  filterData(){
    this.getAbsenceList();
    if(this.filterType == 'name'){
      this.absence_data = this.absence_data.filter(x=>x.studentName.toLowerCase().includes(this.searchKeyword.toLowerCase())) ;
    } 
    if(this.filterType == 'by'){
      this.absence_data = this.absence_data.filter(x=>x.by.includes(this.searchKeyword)) ;
    }
    if(this.date != ''){
      this.absence_data = this.absence_data.filter(x=>x.createdAt == this.date) ;
    }
    if(this.to != ''){
      this.absence_data = this.absence_data.filter(x=>x.to == this.to) ;
    }
    if(this.from != ''){
      this.absence_data = this.absence_data.filter(x=>x.from == this.from) ;
    }
    this.total =  this.absence_data.length;
  }
}
