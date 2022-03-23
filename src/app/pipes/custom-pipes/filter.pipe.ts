import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTerm : string, basedOn: string): any[] {
    console.log('search Term', searchTerm, 'basedOn', basedOn)
    return value.filter((search: any) => {
      return search.firstName.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1 ||
              search.lastName.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1 ||
              search.email.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1
      
    });
  }

}
