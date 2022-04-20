import { Component, Input, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-var',
  templateUrl: './template-var.component.html',
  styleUrls: ['./template-var.component.scss']
})

export class TemplateVarComponent implements OnInit {
  @Input() data:any;
  firstExample!:string;
  secondExample!:string;
  heroes:{name:string}[] = [{ name: 'hero1'},{ name: 'hero2'},{ name: 'hero3'},{ name: 'hero3'},{ name: 'hero3'},{ name: 'hero3'}]
  //зачем так заморачиваться ?
  private _submitMessage!:string;
  get submitMessage() { return this._submitMessage; }
  @ViewChild('itemForm', { static: false }) form!: NgForm;
  constructor() { }
  onSubmit(form:NgForm){
    this._submitMessage = 'Submitted. Form value is ' + JSON.stringify(form.value);
  }
  ngOnInit(): void {
  }
  log(any:any){
    console.log(any);
  }

}
