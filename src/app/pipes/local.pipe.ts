import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'local'
})
export class LocalPipe implements PipeTransform {
  transform(value: string): string {
    const pais: any = {
      'BRAZIL': '🇧🇷 Brasil',
    };
    return pais[value] || '';
  }
}