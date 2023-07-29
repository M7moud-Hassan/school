import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsImgComponent } from '../details-img/details-img.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  constructor(private dialog:MatDialog) {
   
    
  }
  initialContent = '<p><strong style="font-size: 50px;">باص واي Basway </strong></p>';
  initialContent2 = '<p style="font-size: 18px;">المفضل عند الطلاب و أولياء الأمور و المدارس و المشرفين</p>';
 
  openDialogImg(){
    this.dialog.open(DetailsImgComponent,{
      width:'50%'
    })
  }
}
