import { Component } from '@angular/core';
import { AddSchoolProxyComponent } from '../add-school-proxy/add-school-proxy.component';
import { MainAdminService } from '../../Services/main-admin.service';

@Component({
  selector: 'app-add-proxiy',
  templateUrl: './add-proxiy.component.html',
  styleUrls: ['../../../schools-module/Components/register/register.component.css','../../../schools-module/Components/login/login.component.css',
  '../../../schools-module/Components/profile/profile.component.css','../../../schools-module/Components/new-student/new-student.component.css','./add-proxiy.component.css']
})
export class AddProxiyComponent extends AddSchoolProxyComponent {

}
