import { Component } from '@angular/core';
import { ActivitiesComponent as Activities } from 'src/app/schools-module/Components/activities/activities.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['../../../schools-module/Components/Activities/activities.component.css','./activities.component.css']
})
export class ActivitiesComponent  extends Activities{

}
