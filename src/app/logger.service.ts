import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs:string[] = [];
  me:string='LoggerService';
  constructor() {   }
  log(data:string){
    console.log(data);
    this.logs.push(data);
  }
}
