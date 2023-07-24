import { Component, ViewChild, HostListener, ElementRef, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { statiscticsModel } from '../../Services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent  implements OnInit{
  statisctics :statiscticsModel[]=[];
  constructor(private service:MainService){}

  ngOnInit(): void {
    this.getAllStatistics();
  }

  getAllStatistics(){
    this.statisctics = this.service.statisticsService.getAll();
  }
  
  @ViewChild('cardsContainer') cardsContainerRef!: ElementRef;
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const speed = 20;
    const cardsContainer = this.cardsContainerRef.nativeElement as HTMLElement;

    if (event.pageX < cardsContainer.getBoundingClientRect().left + 20) {
      cardsContainer.scrollLeft -= speed;
    } else if (event.pageX > cardsContainer.getBoundingClientRect().right - 20) {
      cardsContainer.scrollLeft += speed;
    }
  }

}
