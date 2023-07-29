import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsImgComponent } from '../details-img/details-img.component';
import { DetailsImgDriverComponent } from '../details-img-driver/details-img-driver.component';

@Component({
  selector: 'app-targeteds',
  templateUrl: './targeteds.component.html',
  styleUrls: ['./targeteds.component.css']
})
export class TargetedsComponent {
  constructor(private dialog:MatDialog) {
   
    
  }
  initialContent = '<p><strong style="font-size: 23px;">المستهدفون من <span style="color:#3AA7CE">باص واي</span></strong></p>';
  initialContent2 = '<p style="font-size: 18px;">حلول جذرية يقدمها تطبيق باص واي Busway و يستهدف جميع المستفيدين والمقدمين لخدمات النقل المدرسي سواء كانت شركات النقل او المدرسة أو الطالب أو ولي الأمر.. وبهذا يتميز تطبيق باص واي Busway بخلق بيئة نقل مدرسي آمن و مريح مع باص واي.. كن مطمئن .  </p>';
 
  openDialogImg(){
    this.dialog.open(DetailsImgDriverComponent,{
      width:'50%'
    })
  }
}
