import { Component, Input, OnInit } from '@angular/core';
import { DescriptionComponent } from '../../description.component';


@Component({
  selector: 'app-prop-bind',
  templateUrl: './prop-bind.component.html',
  styleUrls: ['./prop-bind.component.scss']
})
export class PropBindComponent implements OnInit, DescriptionComponent {
  @Input() data: any;
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  classes = 'bgblue';
  parentValue = 'I\'am parent value';
  isDisabled= true;
  constructor() { }
  urlImg = 'assets/angular.png'
  ngOnInit(): void {
  }

}
@Component({
  selector: 'app-item-detail',
  template: `<p>{{childValue}}</p>`,
})
export class childItemComponent implements OnInit {
  @Input() childValue: any;
  constructor() { }
  
  ngOnInit(): void {
  }

}

