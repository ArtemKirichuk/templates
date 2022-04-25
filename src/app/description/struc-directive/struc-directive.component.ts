import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-struc-directive',
  templateUrl: './struc-directive.component.html',
  styleUrls: ['./struc-directive.component.scss']
})
export class StrucDirectiveComponent implements OnInit {
@Input() data: any;
bCond:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
