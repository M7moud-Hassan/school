import { Component, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { groupsDetailsModel, studentsDetailsModel } from '../../Services/trips-and-groups.service';
import { AddNewStudentToGroupPopUpComponent } from '../add-new-student-to-group-pop-up/add-new-student-to-group-pop-up.component';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['../parents-list/parents-list.component.css','./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {
  isSchoolAccountDropdownVisible:boolean = false;
  groupDetails:groupsDetailsModel= {} as groupsDetailsModel;
  groupList:studentsDetailsModel[]=[];
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.groupList.length;
  detailsVisible: boolean[] = [false, false, false];

  constructor(private service:MainService) {}
  
  ngOnInit(): void {
    this.getGroupDetails();
    this.total =  this.groupList.length;
  }
  getGroupDetails(){
    this.groupDetails = this.service.tripsAndGroupsService.getGroupDetails();
    this.groupList = this.groupDetails.studentDetails;
  }

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }

  addStudentToGroupDialog() {
    const dialogRef = this.service.dialog.open(AddNewStudentToGroupPopUpComponent, {
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
