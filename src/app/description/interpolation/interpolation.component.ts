import { Component, Input, OnInit } from '@angular/core';
import { DescriptionComponent } from 'src/app/description.component';
@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements DescriptionComponent {
  @Input() data: any;


}
