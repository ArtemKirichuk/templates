import { Component, Input, OnInit } from '@angular/core';
import { DescriptionComponent } from '../../description.component';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit, DescriptionComponent {
@Input()data: any;
clickMessage='';
  constructor() { }
  aIds = [0,1,2,3,4];
  fnIEvent(){
    window.alert('i\'am event');
  }
  ngOnInit(): void {
  }
  fnDelete(id:number){
     this.aIds.splice(this.aIds.indexOf(id),1);
  }
  fnAddUtem(){
    this.aIds.push(this.aIds[this.aIds.length -1]+1)
  }
  fnScrollCard(){
    console.log('scroll detected');
  }
}
