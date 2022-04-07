import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirGag]'
})
export class DirGagDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
