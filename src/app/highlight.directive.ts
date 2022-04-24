import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
// import { hostname } from 'os';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
@Input() appHighlight!: string;
@Input() defaultColor!: string;
sYellow = 'yellow';
  constructor(private el: ElementRef, ) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit(): void {
    this.defaultColor =    this.defaultColor ? this.defaultColor : this.sYellow;
  }
  fnHighlight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') onMousEnter() {
    this.fnHighlight( this.appHighlight ? this.appHighlight : this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.fnHighlight('');
  }
}
