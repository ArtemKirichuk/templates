import { Injectable } from '@angular/core';
import { ItemDescription } from './item-description';
import { InterpolationComponent } from './description/interpolation/interpolation.component';
import { TemplateStatemantComponent } from './description/template-statemant/template-statemant.component';
import { PipeComponent } from './description/pipe/pipe.component';
import { PropBindComponent } from './description/prop-bind/prop-bind.component';
import { ClassStyleAttrComponent } from './description/class-style-attr/class-style-attr.component';
import { EventBindingComponent } from './description/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './description/two-way-binding/two-way-binding.component';

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
        new ItemDescription(EventBindingComponent,
          {
            name: 'Привязка событий',
            id: 'EventBindingComponent'
          }),
          new ItemDescription(TwoWayBindingComponent,
            {
              name: 'Two way binding',
              id: 'TwoWayBindingComponent'
            }),
    ]
  }
}
