import { Component, HostListener, OnInit } from '@angular/core';
import { GroupPopupComponent } from '../group-popup/group-popup.component';
import { busListModel } from '../../Services/supervisor.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['../parents-list/parents-list.component.css','./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  searchKeyword: any = '';
  filterType: any = 'name';
  date: any = '';
  isActive: any = "true";

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
    this.total =  this.bus_data.length;
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


filterData(){
  this.getBusList();
  if(this.filterType == 'name'){
    this.bus_data = this.bus_data.filter(x=>x.name.toLowerCase().includes(this.searchKeyword.toLowerCase())) ;
  } 
  if(this.filterType == 'number'){
    this.bus_data = this.bus_data.filter(x=>x.busNumber.includes(this.searchKeyword)) ;
  }
  if(this.date != ''){
    this.bus_data = this.bus_data.filter(x=>x.lastActiveDate == this.date) ;
  }
  if(this.isActive == "false"){
    this.bus_data = this.bus_data.filter(x=>x.isActive == false) ;
  }
  if(this.isActive == "true"){
    this.bus_data = this.bus_data.filter(x=>x.isActive == true) ;
  }
  this.total =  this.bus_data.length;
}
}