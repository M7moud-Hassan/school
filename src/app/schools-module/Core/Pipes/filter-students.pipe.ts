import { Pipe, PipeTransform } from '@angular/core';
import { MainService } from '../../Services/main.service';

@Pipe({
  name: 'filterStudents'
})
export class FilterStudentsPipe implements PipeTransform {
   constructor(private service:MainService){}
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}


/*
transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
*/