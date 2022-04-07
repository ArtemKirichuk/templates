import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[Host]'
})
export class DirGagDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
