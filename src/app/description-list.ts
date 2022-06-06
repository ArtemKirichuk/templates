import { ItemDescription } from "./item-description";

import { InterpolationComponent } from './description/interpolation/interpolation.component';
import { TemplateStatemantComponent } from './description/template-statemant/template-statemant.component';
import { PipeComponent } from './description/pipe/pipe.component';
import { PropBindComponent } from './description/prop-bind/prop-bind.component';
import { ClassStyleAttrComponent } from './description/class-style-attr/class-style-attr.component';
import { EventBindingComponent } from './description/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './description/two-way-binding/two-way-binding.component';
import { TemplateVarComponent } from './description/template-var/template-var.component';
import { SvgComponent } from './description/svg/svg.component';
import { BuildinDirectivComponent } from './description/buildin-directiv/buildin-directiv.component';
import { AttrDirectiveComponent } from './description/attr-directive/struc-directive.component';
import { StrucDirectiveComponent } from './description/struc-directive/struc-directive.component';
import { DependencyInjectionComponent } from './description/dependency-injection/dependency-injection.component';
import { DependencyProvidersComponent } from './description/dependency-providers/dependency-providers.component';
import { RxJsComponent } from "./description/rx-js/rx-js.component";
export const aDescription: ItemDescription[] = [
    new ItemDescription(InterpolationComponent,
        {
            name: 'Интерполяция',
            id: 'InterpolationComponent'
        },
        'template'
    ),
    new ItemDescription(TemplateStatemantComponent,
        {
            name: 'Шаблонные операторы',
            id: 'TemplateStatemantComponent'
        },
        'template'),
    new ItemDescription(PipeComponent,
        {
            name: 'Pipe',
            id: 'PipeComponent'
        },
        'template'),
    new ItemDescription(PropBindComponent,
        {
            name: 'Привязка свойств',
            id: 'PropBindComponent'
        },
        'template'),
    new ItemDescription(ClassStyleAttrComponent,
        {
            name: 'Атрибуты Классы Стили',
            id: 'ClassStyleAttrComponent'
        },
        'template'),
    new ItemDescription(EventBindingComponent,
        {
            name: 'Привязка событий',
            id: 'EventBindingComponent'
        },
        'template'),
    new ItemDescription(TwoWayBindingComponent,
        {
            name: 'Two way binding',
            id: 'TwoWayBindingComponent'
        },
        'template'),
    new ItemDescription(TemplateVarComponent,
        {
            name: 'Шаблонные переменные',
            id: 'TemplateVarComponent'
        },
        'template'),
    new ItemDescription(SvgComponent,
        {
            name: 'SVG шаблон',
            id: 'SvgComponent'
        },
        'template'),
    new ItemDescription(BuildinDirectivComponent,
        {
            name: 'Встроенные директивы',
            id: 'BuildinDirectivComponent'
        },
        'directive'),
    new ItemDescription(AttrDirectiveComponent,
        {
            name: 'Аттрибутные директивы',
            id: 'AttrDirectiveComponent'
        },
        'directive'),
    new ItemDescription(StrucDirectiveComponent,
        {
            name: 'Структурные директивы',
            id: 'StrucDirectiveComponent'
        },
        'directive'),
    new ItemDescription(DependencyInjectionComponent,
        {
            name: 'Сервисы',
            id: 'DependencyInjectionComponent'
        },
        'injection'),
    new ItemDescription(DependencyProvidersComponent,
        {
            name: 'Dependency Providers',
            id: 'DependencyProvidersComponent'
        },
        'injection'),

        new ItemDescription(RxJsComponent ,
            {
                name: 'RxJS',
                id: 'RxJsComponent'
            },
            'devGuid'),
        
]