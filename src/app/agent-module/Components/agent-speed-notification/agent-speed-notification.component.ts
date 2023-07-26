import { Component, OnInit } from '@angular/core';
import { MainAgentService } from '../../Services/main-agent.service';
import { AgentSpeedNotificationPopUpComponent } from '../agent-speed-notification-pop-up/agent-speed-notification-pop-up.component';

@Component({
  selector: 'app-agent-speed-notification',
  templateUrl: './agent-speed-notification.component.html',
  styleUrls: ['./agent-speed-notification.component.css']
})
export class AgentSpeedNotificationComponent implements OnInit {
  constructor(private service:MainAgentService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDailog(){
    const dialogRef = this.service.dialog.open(AgentSpeedNotificationPopUpComponent, {
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
