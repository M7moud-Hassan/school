import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
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

  statisctics=[
    {label:'المجموعات',count:5,image:'/assets/images/group.png'},
    {label:'طلبات الغياب',count:31,image:'/assets/images/calender.svg'},
    {label:'الانشطة',count:19,image:'/assets/images/group.png'},
    {label:'المستخدمين',count:130,image:'/assets/images/users.svg'},
    {label:'المشرفين',count:17,image:'/assets/images/supervisor.svg'},
    {label:'الرحلات',count:94,image:'/assets/images/journey.svg'},
    {label:'الامتحانات',count:10,image:'/assets/images/group.png'},
    {label:'المجموعات',count:5,image:'/assets/images/group.png'},
    {label:'طلبات الغياب',count:31,image:'/assets/images/calender.svg'},
    {label:'الانشطة',count:19,image:'/assets/images/group.png'},
    {label:'المستخدمين',count:130,image:'/assets/images/users.svg'},
    {label:'المشرفين',count:17,image:'/assets/images/supervisor.svg'},
    {label:'الرحلات',count:94,image:'/assets/images/journey.svg'},
    {label:'الامتحانات',count:10,image:'/assets/images/group.png'},
  ];
}
