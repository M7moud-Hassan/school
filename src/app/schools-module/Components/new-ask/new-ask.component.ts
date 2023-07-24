import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-new-ask',
  templateUrl: './new-ask.component.html',
  styleUrls: ['./new-ask.component.css']
})
export class NewAskComponent implements OnInit {
  newNewAskForm:FormGroup = new FormGroup({});

  constructor(private service:MainService){}
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.newNewAskForm = this.service.formBuilder.group({
      title:['',[Validators.required]],
      details:['',[Validators.required]],
    });
  }
  submit(){
    this.service.printFormValues(this.newNewAskForm);
    this.service.supportService.addNew(this.newNewAskForm.value).subscribe({
      next:(res)=>{

      },
      error:(error)=>{
        
      }
    });
  }

}
