import { Component, OnInit } from '@angular/core';
import { SchoolHomePageService } from 'src/app/appServices/school-home-page.service';
declare var $: any;

@Component({
  selector: 'app-section6-trusted-partners',
  templateUrl: './section6-trusted-partners.component.html',
  styleUrls: ['./section6-trusted-partners.component.css']
})
export class Section6TrustedPartnersComponent implements OnInit {
  list:any[]=[];
  isLoading:boolean=true;
  errorFound:boolean=false;
  count:number=0;

  constructor(private service:SchoolHomePageService) { }
  
  ngOnInit(): void {
    this.loadPartnersData();
  }

  loadPartnersData(){
      this.list = this.service.loadPartnersSection6();
      this.isLoading = false;
    }
    ngDoCheck(): void {
      if(this.list.length>0 && !this.isLoading){
  
        var v =setInterval(function(){
          var fullHeight = function() {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function(){
              $('.js-fullheight').css('height', $(window).height());
            });
          };
          fullHeight();
          var carousel = function() {
            $('.featured-carousel').owlCarousel({
            loop:true,
            autoplay: true,
            margin:30,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav:true,
            dots: true,
            autoplayHoverPause: false,
            items: 1,
            navText : ["<span style='display:none' class='ion-ios-arrow-back'></span>","<span style='display:none' class='ion-ios-arrow-forward'></span>"],
            responsive:{
              0:{
              items:1
              },
              600:{
              items:2
              },
              1000:{
              items:3
              }
            }
            });
        
        
            $('.featured-carousel1').owlCarousel({
              loop:true,
              autoplay: true,
              margin:30,
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              nav:true,
              dots: true,
              autoplayHoverPause: false,
              items: 1,
              navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
              responsive:{
                0:{
                items:1
                },
                600:{
                items:2
                },
                1000:{
                items:3
                }
              }
              });
          
          };
          carousel();
          $(".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            center: true,
            navText: [
              "<i class='fa fa-angle-left'></i>",
              "<i class='fa fa-angle-right'></i>"
            ],
            responsive:{
              0:{
                items:1
              },
              770:{
                items:2
              },
              1000:{
                items:3
              }
            }
          });
          clearInterval(v);
        },1000)
          }
      }
   
}
