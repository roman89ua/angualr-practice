import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
  pure: false,
})
export class FilterByPipe implements PipeTransform {
  transform(value: any, filterString: string, propKey: string) {
    if (Array.isArray(value) && !!value.length) {
      return value.filter((element) => element[propKey].includes(filterString));
    }
    return value;
  }
}
