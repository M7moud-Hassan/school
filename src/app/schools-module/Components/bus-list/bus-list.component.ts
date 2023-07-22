import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupPopupComponent } from '../group-popup/group-popup.component';
import { EditSupervisorPopUpComponent } from '../edit-supervisor-pop-up/edit-supervisor-pop-up.component';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['../parents-list/parents-list.component.css','./bus-list.component.css']
})
export class BusListComponent {
  isSchoolAccountDropdownVisible:boolean = false;
  
  bus_data = [
    {id:1,name:'مشرف رقم 1',busNumber:'731',manufacturingCompany:'الشركة المنتجة رقم 1',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:2,name:'مشرف رقم 2',busNumber:'831',manufacturingCompany:'الشركة المنتجة رقم 2',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:3,name:'مشرف رقم 3',busNumber:'791',manufacturingCompany:'الشركة المنتجة رقم 3',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:4,name:'مشرف رقم 4',busNumber:'721',manufacturingCompany:'الشركة المنتجة رقم 4',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:5,name:'مشرف رقم 5',busNumber:'231',manufacturingCompany:'الشركة المنتجة رقم 5',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:6,name:'مشرف رقم 6',busNumber:'431',manufacturingCompany:'الشركة المنتجة رقم 6',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:7,name:'مشرف رقم 7',busNumber:'901',manufacturingCompany:'الشركة المنتجة رقم 7',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:8,name:'مشرف رقم 8',busNumber:'1031',manufacturingCompany:'الشركة المنتجة رقم 8',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:9,name:'مشرف رقم 9',busNumber:'873',manufacturingCompany:'الشركة المنتجة رقم 9',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:10,name:'مشرف رقم 10',busNumber:'878',manufacturingCompany:'الشركة المنتجة رقم 10',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    
    {id:11,name:'1مشرف رقم 1',busNumber:'731',manufacturingCompany:'الشركة المنتجة رقم 11',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:12,name:'1مشرف رقم 2',busNumber:'831',manufacturingCompany:'الشركة المنتجة رقم 12',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:13,name:'1مشرف رقم 3',busNumber:'791',manufacturingCompany:'الشركة المنتجة رقم 13',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:14,name:'1مشرف رقم 4',busNumber:'721',manufacturingCompany:'الشركة المنتجة رقم 14',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:15,name:'1مشرف رقم 5',busNumber:'231',manufacturingCompany:'الشركة المنتجة رقم 15',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:16,name:'1مشرف رقم 6',busNumber:'431',manufacturingCompany:'الشركة المنتجة رقم 16',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:17,name:'1مشرف رقم 7',busNumber:'901',manufacturingCompany:'الشركة المنتجة رقم 17',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:18,name:'1مشرف رقم 8',busNumber:'1031',manufacturingCompany:'الشركة المنتجة رقم 18',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:19,name:'1مشرف رقم 9',busNumber:'873',manufacturingCompany:'الشركة المنتجة رقم 19',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:20,name:'مشرف رقم 20',busNumber:'878',manufacturingCompany:'الشركة المنتجة رقم 20',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},

    {id:21,name:'2مشرف رقم 1',busNumber:'731',manufacturingCompany:'الشركة المنتجة رقم 21',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:22,name:'2مشرف رقم 2',busNumber:'831',manufacturingCompany:'الشركة المنتجة رقم 22',lastActiveDate:'13/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:23,name:'2مشرف رقم 3',busNumber:'791',manufacturingCompany:'الشركة المنتجة رقم 23',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:24,name:'2مشرف رقم 4',busNumber:'721',manufacturingCompany:'الشركة المنتجة رقم 24',lastActiveDate:'17/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:25,name:'2مشرف رقم 5',busNumber:'231',manufacturingCompany:'الشركة المنتجة رقم 25',lastActiveDate:'19/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:26,name:'2مشرف رقم 6',busNumber:'431',manufacturingCompany:'الشركة المنتجة رقم 26',lastActiveDate:'125/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
    {id:27,name:'2مشرف رقم 7',busNumber:'901',manufacturingCompany:'الشركة المنتجة رقم 27',lastActiveDate:'12/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:28,name:'2مشرف رقم 8',busNumber:'1031',manufacturingCompany:'الشركة المنتجة رقم 81',lastActiveDate:'15/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:29,name:'2مشرف رقم 9',busNumber:'873',manufacturingCompany:'الشركة المنتجة رقم 28',lastActiveDate:'16/6/2013',isSelected:false,isActive:true,image:'/assets/images/user.png'},
    {id:20,name:'مشرف رقم 20',busNumber:'878',manufacturingCompany:'الشركة المنتجة رقم 29',lastActiveDate:'20/6/2013',isSelected:false,isActive:false,image:'/assets/images/user.png'},
  ];

  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.bus_data.length;

  selectAll:boolean = false;
  detailsVisible: boolean[] = [false, false, false];
  constructor(private dialog: MatDialog) {}

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
    const dialogRef = this.dialog.open(GroupPopupComponent, {
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
    const dialogRef = this.dialog.open(EditSupervisorPopUpComponent, {
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