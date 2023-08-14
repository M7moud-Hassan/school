import { Component } from '@angular/core';
import { MainAgentService } from '../../Services/main-agent.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-users-warning-pop-up',
  templateUrl: './agent-users-warning-pop-up.component.html',
  styleUrls: ['./agent-users-warning-pop-up.component.css']
})
export class AgentUsersWarningPopUpComponent {

  constructor(private service:MainAgentService,public dialogRef: MatDialogRef<AgentUsersWarningPopUpComponent>){}

  back(){
    this.service.back();
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
