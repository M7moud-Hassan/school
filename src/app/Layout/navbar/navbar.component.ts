import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component,TemplateRef,ViewChild,ViewContainerRef,AfterViewInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  selectedItem:Number=-1;
  constructor(private overlay: Overlay,private overlayPositionBuilder: OverlayPositionBuilder,private viewContainerRef: ViewContainerRef) {

    
  }
  ngAfterViewInit(): void {
   
  

}

@HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent): void {
    console.log('Global click event occurred using HostListener!');
    console.log(event.target);

    
    const list1Element = document.getElementById('list1');
    const list1Element1 = document.getElementById('list2');
    if (event.target !== list1Element) {
   this.isSchoolAccountDropdownVisible=false;

     
    }
    if (event.target !== list1Element1) {
      this.isSearchBoxVisible=false;
        
       }
  }
  
  isSchoolAccountDropdownVisible:boolean = false;
  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }
  isSearchBoxVisible:boolean = false;
  toggleSearchBox(){
    this.isSearchBoxVisible = ! this.isSearchBoxVisible;
  }
  searchType = [
    {id:1,label:'ولى أمر',},
    {id:2,label:'طالـــب',},
    {id:3,label:'رحـلة',},
    {id:4,label:'بـاص',},
    {id:5,label:'مشـرف',},
    {id:6,label:'مجموعة',},
    {id:7,label:'إعـلان'},
  ]; 
  overlayRef: OverlayRef | null = null;
  overlayRef2: OverlayRef | null = null;
  @ViewChild('trigger') trigger: any;
  @ViewChild('overlayTemplate', { static: false }) overlayTemplate!: TemplateRef<any>;
  @ViewChild('trigger2') trigger2: any;
  @ViewChild('overlayTemplate2', { static: false }) overlayTemplate2!: TemplateRef<any>;
  showOverlay() {
    this.isSearchBoxVisible = !this.isSearchBoxVisible;
    if (!this.overlayRef) {
      const positionStrategy = this.overlayPositionBuilder
        .flexibleConnectedTo(this.trigger.nativeElement)
        .withPositions([{ originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' }]);
      this.overlayRef = this.overlay.create({ positionStrategy });
    }

    const portal = new TemplatePortal(this.overlayTemplate, this.viewContainerRef);
    this.overlayRef.attach(portal);
  }

  showOverlay2() {
    this.isSchoolAccountDropdownVisible = !this.isSchoolAccountDropdownVisible;
    if (!this.overlayRef2) {
      const positionStrategy = this.overlayPositionBuilder
        .flexibleConnectedTo(this.trigger2.nativeElement)
        .withPositions([{ originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' }]);
      this.overlayRef2 = this.overlay.create({ positionStrategy });
    }

    const portal = new TemplatePortal(this.overlayTemplate2, this.viewContainerRef);
    this.overlayRef2.attach(portal);
  }

  selectItem(item:any){
    this.selectedItem=Number(item.id);
  }
}
