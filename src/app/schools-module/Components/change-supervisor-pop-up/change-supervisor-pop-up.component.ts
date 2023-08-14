import { Component } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-supervisor-pop-up',
  templateUrl: './change-supervisor-pop-up.component.html',
  styleUrls: ['./change-supervisor-pop-up.component.css']
})
export class ChangeSupervisorPopUpComponent {
constructor(private service:MainService,public dialogRef: MatDialogRef<ChangeSupervisorPopUpComponent>){}
back(){
  this.service.back();
}
closeDialog(): void {
  this.dialogRef.close();
}
}
