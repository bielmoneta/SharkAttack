import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'fatal'
})
export class FatalPipe implements PipeTransform {
    transform(value: string): string {
        const fatal: any = {
        'Y': '🩸 Fatal',
        'N': '🩹 Não fatal'
        };
        return fatal[value] || '';
    }
}