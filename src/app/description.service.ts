import { Injectable } from '@angular/core';
import { ItemDescription } from './item-description';
import { InterpolationComponent } from './description/interpolation/interpolation.component';
import { TemplateStatemantComponent } from './description/template-statemant/template-statemant.component';
import { PipeComponent } from './description/pipe/pipe.component';
import { PropBindComponent } from './description/prop-bind/prop-bind.component';
import { ClassStyleAttrComponent } from './description/class-style-attr/class-style-attr.component';

@Injectable()
export class DescriptionService {

  constructor() { }
  getContent() {
    return [
      new ItemDescription(InterpolationComponent,
        {
          name: 'Интерполяция',
          id: 'InterpolationComponent'
        }),
      new ItemDescription(TemplateStatemantComponent,
        {
          name: 'Шаблонные операторы',
          id: 'TemplateStatemantComponent'
        }),
      new ItemDescription(PipeComponent,
        {
          name: 'Pipe',
          id: 'PipeComponent'
        }),
      new ItemDescription(PropBindComponent,
        {
          name: 'Привязка свойств',
          id: 'PropBindComponent'
        }),
      new ItemDescription(ClassStyleAttrComponent,
        {
          name: 'Атрибуты Классы Стили',
          id: 'ClassStyleAttrComponent'
        }),
    ]
  }
}
