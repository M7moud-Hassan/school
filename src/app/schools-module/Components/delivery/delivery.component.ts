import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  index:Number=0
  student = [
    {
      name: "احمد محمد",
      type: "طالب",
      date: "2020-09-05"
    },
    {
      name: "احمد محمد",
      type: "طالب",
      date: "2020-09-05"
    },
    {
      name: "احمد محمد",
      type: "طالب",
      date: "2020-09-05"
    },
    {
      name: "احمد محمد",
      type: "طالب",
      date: "2020-09-05"
    },
    {
      name: "احمد محمد",
      type: "طالب",
      date: "2020-09-05"
    }
    , {
      name: "احمد محمد",
      type: "طالب",
      date: "2020-09-05"
    },
    {
      name: "احمد محمد",
      type: "طالب",
      date: "2020-09-05"
    },
    {
      name: "احمد محمد",
      type: "طالب",
      date: "2020-09-05"
    }
  ]

  parents = [
    {
      name: "احمد محمد",
      type: "ولي امر",
      date: "2020-09-05"
    },
    {
      name: "احمد محمد",
      type: "ولي امر",
      date: "2020-09-05"
    },
    {
      name: "احمد محمد",
      type: "ولي امر",
      date: "2020-09-05"
    },
    {
      name: "احمد محمد",
      type: "ولي امر",
      date: "2020-09-05"
    },
    
  ]

  supervisor = [
    {
      name: "احمد محمد",
      type: "مشرف",
      date: "2020-09-05"
    },
    {
      name: "احمد محمد",
      type: "مشرف",
      date: "2020-09-05"
    },
    {
      name: "احمد محمد",
      type: "مشرف",
      date: "2020-09-05"
    },
  ]

all=[...this.student,...this.supervisor,...this.parents]
items=this.all
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
