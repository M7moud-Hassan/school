import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupPopupComponent } from '../group-popup/group-popup.component';
import { DetailsAskComponent } from '../details-ask/details-ask.component';
import { supportListModel } from '../../Services/support.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['../parents-list/parents-list.component.css','./support.component.css']
})
export class SupportComponent implements OnInit {
  isSchoolAccountDropdownVisible:boolean = false;
  help_data:supportListModel[] = []; 
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.help_data.length;
  selectAll:boolean = false;
  detailsVisible: boolean[] = [false, false, false];

  constructor(private service:MainService) {}

  ngOnInit(): void {
    this.getSupportList();
    this.total =  this.help_data.length;
  }

  getSupportList(){
    this.help_data =this.service.supportService.getSupprotList();
  }

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSelectAll(){
    this.help_data.forEach(e=>e.isSelected=this.selectAll);
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
    return this.help_data.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.help_data.filter(e=>e.isSelected);
  }

  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }
  openChangeGroupSupervisorDialog(){
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

  
  searchKeyword:any='';
  filterType:any = 'name';
  date:any='';
  isActive:any="true";
  filterData(){
    this.getSupportList();
    if(this.filterType == 'name'){
      this.help_data = this.help_data.filter(x=>x.title.toLowerCase().includes(this.searchKeyword.toLowerCase())) ;
    } 
    if(this.filterType == 'title'){
      this.help_data = this.help_data.filter(x=>x.title.includes(this.searchKeyword)) ;
    }
    if(this.date != ''){
      this.help_data = this.help_data.filter(x=>x.date == this.date) ;
    }
    if(this.isActive == "false"){
      this.help_data = this.help_data.filter(x=>x.status == false) ;
    }
    if(this.isActive == "true"){
      this.help_data = this.help_data.filter(x=>x.status == true) ;
    }
    this.total =  this.help_data.length;
  }
}