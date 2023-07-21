import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbsenceOrderModel } from '../../Core/Models/absence-order-model';
import { AbsenceService } from '../../Services/absence.service';

@Component({
  selector: 'app-add-absence-order',
  templateUrl: './add-absence-order.component.html',
  // styleUrls: ['../new-student/new-student.component.css','../login/login.component.css', '../register/register.component.css','../profile/profile.component.css','./add-absence-order.component.css']
  styleUrls: ['./add-absence-order.component.css']
})
export class AddAbsenceOrderComponent {

  absenceOrderModel:AbsenceOrderModel = {} as AbsenceOrderModel;
  selectAll:boolean = false;
  journeyList = [
    {label:'outbound',isSelected:false},
    {label:'return',isSelected:true},
  ];

  constructor(private fb:FormBuilder,private absenceService:AbsenceService){

  }

  absenceOrderForm = this.fb.group({
    studentName : ['',[Validators.required]],
    from : ['',[Validators.required]],
    to : ['',[Validators.required]],
    reason : ['',[Validators.required]],
    by : ['',[Validators.required]],
    isOutboundJourneyAbsent : [false,[Validators.required]],
    isReturnJourneyAbsent : [false,[Validators.required]],
  });

   
  mapValues(){
    this.absenceOrderModel = {
      studentName:this.absenceOrderForm.controls['studentName'].value,
      from:this.absenceOrderForm.controls['from'].value,
      to:this.absenceOrderForm.controls['to'].value,
      reason:this.absenceOrderForm.controls['reason'].value,
      by:this.absenceOrderForm.controls['by'].value,
      isOutboundJourneyAbsent:this.absenceOrderForm.controls['isOutboundJourneyAbsent'].value,
      isReturnJourneyAbsent:this.absenceOrderForm.controls['isReturnJourneyAbsent'].value,
    }
  }


  onSubmit() {
    //TODO: remove
    this.mapValues();
    //TODO: remove
    alert(`
    studentName ${this.absenceOrderModel.studentName},
    from ${this.absenceOrderModel.from},
    to ${this.absenceOrderModel.to},
    reason ${this.absenceOrderModel.reason},
    by ${this.absenceOrderModel.by},
    isOutboundJourneyAbsent ${this.absenceOrderModel.isOutboundJourneyAbsent},
    isReturnJourneyAbsent ${this.absenceOrderModel.isReturnJourneyAbsent},
    `)

    if(this.absenceOrderForm.valid){
      this.mapValues();
      this.absenceService.addNewAbsence(this.absenceOrderModel).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
 
  toggleSelectAll(){
    debugger;
    alert(`
    ${this.selectAll}
    ${this.journeyList[0].isSelected}
    ${this.journeyList[1].isSelected}
    `);
    this.journeyList.forEach(e=>e.isSelected=this.selectAll);
    alert(`
    ${this.selectAll}
    ${this.journeyList[0].isSelected}
    ${this.journeyList[1].isSelected}
    `);
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
    return this.journeyList.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.journeyList.filter(e=>e.isSelected);
  }

}
