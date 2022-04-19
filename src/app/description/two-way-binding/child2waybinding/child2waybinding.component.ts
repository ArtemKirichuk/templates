import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2waybinding',
  templateUrl: './child2waybinding.component.html',
  styleUrls: ['./child2waybinding.component.scss']
})
export class Child2waybindingComponent implements OnInit {
  @Input() count!: number ;
  @Output() countChange = new EventEmitter<number>();
  constructor() { }
  inc(){
    this.calculate(+1)
  }
  dec(){
    this.calculate(-1)
  }
  calculate(number:number){
    // this.countChange.emit(Number(this.count)+number);
    this.countChange.emit(this.count+number);
  }
  ngOnInit(): void {
  }

}
