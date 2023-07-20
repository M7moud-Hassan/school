import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-parents-list',
  templateUrl: './parents-list.component.html',
  styleUrls: ['./parents-list.component.css']
})
export class ParentsListComponent implements OnInit{
  childrenNumber:any  = [...Array(11).keys()].splice(1,10);
  ngOnInit(): void {
  }

  isSchoolAccountDropdownVisible:boolean = false;
  
  parents_data = [
    {id:1,name:'حساب ولى الأمر 1',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/01',isActive:false,childrenInfo:[{
      id:100,
      name:'الابـــن 1',
      phone:'055251521252'
    }]},
    {id:2,name:'حساب ولى الأمر 2',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/06',isActive:false,childrenInfo:
    [
      { id:101, name:'الابـــن 1', phone:'055251521252'},
      { id:102, name:'الابـــن 2', phone:'055251521252'},
      { id:103, name:'الابـــن 3', phone:'055251521252'},
      { id:104, name:'الابـــن 4', phone:'055251521252'},
      { id:105, name:'الابـــن 5', phone:'055251521252'},
    ]},
    {id:3,name:'حساب ولى الأمر 3',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/05',isActive:true,childrenInfo:[{
      id:111,
      name:'الابـــن 1',
      phone:'055251521252'
    }]},
    {id:4,name:'حساب ولى الأمر 4',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/08',isActive:true,childrenInfo:
    [
      { id:106, name:'الابـــن 1', phone:'055251521252'},
      { id:107, name:'الابـــن 2', phone:'055251521252'},
      { id:108, name:'الابـــن 3', phone:'055251521252'},
      { id:109, name:'الابـــن 4', phone:'055251521252'},
    ]},
    {id:5,name:'حساب ولى الأمر 5',phone:'047868736783',isSelected:false,lastActiveDate:'2023/06/25',isActive:true,childrenInfo:[{
      id:112,
      name:'الابـــن 1',
      phone:'055251521252'
    }]},
    {id:6,name:'حساب ولى الأمر 6',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/04',isActive:false,childrenInfo:
    [
      { id:121, name:'الابـــن 1', phone:'055251521252'},
      { id:122, name:'الابـــن 2', phone:'055251521252'},
      { id:123, name:'الابـــن 3', phone:'055251521252'},
      { id:124, name:'الابـــن 4', phone:'055251521252'},
      { id:125, name:'الابـــن 5', phone:'055251521252'},
    ]},
    {id:16,name:' 1حساب ولى الأمر 6',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/03',isActive:false,childrenInfo:[{
      id:113,
      name:'الابـــن 1',
      phone:'055251521252'
    }]},
    {id:7,name:'حساب ولى الأمر 7',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/05',isActive:false,childrenInfo:
    [
      { id:131, name:'الابـــن 1', phone:'055251521252'},
      { id:132, name:'الابـــن 2', phone:'055251521252'},
    ]},
    {id:8,name:'حساب ولى الأمر 8',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/09',isActive:false,childrenInfo:[{
      id:114,
      name:'الابـــن 1',
      phone:'055251521252'
    }]},
    {id:9,name:'حساب ولى الأمر 9',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/15',isActive:false,childrenInfo:
    [
      { id:141, name:'الابـــن 1', phone:'055251521252'},
      { id:142, name:'الابـــن 2', phone:'055251521252'},
      { id:143, name:'الابـــن 3', phone:'055251521252'},
      { id:144, name:'الابـــن 4', phone:'055251521252'},
      { id:145, name:'الابـــن 5', phone:'055251521252'},
    ]},
    {id:10,name:'حساب ولى الأمر 10',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/08',isActive:true,childrenInfo:[{
      id:115,
      name:'الابـــن 1',
      phone:'055251521252'
    }]},
    {id:11,name:'حساب ولى الأمر 11',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/14',isActive:false,childrenInfo:
    [
      { id:151, name:'الابـــن 1', phone:'055251521252'},
      { id:152, name:'الابـــن 2', phone:'055251521252'},
      { id:153, name:'الابـــن 3', phone:'055251521252'},
      { id:154, name:'الابـــن 4', phone:'055251521252'},
    ]},
    {id:12,name:'حساب ولى الأمر 12',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/11',isActive:true,childrenInfo:[{
      id:116,
      name:'الابـــن 1',
      phone:'055251521252'
    }]},
    {id:13,name:'حساب ولى الأمر 13',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/12',isActive:false,childrenInfo:
    [
      { id:161, name:'الابـــن 1', phone:'055251521252'},
      { id:162, name:'الابـــن 2', phone:'055251521252'},
      { id:163, name:'الابـــن 3', phone:'055251521252'},
    ]},
    {id:14,name:'حساب ولى الأمر 14',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/01',isActive:false,childrenInfo:[{
      id:117,
      name:'الابـــن 1',
      phone:'055251521252'
    }]},
    {id:15,name:'حساب ولى الأمر 15',phone:'047868736783',isSelected:false,lastActiveDate:'2023/07/03',isActive:false,childrenInfo:
    [
      { id:171, name:'الابـــن 1', phone:'055251521252'},
      { id:172, name:'الابـــن 2', phone:'055251521252'},
      { id:173, name:'الابـــن 3', phone:'055251521252'},
      { id:174, name:'الابـــن 4', phone:'055251521252'},
      { id:175, name:'الابـــن 5', phone:'055251521252'},
    ]},
  ];

  pageNo: number = 1;
  pageSize: number = 10;
  total :number =  this.parents_data.length;

  selectAll:boolean = false;
  


  detailsVisible: boolean[] = [false, false, false];

  toggleDetails(row: number) {
    this.detailsVisible[row - 1] = !this.detailsVisible[row - 1];
  }

  isDetailsVisible(row: number) {
    return this.detailsVisible[row - 1];
  }
  toggleSelectAll(){
    this.parents_data.forEach(e=>e.isSelected=this.selectAll);
  }
  checkBoxChange(){
    if(this.isAllCheckboxSelected()) this.selectAll=true;
    else this.selectAll=false;
  }
  isAllCheckboxSelected(){
    return this.parents_data.every(e=>e.isSelected==true);
  }
  get getAllSelectedItems(){
    return this.parents_data.filter(e=>e.isSelected);
  }

  toggleSchoolAccountDropDown(){
    this.isSchoolAccountDropdownVisible = ! this.isSchoolAccountDropdownVisible;
  }
}