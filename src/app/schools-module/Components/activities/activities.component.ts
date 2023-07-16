import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  currentDate = Date.now();
  activities=[
    {label:'إجمالي عدد الطلاب : 30',activityName:'طلبات الغياب',count:'9',percent:'15'},
    {label:'إجمالي عدد الرحلات : 30',activityName:'عدد الرحلات',count:'28',percent:'70'},
    {label:'إجمالي عدد الرحلات اليوم : 30',activityName:'الرحلات الفعالة',count:'س',percent:'58'},
  ];
  strokArray:any[] = this.activities.map(val=>`${val.percent}, 100`);
  // strokArray:any[] = [
  //   '90, 100',
  //   '80, 100',
  //   '10, 100',
  // ];
}
