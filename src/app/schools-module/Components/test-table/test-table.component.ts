import { Component } from '@angular/core';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent {
  shownValue = [
    false,
    false,
    false,
    false
  ];

  change(index:any){
    this.shownValue[index] = !this.shownValue[index]; 
  }
  
}
