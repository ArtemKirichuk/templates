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
  "Интерполяция - позволяет динамически соединять строчные значения с HTML  шаблоном. С помощью {{ что-то }}"+
  " можно выводить информацию из переменных класса компонента. Так же в скобках можно писать выражения. Angular"+
  "сначала вычисляет выражение,потом преобразует в строку и записывает в HTML. В выражениях также можно вызывать"+
   "методы компонента Синтаксис очень мохож на jsб но нельзя использовать выражения с сайд эфектом +=,-=..., оперции"+
   "операции по типу new, typeOf,instanceof, разделители ;, инкременты дикременты и др. |&?!"
}
