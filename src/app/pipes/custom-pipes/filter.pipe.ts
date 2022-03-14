import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTerm : string): any[] {
    console.log('search Term', searchTerm)
    return value.filter((search: any) => {
      return search.lastName.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1
    });
  }

}
