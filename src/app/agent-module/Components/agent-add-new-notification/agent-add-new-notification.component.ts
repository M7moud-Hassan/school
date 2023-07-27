import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAgentService } from '../../Services/main-agent.service';

@Component({
  selector: 'app-agent-add-new-notification',
  templateUrl: './agent-add-new-notification.component.html',
  styleUrls: ['./agent-add-new-notification.component.css']
})
export class AgentAddNewNotificationComponent implements OnInit {
  showParents=false
  showFirstItem=false;
  addItemD=false;
  firstitem=''
  items: string[] = []; 
  newNotificationForm:FormGroup = new FormGroup({});

  constructor(private service:MainAgentService){}

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
    this.service.agentNotificationService.addNewNotification(this.newNotificationForm.value).subscribe({
      next:(res)=>{

      },
      error:(error)=>{
        
      }
    });
  }
}
