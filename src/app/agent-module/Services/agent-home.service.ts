import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentHomeService {

  constructor() { }
  
  getAllStatisctics():statisctics_Model[]{
    return [
      {label:'المستخدمين',count:130,image:'/assets/images/users.svg'},
      {label:'المشرفين',count:17,image:'/assets/images/supervisor.svg'},
      {label:'الرحلات',count:94,image:'/assets/images/journey.svg'},
      {label:'الإشتراكات',count:5,image:'/assets/images/blueSubscriptions.svg'},
    ];
  }
  getAllActivities():activities_Model[]{
    return [
      {label:'إجمالي عدد الرحلات : 30',activityName:'عدد الرحلات',count:'28',percent:'70'},
      {label:'إجمالي عدد رحلات اليوم : 30',activityName:'الرحلات الفعالة',count:'9',percent:'15'},
      {label:'إجمالي عدد المدارس : 30',activityName:'المدارس الفعالة',count:'س',percent:'58'},
    ];
  }
  getLastAddon():agentLastAddon[]{
    return [
      {id:1, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:2, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.png','/assets/images/user.svg','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:3, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/student.png','/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg',]},
      {id:4, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user_p.svg','/assets/images/user.svg','/assets/images/user.png','/assets/images/student.png']},
      {id:5, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:6, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png',]},
      {id:7, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:8, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:9, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/student.png']},
      {id:10, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:11, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:12, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},

    ];
  }
  getLastUpdates():agentLastUpdates[]{
    return [
      {id:1, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:2, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.png','/assets/images/user.svg','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:3, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/student.png','/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg',]},
      {id:4, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user_p.svg','/assets/images/user.svg','/assets/images/user.png','/assets/images/student.png']},
      {id:5, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:6, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png',]},
      {id:7, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:8, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:9, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/student.png']},
      {id:10, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:11, title:'قامت المدرسة رقم 01 بتغيير صورتها', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},
      {id:12, title:'قامت المدرسة رقم 01 بتغيير موقعها على الخريطة', description:'ثلاث مدارس قاموا بهذا', time:'11:30 ص', date:'12/04/2023', images:['/assets/images/user.svg','/assets/images/user.png','/assets/images/user_p.svg','/assets/images/student.png']},

    ];
  }
}

export interface statisctics_Model{
  label:any,
  count:any,
  image:any,
}
export interface activities_Model{
  label:any,
  activityName:any,
  count:any,
  percent:any,
}
export interface agentLastAddon{
  id:any,
  title:any,
  description:any,
  time:any,
  date:any,
  images:any,
}
export interface agentLastUpdates{
  id:any,
  title:any,
  description:any,
  time:any,
  date:any,
  images:any,
}