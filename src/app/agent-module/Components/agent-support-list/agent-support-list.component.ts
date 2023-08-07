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

  searchKeyword:any='';
  filterType:any = 'name';
  date:any='';
  isActive:any="true";
  filterData(){
    this.getSupportList();
    if(this.filterType == 'name'){
      this.help_data = this.help_data.filter(x=>x.title.toLowerCase().includes(this.searchKeyword.toLowerCase())) ;
    } 
    if(this.filterType == 'title'){
      this.help_data = this.help_data.filter(x=>x.title.includes(this.searchKeyword)) ;
    }
    if(this.date != ''){
      this.help_data = this.help_data.filter(x=>x.date == this.date) ;
    }
    if(this.isActive == "false"){
      this.help_data = this.help_data.filter(x=>x.status == false) ;
    }
    if(this.isActive == "true"){
      this.help_data = this.help_data.filter(x=>x.status == true) ;
    }
    this.total =  this.help_data.length;
  }
}