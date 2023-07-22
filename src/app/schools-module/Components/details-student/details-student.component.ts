import { Component,AfterViewInit ,OnInit} from '@angular/core';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements AfterViewInit,OnInit {
  ngOnInit(): void {
  setInterval(() => {
    const iconElements = document.querySelectorAll('.icon-email-d');
  
    iconElements.forEach((iconElement: Element, index: number) => {
      (iconElement as HTMLElement).style.top = `-37%`;
    
    });
   }, 200);
  }
  
  ngAfterViewInit(): void {
   
  }

}
