import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgentsService } from './agents.service';
import { AgentHomeService } from './agent-home.service';
import { AgentAuthService } from './agent-auth.service';
import { AgentUsersService } from './agent-users.service';
import { AgentSubscriptionService } from './agent-subscription.service';

@Injectable({
  providedIn: 'root'
})
export class MainAgentService {

  constructor(
    private _formBuilder:FormBuilder,
    private _dialog: MatDialog,
    private _router: Router,
    private _agentHomeService: AgentHomeService,
    private _agentsService: AgentsService,
    private _agentAuthService: AgentAuthService,
    private _agentUsersService: AgentUsersService,
    private _AgentSubscriptionService: AgentSubscriptionService,
    ){}

    get formBuilder():FormBuilder{
      return this._formBuilder;
    }
    get dialog():MatDialog{
      return this._dialog;
    }
    get router():Router{
      return this._router;
    }
    get agentsService():AgentsService{
      return this._agentsService;
    }
    get agentHomeService():AgentHomeService{
      return this._agentHomeService;
    }
    get agentAuthService():AgentAuthService{
      return this._agentAuthService;
    }
    get agentUsersService():AgentUsersService{
      return this._agentUsersService;
    }
    get agentSubscriptionService():AgentSubscriptionService{
      return this._AgentSubscriptionService;
    }







    printFormValues(myForm:FormGroup): void {
      let  i = 0;
      let displayedValues:String = "";
      for (const controlName in myForm.controls) {
        i++;
        if (myForm.controls.hasOwnProperty(controlName)) {
          displayedValues += `${i} - ${controlName}: ${myForm.controls[controlName].value} \n`;
          console.log(`${controlName}: ${myForm.controls[controlName].value}`);
        }
      }
      alert(displayedValues);
    }
}
