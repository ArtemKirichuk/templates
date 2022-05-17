import { Component, Input, OnInit } from '@angular/core';
import { DescriptionComponent } from '../../description.component';
import { user, customers } from '../../data';
@Component({
  selector: 'app-pure-pipe',
  styleUrls: ['./pipe.component.scss'],
  template: `
    <h1>{{title}}</h1>
    
    <mat-form-field appearance="legacy">
      <mat-label>Имя</mat-label>
      <input matInput type="text" [(ngModel)]="name" />
    </mat-form-field>
    <mat-form-field appearance="legacy">
      <input matInput  type="number" [(ngModel)]="year" />  
    </mat-form-field>
    
    <tr></tr>
    <div class="example-button-row">
      <button color="primary"  mat-raised-button (click)="addUser()">Добавить</button>
      <button color="primary"  mat-raised-button (click)="reset()" >Очистить</button>
    </div>
    

    <p>Пользователи младше 30 лет</p>
    <ul>
      <li *ngFor="let user of ( customers | younger )">Имя: {{user.name}} </li>
    </ul>
    <p>Все пользователи</p>
    <ul>
      <li *ngFor="let user of customers">Имя: {{user.name}} </li>
    </ul>
  `
})
export class PurePipeComponent implements OnInit {
  title = 'Создание пользователя(чистый pipe)'
  customers:user[]=[];
  name:string = '';
  year:number = 30;
  constructor() {
    this.reset();
   }

  ngOnInit(): void { 
  }
  addUser(){
    let user:user = { name: this.name, age : this.year };
    // Разные способы добавления 
    if (this.year < 30){
      this.customers.push(user);
    }else{
      this.customers = this.customers.concat(user);
    }
  }
  reset(){
    this.customers = customers.slice();
  }
}
@Component({
  selector: 'app-dirty-pipe',
  styleUrls: ['./pipe.component.scss'],
  template: `
    <h1>{{title}}</h1>
    
    <mat-form-field appearance="legacy">
      <mat-label>Имя</mat-label>
      <input matInput type="text" [(ngModel)]="name" />
    </mat-form-field>
    <mat-form-field appearance="legacy">
      <input matInput  type="number" [(ngModel)]="year" />  
    </mat-form-field>
    
    <tr></tr>
    <div class="example-button-row">
      <button color="primary"  mat-raised-button (click)="addUser()">Добавить</button>
      <button color="primary"  mat-raised-button (click)="reset()" >Очистить</button>
    </div>
    

    <p>Пользователи младше 30 лет</p>
    <ul>
      <li *ngFor="let user of ( customers | dirtyYounger )">Имя: {{user.name}} </li>
    </ul>
    <p>Все пользователи</p>
    <ul>
      <li *ngFor="let user of customers">Имя: {{user.name}} </li>
    </ul>
  `
})
export class DirtyPipeComponent extends PurePipeComponent {
  
  override title = 'Создание пользователя (Грязный Pipe)';
}
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit, DescriptionComponent {
  public power:number = 1;
  public factor:number =5;
  @Input() data:any;
  constructor() { }
  toDay = new Date();
  toggle =  true;
  
  get format (){ return this.toggle ? 'shortDate' : 'longDate'}
  onClickToggle (){
    this.toggle = !this.toggle;
  }
  ngOnInit(): void { 
  }
}

import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-hero-async-message',
  template: `
    <h2>Title: {{sTitle}}</h2>
    <p>Message: {{ message$ | async }}</p>
    <button mat-raised-button color="primary" type="button" (click)="resend()">Resend</button>
    <button mat-raised-button color="primary" type="button" (click)="fnChTitle()">Изменить Title</button>`,
})
export class HeroAsyncMessageComponent {
  message$: Observable<string>;
  sTitle = 'Title';
  fnChTitle(){
    this.sTitle = 'new Title check |asinc pipe';
  }
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() {
    this.message$ = this.getResendObservable();
  }

  resend() {
    this.message$ = this.getResendObservable();
  }

  private getResendObservable() {
    return interval(1000).pipe( map(i => this.messages[i] + ' i=' + i),take(this.messages.length) );
  }
}

@Component({
  selector: 'app-usr-list',
  template: `
    <h2>Пользователи из JSON файла</h2>

    <div *ngFor="let usr of (url | fetch) ">
      {{usr.name}}
    </div>

    <p>пользователи JSON:
      {{url | fetch | json}}
    </p>
    <button (click)="fnChUrl()" color="primary" mat-raised-button>Изменить Url</button>`
})
export class HeroListComponent {
  url ='assets/hero.json';
  fnChUrl(){
    console.log(this.url)

    this.url = this.url == 'assets/users.json' ? 'assets/hero.json' : 'assets/users.json';
  }
 }
