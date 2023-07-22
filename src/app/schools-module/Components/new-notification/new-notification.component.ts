import { Component } from '@angular/core';

@Component({
  selector: 'app-new-notification',
  templateUrl: './new-notification.component.html',
  styleUrls: ['./new-notification.component.css']
})
export class NewNotificationComponent {
  showParents=false
  showFirstItem=false;
  addItemD=false;
  firstitem=''
  items: string[] = []; 
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
}
