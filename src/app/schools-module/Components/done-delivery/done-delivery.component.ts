import { Component, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { student_SendNotification_Model } from '../../Services/student.service';
import { parent_SendNotification_Model } from '../../Services/parent.service';
import { supervisor_SendNotification_Model } from '../../Services/supervisor.service';

@Component({
  selector: 'app-done-delivery',
  templateUrl: './done-delivery.component.html',
  styleUrls: ['./done-delivery.component.css']
})
export class DoneDeliveryComponent implements OnInit {
  student:student_SendNotification_Model[] = []; 
  parents:parent_SendNotification_Model[] = []; 
  supervisor:supervisor_SendNotification_Model[] = []; 
  all:any[]=[];
  items:any[]=[];
  index:Number=0
  constructor(private service:MainService){}
  ngOnInit(): void {
   this.getParents();
   this.getStudents();
   this.getSupervisors();
   this.all = [...this.student,...this.supervisor,...this.parents];
   this.items=this.all
  }
  getStudents(){
   this.student = this.service.studentService.getStudentForSendNotification();
  }
  getParents(){
    this.parents = this.service.parentService.getParentForSendNotification();
   }
   getSupervisors(){
    this.supervisor = this.service.supervisorService.getSupervisorForSendNotification();
   }



show(i:Number){
  this.index=i
  if(i==0)
  this.items=this.all
  else if (i==1)
  this.items=this.student
  else if(i==2)
  this.items=this.parents
  else this.items=this.supervisor
}
}
