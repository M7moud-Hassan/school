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
    {label:'إجمالي عدد الطلاب : 30',activityName:'طلبات الغياب',count:'9',percent:'15'},
    {label:'إجمالي عدد الرحلات : 30',activityName:'عدد الرحلات',count:'28',percent:'70'},
    {label:'إجمالي عدد الرحلات اليوم : 30',activityName:'الرحلات الفعالة',count:'س',percent:'58'},
  ];
  strokArray:any[] = this.todayJournies.map(val=>`${val.percent}, 100`);

  ngOnInit(): void {
    this.getAllJourney();
  }

}
