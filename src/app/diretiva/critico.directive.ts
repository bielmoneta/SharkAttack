import { Directive, Host, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCritico]'
})
export class CriticoDirective {

  @Input() appCritico = '';
  @HostBinding('style.border') border !: string;

  constructor() { }

  ngOnInit() {
    if (this.appCritico === 'Y') {
      this.border = '2px solid red';
    } else
      this.border = '2px solid orange';
  }

}
