import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-struc-directive',
  templateUrl: './struc-directive.component.html',
  styleUrls: ['./struc-directive.component.scss']
})
export class AttrDirectiveComponent implements OnInit {
@Input() data: any;
sColor!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
