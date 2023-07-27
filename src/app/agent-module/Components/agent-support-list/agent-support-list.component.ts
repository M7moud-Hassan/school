import { Component, OnInit } from '@angular/core';
import { agentSupportListModel } from '../../Services/agent-support.service';
import { MainAgentService } from '../../Services/main-agent.service';

@Component({
  selector: 'app-agent-support-list',
  templateUrl: './agent-support-list.component.html',
  styleUrls: ['./agent-support-list.component.css']
})
export class AgentSupportListComponent implements OnInit {
  isSchoolAccountDropdownVisible:boolean = false;
  help_data:agentSupportListModel[] = []; 
  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.help_data.length;
  selectAll:boolean = false;
  detailsVisible: boolean[] = [false, false, false];

  constructor(private service:MainAgentService) {}

  ngOnInit(): void {
    this.getSupportList();
    this.total =  this.help_data.length;
  }

  getSupportList(){
    this.help_data =this.service.agentSupportService.getSupprotList();
  }

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  
  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }

}