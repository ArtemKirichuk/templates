import { Component, Input, OnInit } from '@angular/core';
import { DescriptionComponent } from '../../description.component';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})

export class InterpolationComponent implements DescriptionComponent {
  @Input() data: any;
  sText:string = 
  "Интерполяция - позволяет динамически соединять строчные значения с HTML  шаблоном. С помощью {{ что-то }}"
}
