import { Component, Input, OnInit } from '@angular/core';
import { DescriptionComponent } from 'src/app/description.component';
@Component({
  selector: 'app-template-statemant',
  templateUrl: './template-statemant.component.html',
  styleUrls: ['./template-statemant.component.scss']
})

export class TemplateStatemantComponent implements DescriptionComponent {
  @Input() data: any;
  names:string[]= [
    "Александр" , "Кирилл", "Анастасия"
  ]
  onShowName(name?:string,event?:MouseEvent){
    
    window.alert(name);
  }
  onEvent(e:MouseEvent){
    var context = (e.target as HTMLElement).textContent
    window.alert(context);
  }
  onShowElement(element:any){
    window.alert((element.tagName +"backgraund = red"));
    element.style.backgroundColor = 'red';
    
  }
  
}
