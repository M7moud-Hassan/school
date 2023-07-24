import { Component, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { groupModel } from '../../Services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups:groupModel[] = [];
  constructor(private service:MainService){}
  ngOnInit(): void {
    this.getAllGroups();
  }
  getAllGroups(){
    this.groups = this.service.groupService.getAll();
  }

}
