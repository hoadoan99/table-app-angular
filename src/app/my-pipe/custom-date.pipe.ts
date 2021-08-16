import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
    transform(input: string) {
       var datePipe = new DatePipe("en-US");
        input = datePipe.transform(input, 'dd/MM/yyyy');
        return input;
    }
}
