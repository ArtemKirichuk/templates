import { Injectable } from '@angular/core';
import { ItemDescription } from './item-description';
import { InterpolationComponent } from './description/interpolation/interpolation.component';
import { TemplateStatemantComponent } from './description/template-statemant/template-statemant.component';
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
    ]
  }
}
