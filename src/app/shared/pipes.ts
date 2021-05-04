import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'daysDifference'
})

export class DaysDifferencePipe implements PipeTransform {
    transform(from: string): number {
        if(from){
          return moment(Date.now()).diff(moment(from),'days');
        }else{
            return 0;
        }
    }
}


@Pipe({
  name: 'numberSuffix'
})
export class NumberSuffixPipe implements PipeTransform {
  transform(input: number, args: number): string {
    const suffixes = ['K', 'M', 'B', 'T', 'P', 'E'];

    if (Number.isNaN(input) || (input < 1000 && input >= 0) || (input < 0 && input > -1000)) {
      if (!(input < 0) && input != 0) {
        return input.toFixed();
      } else {
        return input.toString();
      }
    }

    const exp = Math.floor(Math.log(input) / Math.log(1000));
    return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
  }
}