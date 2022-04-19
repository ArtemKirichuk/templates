import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-event-emmiter',
  templateUrl: './child-event-emmiter.component.html',
  styleUrls: ['./child-event-emmiter.component.scss']
})
export class ChildEventEmmiterComponent implements OnInit {
  @Input() number:number = 0;
  @Output() delete = new EventEmitter<number>();
  constructor() { }
  
  
  ngOnInit(): void {
  }
  fnDelete(){
    console.log(this.number);
    this.delete.emit(this.number);
  }

}
