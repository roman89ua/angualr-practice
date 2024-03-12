import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorter',
})
export class ShorterPipe implements PipeTransform {
  transform(value: any, limit: number) {
    if (!!value && value?.length >= limit) {
      return value?.substring(0, limit) + ' ...';
    }
    return value;
  }
}
