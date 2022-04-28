import { Component, forwardRef, Inject, Injectable, InjectionToken, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { DescriptionService } from '../../description.service';
import { ItemDescription } from '../../item-description';

// import { config } from 'process';
import { LoggerService } from '../../logger.service';
import { descServiceProvider } from '../../service.provider';
import { SupplyService } from '../../supply.service';
import { UserService } from '../../user.service';
const template = '{{log}}';
@Injectable()
export class EvenBetterLogger extends LoggerService {
  me = 'EvenBetterLogger';
  constructor(private userService: UserService) { super(); }

  override log(message: string) {
    const name = this.userService.user.name;
    super.log(`Message to ${name}: ${message}`);
  }
}

@Component({
  selector: 'app-provider1',
  template,
  providers: [LoggerService]
})
export class Provider1Component implements OnInit {
  log!: string;
  constructor(loggerService: LoggerService) {
    loggerService.log('provider1 logger');
    this.log = loggerService.logs[0];
  }

  ngOnInit(): void { }
}
@Component({
  selector: 'app-provider2',
  template,
  providers: [{ provide: LoggerService, useClass: LoggerService }]
})
export class Provider2Component implements OnInit {
  log!: string;
  constructor(loggerService: LoggerService) {
    loggerService.log('provider2 Hello from logger provided with useClass:Logger');
    this.log = loggerService.logs[0];
  }

  ngOnInit(): void { }
}

export class BetterLogger extends LoggerService {
  me = 'BetterLogger';
  constructor() { super() }
  fnGetSuperProp() {
    console.log(`super.me: ${super.me}. this.me: ${this.me}`);
  }
};
@Component({
  selector: 'app-provider3',
  template,
  providers: [{ provide: LoggerService, useClass: BetterLogger }]
})
export class Provider3Component implements OnInit {
  log!: string;

  constructor(loggerService: LoggerService) {
    var a: any = loggerService;
    a.fnGetSuperProp();
    loggerService.log(`provider3 useClass:BetterLogger: ${loggerService.me}.`);
    this.log = loggerService.logs[0];
  }
  ngOnInit(): void { }
}
@Component({
  selector: 'app-provider4',
  template,
  providers: [UserService, { provide: LoggerService, useClass: EvenBetterLogger }]
})
export class Provider4Component implements OnInit {
  log!: string;

  constructor(loggerService: LoggerService) {
    loggerService.log(`provider4 useClass:BetterLogger: ${loggerService.me}.`);
    this.log = loggerService.logs[0];
  }
  ngOnInit(): void { }
}
///////////////////////////////////////////////////////////////////////////////////
export class NewLogger extends LoggerService { }

export class OldLogger {
  logs: string[] = [];
  log(message: string) {
    throw new Error('Should not call the old logger!');
  }
}
@Component({
  selector: 'app-provider5a',
  template,
  providers: [
    NewLogger,
    // OldLogger,
    // Not aliased! Creates two instances of `NewLogger`
    { provide: OldLogger, useClass: NewLogger },
  ],
})
export class Provider5aComponent {
  log: string;
  constructor(newLogger: NewLogger, oldLogger: OldLogger) {

    if (newLogger === oldLogger) {
      throw new Error('expected the two loggers to be different instances');
    }
    oldLogger.log('Hello OldLogger (but we want NewLogger)');
    // The newLogger wasn't called so no logs[]
    // display the logs of the oldLogger.
    this.log = newLogger.logs[0] || oldLogger.logs[0];
  }
}
@Component({
  selector: 'app-provider5b',
  template,
  providers: [
    NewLogger,
    // OldLogger,
    // Alias OldLogger w/ reference to NewLogger
    // Чтобы максимально запутаться
    { provide: OldLogger, useExisting: NewLogger },
  ],
})
export class Provider5bComponent {
  log: string;

  constructor(newLogger: NewLogger, oldLogger: OldLogger) {

    if (newLogger !== oldLogger) {
      throw new Error('expected the two loggers to be the same instance');
    }
    oldLogger.log('Hello from NewLogger (via aliased OldLogger)');
    this.log = newLogger.logs[0] || oldLogger.logs[0];

  }
}
////////////////////////////////////////////////////////////////////////////////////
@Injectable()
export class Provider {
  me = 'Provider';
  logs!: string[];
  log(text: string) { };
  constructor() { }
}
function fnLog(text: string) { }

interface ifSilentLoger {
  logs: string[],
  log(text: string): void,
}
const SilentLogger: ifSilentLoger = {
  logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  log: fnLog,

}
//не понимаю зачем это используется ?
//т.е. провайдер становится шаблоном, а методы дёргаются из useValue
@Component({
  selector: 'app-provider6',
  template,
  providers: [
    { provide: Provider, useValue: SilentLogger },
  ],
})
export class Provider6Component {
  log: string;
  constructor(provider: Provider) {
    provider.log('Hello from silentLogger with useValue');
    this.log = provider.logs[0];
  }
}
////////////////////////////////////////////////////////////////////////////////////
function getProvider(component: any,) {
  return { provide: {}, useExisting: forwardRef(() => component) };
}
//зачем абстракция?
//переходной класс  который может вытащить свойства компонента родителя
export class Parent { name!: string; }
// export abstract class Parent2 { abstract name: string;abstract name2: string }
@Component({
  selector: 'app-AliasingParent',
  template: ` 
  <p>Родительский элемент</p>
  <app-AliasingRef></app-AliasingRef>
  `,
  // providers: [
  //   [getProvider(AliasingParent)]
  // ],
})
export class AliasingParent implements Parent {
  name: string = 'AliasingParent';
}
@Component({
  selector: 'app-AliasingRef',
  template,
  // providers: [
  //   [getProvider(AliasingRef)]
  // ],
})
export class AliasingRef implements Parent {
  name: string = 'AliasingRef';
  log!: string;
  constructor(@SkipSelf() @Optional() public parent?: Parent) {
    this.log = `Parent.name: ${Parent?.name} me:${this.name}`;
  }
}
////////////////////////////////////////////////////////////////////////////////////
export interface ifProviderConfig {
  name: string,
  age: number
}
export const oAppValue: ifProviderConfig = {
  name: 'Объект конфигурации',
  age: 2
}
// ../../material/material.module

export const oInjectionToken = new InjectionToken<ifProviderConfig>('../dependency-providers.component')
@Component({
  selector: 'app-provider7',
  template,
  providers: [
    { provide: oInjectionToken, useValue: oAppValue }
  ],
})
export class Provider7Component {
  log: string;
  constructor(@Inject(oInjectionToken) config: ifProviderConfig) {

    this.log = config.name
    // console.log(config)
  }



  name: string = 'AliasingParent';
}

////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'app-dependency-providers',
  templateUrl: './dependency-providers.component.html',
  styleUrls: ['./dependency-providers.component.scss']
})
export class DependencyProvidersComponent implements OnInit {
  @Input() data: any;
  bAuth!:boolean;
  constructor(private userService: UserService) {    
  }
  ngOnInit(): void {}
  get fnUserInfo() {
    return `User: ${this.userService.user.name}, autarizate: ${this.userService.user.isAuthorized}`
  }
  fnNextUser() {
    
    this.userService.getNewUser();
    this.bAuth = this.userService.user.isAuthorized;
  }
}

@Component({
  selector: 'app-factory',
  template: `<p>Доступные темы:</p>
  <app-factory-list></app-factory-list>`,
  
})
export class FactoryProviderComponent  {
  constructor() { }
}

@Component({
  selector: 'app-factory-list',

  template: `
  <ul>
    <li *ngFor="let item of aDescription">{{ item.data.name }}</li>
  </ul>`,

})
export class FactoryListComponent  {
  aDescription!: ItemDescription[];
  constructor(private descriptionService: DescriptionService) {
    this.aDescription = descriptionService.getUserContent();
  }
}