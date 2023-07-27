import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProxiesService {

  constructor() { }
  getAll():Proxies[]{
    return [
      {label:"الشمال12",date:"22 يوليو 2021"},
      {label:"Oman",date:"22 يوليو 2021"},
      {label:"Qatar",date:"22 يوليو 2021"},
      {label:"مسارات الرواد",date:"22 يوليو 2021"},
      {label:"شركة 5-Minutes - مصر",date:"22 يوليو 2021"},
      {label:"شركة أنجال المستقبل التعليمية",date:"22 يوليو 2021"},
      {label:"شركة براعم النجاح الأهلية",date:"22 يوليو 2021"},
    ]
  }
}
export interface Proxies{
  label:any,
  date:any,
}
