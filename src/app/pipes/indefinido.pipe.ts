import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'indefinido'
})

export class IndefinidoPipe implements PipeTransform {
transform(value: null): string {
  if (!value) {
    return 'Local não informado'; 
  }
  return value;
}

}