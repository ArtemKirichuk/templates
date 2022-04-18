import { Component, Input, OnInit } from '@angular/core';
import { DescriptionComponent } from 'src/app/description.component';


@Component({
  selector: 'app-class-style-attr',
  templateUrl: './class-style-attr.component.html',
  styleUrls: ['./class-style-attr.component.scss']
})
export class ClassStyleAttrComponent implements OnInit, DescriptionComponent {
  @Input() data: any;
  expression='qwe';
  actionName='hello i am attribut';
  oCss = {bgRed:true, textWhite:false};
  constructor() { }

  ngOnInit(): void {
  }

}
import { Attribute } from '@angular/core';

@Component({
  selector: 'app-my-input-with-attribute-decorator',
  template: '<p>The type of the input is: {{ type }}</p>'
})
export class MyInputWithAttributeDecoratorComponent {
  constructor(@Attribute('type') public type: string) {
    console.log('@Attribute type: '+type);
   }
}
