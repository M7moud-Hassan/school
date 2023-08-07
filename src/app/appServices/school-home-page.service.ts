import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../schools-module/Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SchoolHomePageService {

  constructor(private http:HttpClient) { }

  sendContactUs(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getBusWaySection_1_data():busWaySection_1_model{
    let model:busWaySection_1_model = {
      image:'/assets/images/home-bus.svg',
      title:'باص واي Basway',
      description:'المفضل عند الطلاب و أولياء الأمور و المدارس و المشرفين',
      downloadAppUrl:'www.googleplay.com'
    }; 
    return model;
  }
  getFeaturesSection_2_data():featureSection_2_model[]{
    return [
      {title:'تتبع الباص المدرسي /الطلاب على الخريطة',image:'/assets/images/location-traching-light.svg',description:' يمكن للمستفيد من الخدمة معرفة الموقع الفعلي للباص المدرسي ومعرفة موقع الطالب بعد صعودة للباص المدرسي . مما يتيح للطالب / العميل الاستعداد قبل وصول الباص المدرسي فيزيد نسبة الأمان للمستفيد من الخدمة.'},
      {title:'تواصل مع المدرسة',image:'/assets/images/messageLight.svg',description:'مع خدمة الرسائل الفورية , يتسطيع الطالب و ولي الأمر التواصل مباشرة مع المدرسة من خلال التطبيق مما يوفر بيئة تواصل مميزة وفعالة.'},
      {title:'تسجيل الغياب',image:'/assets/images/noteBookLight.svg',description:'ستطيع ولي الأمر أو الطالب تسجيل غياب من خلال التطبيق في حالة عدم رغبتة بالذهاب بالباص المدرسي لأي يوم من الأسبوع.'},
      {title:'اشعارات لكل شيء',image:'/assets/images/notificationLight.svg',description:'مع خدمة الإشعارات الفورية بنغمتها المميزة , تكون على اطلاع مستمر على كل ما يطرأ على حركة الباص المدرسي , مع وصول تنبيهات ألية متزامنه مع الموقع الفعلي للباص المدرسي , كما يمتاز التطبيق بوجود التنبه الصوتي عند وصول الباص المدرسي للمنزل. '},
      {title:'سهل الاستخدام',image:'/assets/images/easy-use-light.svg',description:'بساطة التصيمم وسهولة الاستخدام هي أبرز ما يميز تطبيق باص واي , ألوان التصميم و أيقوانته , صممت بشكل دقيق جداد لضمان سهولة الاستخدام لجميع فئات المستخدمين.'},
    ];
  }
  loadTheTargetersData() {
    return {
      image:'/assets/images/home-targeters.svg',
      title: '<p style="font-size: 30px;" ><strong style="font-size: 23px;">المستهدفون من <span style="color:#3AA7CE">باص واي</span></strong></p>',
      details: '<p style="font-size: 18px;">حلول جذرية يقدمها تطبيق باص واي <span style="color:#3AA7CE">Busway</span> و يستهدف جميع المستفيدين والمقدمين لخدمات النقل المدرسي سواء كانت شركات النقل او المدرسة أو الطالب أو ولي الأمر.. وبهذا يتميز تطبيق باص واي Busway بخلق بيئة نقل مدرسي آمن و مريح مع باص واي.. كن مطمئن .  </p>',
      imagesData: [
        { image: '/assets/images/driver-target-img.svg', label: 'سائقي الباصات', shape: '/assets/images/driver-target-shape.svg', imageSize: '615 * 411', shapeSize: '615 * 411', shapeColor: '#CEEAF4', },
        { image: '/assets/images/parent-target-img.svg', label: 'أولياء الأمور', shape: '/assets/images/parent-target-shape.svg', imageSize: '615 * 411', shapeSize: '615 * 411', shapeColor: '#F5CDC5', },
        { image: '/assets/images/students-target-img.svg', label: 'طلبة المدارس', shape: '/assets/images/students-target-shape.svg', imageSize: '615 * 411', shapeSize: '615 * 411', shapeColor: '#DFD9F4', },
        { image: '/assets/images/school-target-img.svg', label: 'مدارس_ مراكز', shape: '/assets/images/school-target-shape.svg', imageSize: '615 * 411', shapeSize: '615 * 411', shapeColor: '#F3D2F0', },
      ]
    };
  }
  getHowWeWorkSection_4_data(){
    let model = {
      image:'/assets/images/how-w-work.svg',
      title:'كيف نعمل',
      description:'من المزعج جدا هو انتظار الطالب / الطالبة للباص المدرسي خارج المنزل , خشية أن يذهب الباص من دون معرفة الطالب بوصوله . وهذا قد يعرض الطالب / الطالبة لعدة مشاكل وعدم ارتياح لعملية النقل المدرسي . كما أن ولي الأمر لا يعلم عن وقت صعود ابنه للباص المدرسي و وقت وصوله للمدرسة وأيضا وقت وصوله للمنزل في رحلة العودة. مع باص واي يستطيع ولي الامر و الطالب و إدارة المدرسة معرفة الموقع الفعلي للباص المدرسي والتواصل المباشر مع السائق وصول تنبيهات لولي الأمر بصعود الطالب للباص وصوله للمدرسة. في باص واي , تم العمل بجهد كبير و شغف عظيم للوصل إلى أفضل الحلول التي تضمن راحة ولي الأمر والطالب و تبقي إدارة المدرسة أو المؤسسة على اطلاع دقيق في موقع الباص المدرسي. مع باص واي ... كن مطمئن',
    }; 
    return model;
  }
  loadTheBusWaySection_5_Data() {
    return {
      image:'/assets/images/logo_busway.svg',
      appUrl: 'www.googleplay.com',
      keypoints: [
      {title:'التحكم الكامل في عملية النقل المدرسي'},  
      {title:'متابعة موقع الباص على الخريطة'},  
      {title:'معرفة حالة الرحلة الخاصة بكل طالب'},  
      {title:'مواقع الطلاب على الخريطة'},  
      {title:'تبديل السائق و ادارة المجموعات بسهولة'},  
      {title:'تقارير فورية و مفصلة عن كل رحلة'},  
      {title:'التواصل السريع مع السائق و أولياء الأمور'}, 
      ]
    };
  }
  getFooterData(){
    return {
      location:{
        image:'/assets/images/footer-white-location.svg',
        title:'المملكة العربية السعودية - القصيم'
      },
      mail:{
        image:'/assets/images/footer-white-envalop.svg',
        title:'masarksa707@gmail.com'
      },
      whatsapp:{
        image:'/assets/images/footer-white-whatsapp.svg',
        title:'0555227377'
      },
      call:{
        image:'/assets/images/footer-white-call.svg',
        title:'0555227377'
      },
      socialLinks:[
        {image:'/assets/images/footer-facebook.svg',url:'www.facebook.com'},
        {image:'/assets/images/footer-instagram.svg',url:'www.instagram.com'},
        {image:'/assets/images/footer-telegram.svg',url:'www.telegram.com'},
        {image:'/assets/images/footer-twitter.svg',url:'www.twitter.com'},
        {image:'/assets/images/footer-whatsapp.svg',url:'www.whatsapp.com'},
        {image:'/assets/images/footer-snapchat.png',url:'www.snapchat.com'},
      ]
    }
  }
  loadPartnersSection6(){
    return [
      { id: 1, name: "شريك رقم 01" },
      { id: 2, name: "شريك رقم 02" },
      { id: 3, name: "شريك رقم 03" },
      { id: 4, name: "شريك رقم 04" },
      { id: 5, name: "شريك رقم 05" },
      { id: 6, name: "شريك رقم 06" },
      { id: 7, name: "شريك رقم 07" },
      { id: 8, name: "شريك رقم 08" },
      { id: 9, name: "شريك رقم 09" },
      { id: 0, name: "شريك رقم 00" },
      { id: 10, name: "شريك رقم 010" },

      { id: 11, name: "شريك رقم 011" },
      { id: 12, name: "شريك رقم 012" },
      { id: 13, name: "شريك رقم 013" },
      { id: 14, name: "شريك رقم 014" },
      { id: 15, name: "شريك رقم 015" },
      { id: 16, name: "شريك رقم 016" },
      { id: 17, name: "شريك رقم 017" },
      { id: 18, name: "شريك رقم 018" },
      { id: 19, name: "شريك رقم 019" },
      { id: 20, name: "شريك رقم 020" },

      { id: 21, name: "شريك رقم 021" },
      { id: 22, name: "شريك رقم 022" },
      { id: 23, name: "شريك رقم 023" },
      { id: 24, name: "شريك رقم 024" },
      { id: 25, name: "شريك رقم 025" },
      { id: 26, name: "شريك رقم 026" },
      { id: 27, name: "شريك رقم 027" },
      { id: 28, name: "شريك رقم 028" },
      { id: 29, name: "شريك رقم 029" },
      { id: 30, name: "شريك رقم 030" },

      { id: 31, name: "شريك رقم 031" },
      { id: 32, name: "شريك رقم 032" },
      { id: 33, name: "شريك رقم 033" },
      { id: 34, name: "شريك رقم 034" },
      { id: 35, name: "شريك رقم 035" },
      { id: 36, name: "شريك رقم 036" },
      { id: 37, name: "شريك رقم 037" },
      { id: 38, name: "شريك رقم 038" },
      { id: 39, name: "شريك رقم 039" },
      { id: 40, name: "شريك رقم 040" },

      
      { id: 41, name: "شريك رقم 041" },
      { id: 42, name: "شريك رقم 042" },
      { id: 43, name: "شريك رقم 043" },
      { id: 44, name: "شريك رقم 044" },
      { id: 45, name: "شريك رقم 045" },
      { id: 46, name: "شريك رقم 046" },
      { id: 47, name: "شريك رقم 047" },
      { id: 48, name: "شريك رقم 048" },
      { id: 49, name: "شريك رقم 049" },
      { id: 50, name: "شريك رقم 050" },
      
      { id: 51, name: "شريك رقم 051" },
      { id: 52, name: "شريك رقم 052" },
      { id: 53, name: "شريك رقم 053" },
      { id: 54, name: "شريك رقم 054" },
      { id: 55, name: "شريك رقم 055" },
      { id: 56, name: "شريك رقم 056" },
      { id: 57, name: "شريك رقم 057" },
      { id: 58, name: "شريك رقم 058" },
      { id: 59, name: "شريك رقم 059" },
      { id: 60, name: "شريك رقم 060" },
    ];
  }
  
}
export interface busWaySection_1_model{
  image:any,
  title:any,
  description:any,
  downloadAppUrl:any,
}
export interface featureSection_2_model{
  image:any,
  title:any,
  description:any,
}
