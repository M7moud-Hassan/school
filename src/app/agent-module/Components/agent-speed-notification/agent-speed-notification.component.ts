import { Component, OnInit } from '@angular/core';
import { MainAgentService } from '../../Services/main-agent.service';
import { AgentSpeedNotificationPopUpComponent } from '../agent-speed-notification-pop-up/agent-speed-notification-pop-up.component';
import { agentLastAddon, agentLastUpdates } from '../../Services/agent-home.service';

@Component({
  selector: 'app-agent-speed-notification',
  templateUrl: './agent-speed-notification.component.html',
  styleUrls: ['./agent-speed-notification.component.css']
})
export class AgentSpeedNotificationComponent implements OnInit {
  addingsList:agentLastAddon[]=[];
  updatesList:agentLastUpdates[]=[];
  constructor(private service:MainAgentService){}
  ngOnInit(): void {
    this.getLastAddings();
    this.getLastUpdates();
  }
  getLastAddings(){
    this.addingsList = this.service.agentHomeService.getLastAddon();
  }

  getLastUpdates(){
    this.updatesList = this.service.agentHomeService.getLastUpdates();
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
