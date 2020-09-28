import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBoldText]',
  exportAs: 'boldenText'
})
export class BoldTextDirective {
  @Input('appBoldText')
  isBoldened = false;
  constructor() { }

  @HostBinding('class.font-1')
  get boldText() {
    return this.isBoldened;
  }

  @HostListener('mouseover', ['$event'])
   unBolden($events) {
    console.log($events, 'events');
    this.isBoldened = false;
  }

  @HostListener('mouseleave', ['$events'])
  bollden($events) {
    console.log($events, 'mouse left events')
    this.isBoldened = true;
  }

  toggleBold() {
    return !this.isBoldened;
  }
}
