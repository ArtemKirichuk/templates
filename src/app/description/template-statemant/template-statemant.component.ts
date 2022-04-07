import { Component, Input, OnInit } from '@angular/core';
import { DescriptionComponent } from 'src/app/description.component';
@Component({
  selector: 'app-template-statemant',
  templateUrl: './template-statemant.component.html',
  styleUrls: ['./template-statemant.component.scss']
})
export class TemplateStatemantComponent implements DescriptionComponent {
  @Input() data: any;

}
