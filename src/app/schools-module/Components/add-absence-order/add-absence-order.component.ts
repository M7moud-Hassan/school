import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbsenceOrderModel } from '../../Core/Models/absence-order-model';
import { AbsenceService } from '../../Services/absence.service';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-add-absence-order',
  templateUrl: './add-absence-order.component.html',
  styleUrls: ['./add-absence-order.component.css']
})
export class AddAbsenceOrderComponent implements OnInit {
  absenceOrderForm:FormGroup = new FormGroup({});
  // absenceOrderModel:AbsenceOrderModel = {} as AbsenceOrderModel;
  selectAll:boolean = false;
  journeyList = [
    {label:'outbound',isSelected:false},
    {label:'return',isSelected:true},
  ];
  constructor(private service:MainService){}
  ngOnInit(): void {
    this.createForm();
  }
 createForm(){
   this.absenceOrderForm = this.service.formBuilder.group({
    studentName : ['',[Validators.required]],
    from : ['',[Validators.required]],
    to : ['',[Validators.required]],
    reason : ['',[Validators.required]],
    by : ['',[Validators.required]],
    isOutboundJourneyAbsent : [false,[Validators.required]],
    isReturnJourneyAbsent : [false,[Validators.required]],
  });
 }
  

  onSubmit() {
    this.service.printFormValues(this.absenceOrderForm);
    if(this.absenceOrderForm.valid){

      this.service.absenceService.addNewAbsence(this.absenceOrderForm.value).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
 
  toggleSelectAll(){
    this.selectAll = !this.selectAll;
    if(this.selectAll==true){
      this.absenceOrderForm.controls['isOutboundJourneyAbsent'].setValue(true);
      this.absenceOrderForm.controls['isReturnJourneyAbsent'].setValue(true);
    }else{
      this.absenceOrderForm.controls['isReturnJourneyAbsent'].setValue(false);
      this.absenceOrderForm.controls['isOutboundJourneyAbsent'].setValue(false);
    }
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
   let checkOne = this.absenceOrderForm.controls['isOutboundJourneyAbsent'].value;
   let checkTwo =   this.absenceOrderForm.controls['isReturnJourneyAbsent'].value;
   return (checkOne==true && checkTwo==true);
  }
  getReturnJourneyAbsent(){
    return this.absenceOrderForm.controls['isOutboundJourneyAbsent'];
  }
  getOutboundJourneyAbsent(){
    return this.absenceOrderForm.controls['isOutboundJourneyAbsent'];
  }
  back(){
    this.service.back();
  }
}
