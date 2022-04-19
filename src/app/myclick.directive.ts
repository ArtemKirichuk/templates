import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[myClick]'
})
export class MyclickDirective {
  @Output('myClick') clicks = new EventEmitter<string>(); //  @Output(alias) propertyName = ...
  toggle = false;
  constructor(el: ElementRef) {
    
    el.nativeElement
      .addEventListener('click', (event: Event) => {
        this.toggle = !this.toggle;
        this.clicks.emit(this.toggle ? 'Click!' : '');
      });
  }

}


