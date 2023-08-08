import { Component } from '@angular/core';
import { MainAgentService } from '../../Services/main-agent.service';

@Component({
  selector: 'app-agent-extend-subscription-pop-up',
  templateUrl: './agent-extend-subscription-pop-up.component.html',
  styleUrls: ['./agent-extend-subscription-pop-up.component.css']
})
export class AgentExtendSubscriptionPopUpComponent {

  constructor(private service:MainAgentService){}

  back(){
    this.service.back();
  }
}
