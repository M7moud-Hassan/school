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

  addNewStudent(model:any):Observable<ResponseModel>{
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
