import { Component, OnInit } from '@angular/core';
import { AdminSpeedNotificationPopUpComponent } from '../admin-speed-notification-pop-up/agent-speed-notification-pop-up.component';
import { agentLastAddon, agentLastUpdates } from 'src/app/agent-module/Services/agent-home.service';
import { MainAgentService } from 'src/app/agent-module/Services/main-agent.service';

@Component({
  selector: 'app-agent-speed-notification',
  templateUrl: './agent-speed-notification.component.html',
  styleUrls: ['./agent-speed-notification.component.css']
})
export class AdminSpeedNotificationComponent implements OnInit {
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
    const dialogRef = this.service.dialog.open(AdminSpeedNotificationPopUpComponent, {
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
