import { Component,AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsImgComponent } from '../details-img/details-img.component';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.css']
})
export class ContentManagementComponent {
  links:any[]=[
    {id:1,label:'الرئيسية',isSelected:true},
    {id:2,label:'المستهدفون',isSelected:false},
    {id:3,label:'المميزات',isSelected:false},
    {id:4,label:'كيف نعمل',isSelected:false},
    {id:5,label:'اعلان',isSelected:false},
    {id:6,label:'الشركاء',isSelected:false},
    {id:7,label:'اتصل بنا',isSelected:false},
    {id:8,label:'سياسة الخصوصية',isSelected:false},
  ];
  changeSelectedLink(index:any){
    this.links.map(x=>x.isSelected=false);
    this.links[index].isSelected = true;
  }
}
