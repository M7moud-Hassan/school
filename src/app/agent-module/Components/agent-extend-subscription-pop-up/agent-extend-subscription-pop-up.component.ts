import { Component } from '@angular/core';
import { MainAgentService } from '../../Services/main-agent.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-extend-subscription-pop-up',
  templateUrl: './agent-extend-subscription-pop-up.component.html',
  styleUrls: ['./agent-extend-subscription-pop-up.component.css']
})
export class AgentExtendSubscriptionPopUpComponent {

  constructor(private service:MainAgentService,public dialogRef: MatDialogRef<AgentExtendSubscriptionPopUpComponent>){}

  back(){
    this.service.back();
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}
