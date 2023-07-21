import { Component,AfterViewInit ,OnInit} from '@angular/core';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements AfterViewInit,OnInit {
  time=150
  ngOnInit(): void {
  setInterval(() => {
    const iconElements = document.querySelectorAll('.icon-email-d');
   
    
    iconElements.forEach((iconElement: Element, index: number) => {
      (iconElement as HTMLElement).style.top = `-37%`;
    
    });
   }, this.time);
  }
  
  ngAfterViewInit(): void {
   
  }

}
