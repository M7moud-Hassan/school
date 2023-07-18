import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-today-journey',
  templateUrl: './today-journey.component.html',
  styleUrls: ['./today-journey.component.css', '../activities/activities.component.css']
})
export class TodayJourneyComponent implements OnInit {
  allJournies:boolean = true;
  returnJourney:boolean = false;
  outboundJourney:boolean = false;
  isAllJourneySelected:boolean=false;
  isActiveJourneySelected:boolean=false;

  journies:any[] = [];
  journey_data = [
    {id:1,groupNameAr:'حى البشر',groupNameEn:'Hi Elbishr',supervisorName:'محمد كمال',studentCount:14,active:false,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى الكاظم',groupNameEn:'Hi Elkazem',supervisorName:'على خضيرى',studentCount:12,active:true,codeActive:true,date:'22/5/2023',journeyType:'outboundJourney'},
    {id:1,groupNameAr:'حى الهادى',groupNameEn:'Hi Elhadi',supervisorName:'احمد هراس',studentCount:8,active:false,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى الكافورى',groupNameEn:'Hi Elkafoury',supervisorName:'مصطفى ماجد',studentCount:11,active:true,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى الهدى',groupNameEn:'Hi Elhuda',supervisorName:'عبدالعزيز خالد',studentCount:10,active:false,codeActive:true,date:'22/5/2023',journeyType:'outboundJourney'},
    {id:1,groupNameAr:'حى العملين',groupNameEn:'Hi Elalamein',supervisorName:'رجب العريان',studentCount:8,active:true,codeActive:false,date:'22/5/2023',journeyType:'outboundJourney'},
    {id:1,groupNameAr:'حى المنتزه',groupNameEn:'Hi Elmontazah',supervisorName:'منتصر حازم',studentCount:15,active:true,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى خان',groupNameEn:'Hi Khan',supervisorName:'عامر القرنى',studentCount:8,active:true,codeActive:false,date:'22/5/2023',journeyType:'outboundJourney'},
    {id:1,groupNameAr:'حى العمورى',groupNameEn:'Hi Elamoury',supervisorName:'بلال محمد',studentCount:9,active:false,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى الرشيد',groupNameEn:'Hi Elrasheed',supervisorName:'على فراج',studentCount:17,active:true,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى الراشد',groupNameEn:'Hi Elrashed',supervisorName:'علاء محمود',studentCount:21,active:false,codeActive:false,date:'22/5/2023',journeyType:'returnJourney'},
    {id:1,groupNameAr:'حى المعتصم',groupNameEn:'Hi Elmoatasem',supervisorName:'مصطفى عبدالعال',studentCount:8,active:false,codeActive:true,date:'22/5/2023',journeyType:'returnJourney'},
  ];
   getAllJourney(){
    this.journies =  this.journey_data;
    this.allJournies = true;
    this.returnJourney = false;
    this.outboundJourney = false;
  }
   getReturnJourney(){
    this.journies = this.journey_data.filter(x=>x.journeyType=='returnJourney');
    this.allJournies = false;
    this.returnJourney = true;
    this.outboundJourney = false;
  }
  getOutboundJourney(){
    this.journies = this.journey_data.filter(x=>x.journeyType=='outboundJourney');
    this.allJournies = false;
    this.returnJourney = false;
    this.outboundJourney = true;
  }
  todayJournies=[
    {type:'all',label:'إجمالي عدد الرحلات : ',activityName:'عدد الرحلات',count:'28',percent:'70'},
    {type:'active',label:' عدد الرحلات الفعالة الآن : ',activityName:'طلبات الغياب',count:'9',percent:'15'},
  ];
  strokArray:any[] = this.todayJournies.map(val=>`${val.percent}, 100`);
  
  groups=[
    {id:1,name:'المجموعة الاولى',studentCount:19},
    {id:3,name:'المجموعة الثانية',studentCount:13},
    {id:2,name:'المجموعة الثالثة',studentCount:15},
    {id:4,name:'المجموعة الرابعة',studentCount:8},
    {id:5,name:'المجموعة الخامسة',studentCount:14},
    {id:6,name:'المجموعة السادسة',studentCount:10},
    {id:7,name:'المجموعة السابعة',studentCount:29},
    {id:8,name:'المجموعة الثامنة',studentCount:39},
    {id:9,name:'المجموعة التاسعه',studentCount:18},
    {id:10,name:'المجموعة العاشرة',studentCount:20},
  ];
  ngOnInit(): void {
    this.getAllJourney();
  }
  showJourney(type:any){
    if(type=='all'){
      this.isAllJourneySelected = true;
      this.isActiveJourneySelected = false;
    }else{
      this.isActiveJourneySelected = true;
      this.isAllJourneySelected = false;
    }
  }

}
