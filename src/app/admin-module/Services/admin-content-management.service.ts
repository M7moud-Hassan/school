import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/schools-module/Core/Models/response-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminContentManagementService {

  constructor(private http:HttpClient) { }
  
  addContact(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getConentData(){
    return {
      title:'<p>this is the title</p>',
      content:'<p><b>this is the content</b></p>'
    };
  }
  editImageHomeSetting(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  editFeatureSetting(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  editPartner(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  editTargetData(model:any):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${environment.baseApiUrl}/`,model);
  }
  getHomeData(){
    return {
      title:'<p><strong style="font-size: 50px;">باص واي Basway </strong></p>',
      content:'<p style="font-size: 18px;">المفضل عند الطلاب و أولياء الأمور و المدارس و المشرفين</p>',
      image:'/assets/images/home-bus.svg'
    };
  }
  getHowWeWorksData(){
    return {
      title:"<h1 style='text-align:center'>كيف نعمل</h1><p>من المزعج جدا هو انتظار الطالب / الطالبة للباص المدرسي خارج المنزل , خشية أن يذهب الباص من دون معرفة الطالب بوصوله . وهذا قد يعرض الطالب / الطالبة لعدة مشاكل وعدم ارتياح لعملية النقل المدرسي . كما أن ولي الأمر لا يعلم عن وقت صعود ابنه للباص المدرسي و وقت وصوله للمدرسة وأيضا وقت وصوله للمنزل في رحلة العودة. مع باص واي يستطيع ولي الامر و الطالب و إدارة المدرسة معرفة الموقع الفعلي للباص المدرسي والتواصل المباشر مع السائق وصول تنبيهات لولي الأمر بصعود الطالب للباص وصوله للمدرسة. في باص واي , تم العمل بجهد كبير و شغف عظيم للوصل إلى أفضل الحلول التي تضمن راحة ولي الأمر والطالب و تبقي إدارة المدرسة أو المؤسسة على اطلاع دقيق في موقع الباص المدرسي. مع باص واي ... كن مطمئن</p>",
      image:'/assets/images/home-bus.svg'
    };
  }
  loadImageHomeSetting(){
    return {
      image:'/assets/images/home-bus.svg',
      imageSize:'615 * 411',
      alignment: 'right'
    };
  }
  loadPartnersData(){
    return {
      image:'/assets/images/home-bus.svg',
      title:'<h2>شركاء بادلونا الثقة</h2>',
      partners:[
        {id:1,name:"شريك رقم 01"},
        {id:2,name:"شريك رقم 02"},
        {id:3,name:"شريك رقم 03"},
        {id:4,name:"شريك رقم 04"},
        {id:5,name:"شريك رقم 05"},
        {id:6,name:"شريك رقم 06"},
        {id:7,name:"شريك رقم 07"},
        {id:8,name:"شريك رقم 08"},
        {id:9,name:"شريك رقم 09"},
        {id:0,name:"شريك رقم 00"},
        {id:10,name:"شريك رقم 010"},
      ]
    };
  }
  loadFeaturesData(){
    return {
      image:'/assets/images/home-bus.svg',
      title:'<h1>مميزات باص واي Busway</h1>',
      featureNo_1:"<img width='70' height='70' style='margin-left:100px' src='/assets/images/Location.svg'/><h3>تسجيل الغياب</h3><p> يمكن للمستفيد من الخدمة معرفة الموقع الفعلي للباص المدرسي ومعرفة موقع الطالب بعد صعودة للباص المدرسي . مما يتيح للطالب / العميل الاستعداد قبل وصول الباص المدرسي فيزيد نسبة الأمان للمستفيد من الخدمة.</p>",
      featureNo_2:"<img width='70' height='70' style='margin-left:100px' src='/assets/images/Location.svg'/><h3>تتبع الباص المدرسي /الطلاب على الخريطة</h3><p> يمكن للمستفيد من الخدمة معرفة الموقع الفعلي للباص المدرسي ومعرفة موقع الطالب بعد صعودة للباص المدرسي . مما يتيح للطالب / العميل الاستعداد قبل وصول الباص المدرسي فيزيد نسبة الأمان للمستفيد من الخدمة.</p>",
      featureNo_3:"<img width='70' height='70' style='margin-left:100px' src='/assets/images/Location.svg'/><h3>تواصل مع المدرسة</h3><p> يمكن للمستفيد من الخدمة معرفة الموقع الفعلي للباص المدرسي ومعرفة موقع الطالب بعد صعودة للباص المدرسي . مما يتيح للطالب / العميل الاستعداد قبل وصول الباص المدرسي فيزيد نسبة الأمان للمستفيد من الخدمة.</p>",
      featureNo_4:"<img width='70' height='70' style='margin-left:100px' src='/assets/images/Location.svg'/><h3>سهل الاستخدام</h3><p> يمكن للمستفيد من الخدمة معرفة الموقع الفعلي للباص المدرسي ومعرفة موقع الطالب بعد صعودة للباص المدرسي . مما يتيح للطالب / العميل الاستعداد قبل وصول الباص المدرسي فيزيد نسبة الأمان للمستفيد من الخدمة.</p>",
      featureNo_5:"<img width='70' height='70' style='margin-left:100px' src='/assets/images/Location.svg'/><h3>اشعارات لكل شيء</h3><p> يمكن للمستفيد من الخدمة معرفة الموقع الفعلي للباص المدرسي ومعرفة موقع الطالب بعد صعودة للباص المدرسي . مما يتيح للطالب / العميل الاستعداد قبل وصول الباص المدرسي فيزيد نسبة الأمان للمستفيد من الخدمة.</p>",
      featureNo_6:"<img width='70' height='70' style='margin-left:100px' src='/assets/images/Location.svg'/><h3>تسجيل الغياب</h3><p> يمكن للمستفيد من الخدمة معرفة الموقع الفعلي للباص المدرسي ومعرفة موقع الطالب بعد صعودة للباص المدرسي . مما يتيح للطالب / العميل الاستعداد قبل وصول الباص المدرسي فيزيد نسبة الأمان للمستفيد من الخدمة.</p>",
    };
  }
  loadPopupTargetImageData(){
    return { image: '/assets/images/driver-target-img.svg', label: 'سائقي الباصات', shape: 'square', imageSize: '615 * 411', shapeSize: '615 * 411', shapeColor: '#CEEAF4', };
  }
  loadTheTargetersData() {
    return {
      image:'/assets/images/home-bus.svg',
      title: '<p><strong style="font-size: 23px;">المستهدفون من <span style="color:#3AA7CE">باص واي</span></strong></p>',
      details: '<p style="font-size: 18px;">حلول جذرية يقدمها تطبيق باص واي Busway و يستهدف جميع المستفيدين والمقدمين لخدمات النقل المدرسي سواء كانت شركات النقل او المدرسة أو الطالب أو ولي الأمر.. وبهذا يتميز تطبيق باص واي Busway بخلق بيئة نقل مدرسي آمن و مريح مع باص واي.. كن مطمئن .  </p>',
      imagesData: [
        { image: '/assets/images/driver-target-img.svg', label: 'سائقي الباصات', shape: '/assets/images/driver-target-shape.svg', imageSize: '615 * 411', shapeSize: '615 * 411', shapeColor: '#CEEAF4', },
        { image: '/assets/images/parent-target-img.svg', label: 'أولياء الأمور', shape: '/assets/images/parent-target-shape.svg', imageSize: '615 * 411', shapeSize: '615 * 411', shapeColor: '#F5CDC5', },
        { image: '/assets/images/students-target-img.svg', label: 'طلبة المدارس', shape: '/assets/images/students-target-shape.svg', imageSize: '615 * 411', shapeSize: '615 * 411', shapeColor: '#DFD9F4', },
        { image: '/assets/images/school-target-img.svg', label: 'مدارس_ مراكز', shape: '/assets/images/school-target-shape.svg', imageSize: '615 * 411', shapeSize: '615 * 411', shapeColor: '#F3D2F0', },
      ]
    };
  }
}
export interface adminTargetDataModel{
  image:any,
  label:any,
  shape:any,
  imageSize:any,
  shapeSize:any,
  shapeColor:any,
}
export interface featuresModel{
  title:any,
  image:any,
  description:any,
}
