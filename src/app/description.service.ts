import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import { UserService } from './user.service';
import { aDescription } from './description-list'
@Injectable({
  providedIn: 'root',
  useFactory: (logger: LoggerService, userService: UserService) =>
      new DescriptionService(logger, userService),
  deps: [LoggerService, UserService],
})
export class DescriptionService {

  constructor(private logger:LoggerService,private userService:UserService) { }
  getContent() {
    return aDescription
  }
  getUserContent(){
    // 
    
    const bAuth = this.userService.user.isAuthorized ;
    this.logger.log(`темы для пользователя  authorized:${bAuth}.`);
    return aDescription.filter((e)=>{ return bAuth || e.type == 'template'   })
  }
}
