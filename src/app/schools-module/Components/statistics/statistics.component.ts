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

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  title = 'ngSlick';


  slides = [342, 453, 846, 855, 234, 564, 744, 243];
  addSlide() {
    this.slides.push(488)
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
