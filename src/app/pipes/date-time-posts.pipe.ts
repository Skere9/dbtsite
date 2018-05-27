import { Pipe, PipeTransform } from '@angular/core';

import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateTimePosts'
})
export class DateTimePostsPipe implements PipeTransform {

  constructor (private datePipe: DatePipe) {

  }

 transform(theDate: any, args?: any): any {
 //  transform(): string {
    console.log('Inside the DateTimePostsPipe');
    console.log('Test');
    return ('TEST');
  }

}
