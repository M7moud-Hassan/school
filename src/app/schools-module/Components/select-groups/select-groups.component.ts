import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-groups',
  templateUrl: './select-groups.component.html',
  styleUrls: ['../new-student/new-student.component.css','./select-groups.component.css']
})
export class SelectGroupsComponent {
  constructor(public dialogRef: MatDialogRef<SelectGroupsComponent>) {}

  closeDialog(): void {
   
    
    this.dialogRef.close();
  }
}
