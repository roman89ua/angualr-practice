import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sortCollectionBy',
  pure: false,
})
export class SortCollectionByPipe implements PipeTransform {
  transform(value: any, order: 'asc' | 'desc', key: string) {
    if (Array.isArray(value) && value.length > 1) {
      return order === 'asc'
        ? value.sort((a, b) => {
            if (a[key] > b[key]) return 1;
            if (a[key] === b[key]) return 0;
            if (a[key] < b[key]) return -1;
          })
        : value.sort((a, b) => {
            if (a[key] < b[key]) return 1;
            if (a[key] === b[key]) return 0;
            if (a[key] > b[key]) return -1;
          });
    }
    return value;
  }
}
