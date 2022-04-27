import { Injectable } from '@angular/core';
import { customers } from './data';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {
  me = 'supply service'
  constructor(private logger: LoggerService) { }
  getData() {
    this.logger.log(`${this.me}: getData`)
    return customers
  }
}
