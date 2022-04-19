import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {
  @Input() data:any;
  number = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
