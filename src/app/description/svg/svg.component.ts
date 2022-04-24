import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
  @Input() data!: any;
  constructor() { }
  fillColor = 'rgb(255, 0, 0)';
  ngOnInit(): void {
  }
  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
