import { Component,OnInit } from '@angular/core';
import { MainAdminService } from '../../Services/main-admin.service';
import { statiscticsModel } from 'src/app/schools-module/Services/statistics.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['../../../schools-module/Components/statistics/statistics.component.css','./admin-home-page.component.css'],
  animations: [
    trigger('shrinkWidth', [
      state('fullSize', style({
        width: '100%'
      })),
      state('shrunkSize', style({
        width: '70%'
      })),
      transition('fullSize <=> shrunkSize', animate('500ms ease-in-out'))
    ]),
    trigger('notificationA', [
      state('fullSize', style({
        width: '0%',
        opacity: 0
      })),
      state('shrunkSize', style({
        width: '30%',
        opacity: 1
      })),
      transition('fullSize <=> shrunkSize', animate('500ms ease-in-out'))
    ]),
    trigger('btnOpen', [
      state('fullSize', style({
        left:'0%'
      })),
      state('shrunkSize', style({
        left:'40%'
      })),
      transition('fullSize <=> shrunkSize', animate('500ms ease-in-out'))
    ])
  ]
})
export class AdminHomePageComponent implements OnInit {
  statisctics :statiscticsModel[]=[];
  isShrunk: boolean = false;
constructor(private service:MainAdminService) {
}
  ngOnInit(): void {
   this.getAllStatistics()
  }

getAllStatistics(){
  this.statisctics = this.service.adminHomeService.getAll();
}
toggleAnimation() {
  this.isShrunk = !this.isShrunk;
}
}
