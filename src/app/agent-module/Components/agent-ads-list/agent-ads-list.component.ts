import { Component, OnInit } from '@angular/core';
import { agentAdsListModel } from '../../Services/agent-ads.service';
import { MainAgentService } from '../../Services/main-agent.service';

@Component({
  selector: 'app-agent-ads-list',
  templateUrl: './agent-ads-list.component.html',
  styleUrls: ['./agent-ads-list.component.css']
})
export class AgentAdsListComponent implements OnInit {

  isSchoolAccountDropdownVisible:boolean = false;
  pageNo: number = 1;
  pageSize: number = 10;
  adsList:agentAdsListModel[]=[];
  total :number =  this.adsList.length;
  detailsVisible: boolean[] = [false, false, false];

  constructor(private service:MainAgentService){}
  ngOnInit(): void {
    this.getAdsList();
    this.total =  this.adsList.length;
  }

  getAdsList(){
  this.adsList = this.service.agentAdsService.getAdsList();
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
    this.getAdsList();
    if(this.filterType == 'name'){
      this.adsList = this.adsList.filter(x=>x.title.toLowerCase().includes(this.searchKeyword.toLowerCase())) ;
    } 
    if(this.filterType == 'title'){
      this.adsList = this.adsList.filter(x=>x.title.includes(this.searchKeyword)) ;
    }
    if(this.date != ''){
      this.adsList = this.adsList.filter(x=>x.creationDate == this.date) ;
    }
    if(this.isActive == "false"){
      this.adsList = this.adsList.filter(x=>x.isShown == false) ;
    }
    if(this.isActive == "true"){
      this.adsList = this.adsList.filter(x=>x.isShown == true) ;
    }
    this.total =  this.adsList.length;
  }
}