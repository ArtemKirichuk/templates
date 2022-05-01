import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ItemDescription } from '../item-description';
import { DirGagDirective } from '../dir-gag.directive';
import { DescriptionComponent } from '../description.component';
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() aContent:ItemDescription[] = [];
  @ViewChild(DirGagDirective,{static: true}) Host!:DirGagDirective;
  
  activeContent!:ItemDescription ;
  constructor() { }

  ngOnInit(): void {
    this.setDescriptionContent(this.aContent.length - 1);
  }
  setDescriptionContent(index:number){
    this.activeContent = this.aContent[index];
    const oContent = this.aContent[index];
    const refHost = this.Host.viewContainerRef;
    refHost.clear();
    const componentRef = refHost.createComponent<DescriptionComponent>(oContent.component);
    componentRef.instance.data = oContent.data;
  }
  onClickTheme(count:number){
    this.setDescriptionContent(count);
  }
}
