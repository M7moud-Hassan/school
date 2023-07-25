import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  constructor(
    private _formBuilder:FormBuilder,
    private _dialog: MatDialog,
    private _router: Router,
    private _agentsService: AgentsService,
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
