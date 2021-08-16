import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPhone'
})
export class CustomPhonePipe implements PipeTransform {

  transform(value: string, regexValue: string, replaceValue: string): any {
    let addStr = '(+84)'
    let regex = new RegExp(regexValue, 'g');
    return addStr + value.replace(regex, replaceValue);
  }
}
