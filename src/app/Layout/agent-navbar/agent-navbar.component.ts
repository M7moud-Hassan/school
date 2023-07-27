import { Component } from '@angular/core';
import { AgentExtendSubscriptionPopUpComponent } from 'src/app/agent-module/Components/agent-extend-subscription-pop-up/agent-extend-subscription-pop-up.component';
import { AgentSchoolLocationPopUpComponent } from 'src/app/agent-module/Components/agent-school-location-pop-up/agent-school-location-pop-up.component';
import { MainAgentService } from 'src/app/agent-module/Services/main-agent.service';

@Component({
  selector: 'app-agent-navbar',
  templateUrl: './agent-navbar.component.html',
  styleUrls: ['./agent-navbar.component.css']
})
export class AgentNavbarComponent {
  isSchoolAccountDropdownVisible:boolean = false;
  isSearchBoxVisible:boolean = false;
  constructor(private service:MainAgentService){}
  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }
  toggleSearchBox(){
    this.isSearchBoxVisible = ! this.isSearchBoxVisible;
  }
  searchType = [
    {id:1,label:'مشترك',},
    {id:2,label:'مدرسة',},
    {id:3,label:'رحـلة',},
    {id:4,label:'بـاص',},
    {id:5,label:'مشـرف',},
    {id:6,label:'مجموعة',},
    {id:7,label:'إعـلان'},
  ];
  openSubscriptionDialog(){
    const dialogRef = this.service.dialog.open(AgentExtendSubscriptionPopUpComponent, {
      width: '30%',
      direction:'rtl',
      panelClass:'custom-dialog-container',
    });
  }
  openSchoolLocationDialog(){
    const dialogRef = this.service.dialog.open(AgentSchoolLocationPopUpComponent, {
      width: '50%',
      // height: '70%',
      direction:'rtl',
      panelClass:'custom-dialog-container',
    });
  }
}
