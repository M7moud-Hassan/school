import { Component } from '@angular/core';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-change-supervisor-pop-up',
  templateUrl: './change-supervisor-pop-up.component.html',
  styleUrls: ['./change-supervisor-pop-up.component.css']
})
export class ChangeSupervisorPopUpComponent {
constructor(private service:MainService){}
back(){
  this.service.back();
}
}
