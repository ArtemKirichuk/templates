import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

export interface item {
  id?: number,
  name: string
}
export class clItem implements item {
  static count: number = 0
  static aItems: clItem[] = [
    new clItem('Катя', 1),
    new clItem('Петя', 2),
    new clItem('Antonio', 4),
    new clItem('Эдвард', 3)
  ];

  constructor(public name: string, public id: number) {
    clItem.count++;
    this.id = id ? id : clItem.count;
  }
  clone(): clItem {
    // debugger;
    return Object.assign(new clItem(this.name, this.id), this);
  }
  oData = { subName: 'subName' };
  info: string = '';
  setInfo(text: string) {
    this.info = text;
  }
  getInfo() {
    return this.info
  }
}
@Component({
  selector: 'app-buildin-directiv',
  templateUrl: './buildin-directiv.component.html',
  styleUrls: ['./buildin-directiv.component.scss']
})
export class BuildinDirectivComponent implements OnInit {
  @Input() data: any;
  constructor() { }
  oUser: any = null;
  isItaly: boolean = true;
  oItemSelected!:clItem;
  //для к
  isBgRed: boolean = false;
  sText: string = 'text';
  oItem: item = { name: 'item' }
  aItems: item[] = [{ name: 'Саша' }, { name: 'Катя' }, { name: 'Antonio' }];
  aClItems: clItem[] = [];
  isShowChild: boolean = true;
  //добавление при помощи метода 
  oCSSClasses: Record<string, boolean> = { 'bgRed': false, 'textWhite': false }
  oCSSStyle: Record<string, string> = { 'background-color': 'red', 'color': 'white' }
  fnChSCCObject() {
    this.oCSSClasses.bgRed = !this.oCSSClasses.bgRed;
    this.oCSSClasses.textWhite = !this.oCSSClasses.textWhite;

  }
  addUserName() {
    this.oUser = { name: 'name' };
  }
  fnToggleCss() {
    this.oCSSStyle['background-color'] = this.oCSSStyle['background-color'] == 'red' ? 'transparent' : 'red';
    this.oCSSStyle['color'] = this.oCSSStyle['color'] == 'white' ? 'black' : 'white';

  }
  ngOnInit(): void {
    this.aClItems = clItem.aItems.slice()
    // this.fnReset();
  }
  getValue(event: Event): string {

    return (event.target as HTMLInputElement).value;
  }
  //работа с trackBy
  fnGetId(i: number, item: clItem) {
    return item.id
  }
  fnSetInfo() {
    this.aClItems.forEach(i => {i.oData.subName = 'newSub' ; i.info = 'Hello i '+i.name });
    
  }
  fnReset() {
    this.aClItems = clItem.aItems.map(item => item.clone());

    // this.aClItems = clItem.aItems.slice();
  }
  fnChIds() {
    this.aClItems.forEach(i => i.id += 1);
  }
  fnClearTrackByCount() {

  }
}
