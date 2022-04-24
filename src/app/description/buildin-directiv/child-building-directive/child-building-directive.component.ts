import { Component, Input, OnInit } from '@angular/core';
import { item } from '../buildin-directiv.component';
@Component({
  selector: 'app-child-building-directive',
  templateUrl: './child-building-directive.component.html',
  styleUrls: ['./child-building-directive.component.scss']
})
export class ChildBuildingDirectiveComponent implements OnInit {
  @Input() name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
