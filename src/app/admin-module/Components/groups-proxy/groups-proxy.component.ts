import { Component } from '@angular/core';
import { TripsAndGroupsComponent } from 'src/app/schools-module/Components/trips-and-groups/trips-and-groups.component';

@Component({
  selector: 'app-groups-proxy',
  templateUrl: './groups-proxy.component.html',
  styleUrls: ['../../../schools-module/Components/report-trips/report-trips.component.css','../../../schools-module/Components/today-journey/today-journey.component.css', '../activities/activities.component.css','../../../schools-module/Components/trips-and-groups/trips-and-groups.component.css','./groups-proxy.component.css']
})
export class GroupsProxyComponent extends TripsAndGroupsComponent {

}
