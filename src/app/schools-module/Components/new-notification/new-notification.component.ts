import { Component, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-notification',
  templateUrl: './new-notification.component.html',
  styleUrls: ['./new-notification.component.css']
})
export class NewNotificationComponent implements OnInit {
  showParents=false
  showFirstItem=false;
  addItemD=false;
  firstitem=''
  items: string[] = []; 
  newNotificationForm:FormGroup = new FormGroup({});

  constructor(private service:MainService){}

  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.newNotificationForm = this.service.formBuilder.group({
      title:['',[Validators.required]],
      details:['',[Validators.required]],
    });
  }
  onRadioParwntChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.showParents = target.checked;
  }

  addItem(){
    this.showParents=true;
    this.addItemD=true;
   this.showFirstItem=false;
   this.items.push(this.firstitem)
  }

  clearSelect(){
    this.showParents = false;
  }

  onEnterKey(event: Event){
    const target = event.target as HTMLInputElement;
   if(target.value != '' && !this.addItemD){
    this.showParents = false;
    this.showFirstItem=true;
    this.firstitem=target.value
    target.value="";
   }else if(target.value != '' && this.addItemD){
    this.items.push(target.value);    
    target.value="";
   }
    
  }
  submit(){
    this.service.printFormValues(this.newNotificationForm);
    this.service.notificationService.addNew(this.newNotificationForm.value).subscribe({
      next:(res)=>{

      },
      error:(error)=>{
        
      }
    });
  }
  back(){
    this.service.back();
  }
}
