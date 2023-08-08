import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-add-new-student-to-group-pop-up',
  templateUrl: './add-new-student-to-group-pop-up.component.html',
  styleUrls: ['./add-new-student-to-group-pop-up.component.css']
})
export class AddNewStudentToGroupPopUpComponent {

constructor(public dialogRef: MatDialogRef<AddNewStudentToGroupPopUpComponent>,private service:MainService) {
  
}
closeDialog(): void {
  this.dialogRef.close();
}
back(){
  this.service.back();
}
}
