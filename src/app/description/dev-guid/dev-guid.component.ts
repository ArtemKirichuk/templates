import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DescriptionComponent } from 'src/app/description.component';
import { of, from, interval, Observable, fromEvent, Observer, Subscription, timer, range, Subject, BehaviorSubject } from 'rxjs';
import { filter, map, scan, take, takeUntil } from 'rxjs/operators';
import { customers, user } from 'src/app/data';
// import { Stream } from 'stream';

export class clAuth {
  private oAuth$ = new BehaviorSubject<boolean>(false);
  fnSetAuth(state: boolean) {
    this.oAuth$.next(state);
  }
  getAuth() {
    return this.oAuth$.asObservable()
  }
  constructor() {

  }
}
// from
@Component({
  selector: 'app-dev-guid',
  templateUrl: './dev-guid.component.html',
  styleUrls: ['./dev-guid.component.scss'],
  encapsulation: ViewEncapsulation.None //Add this line
})
export class DevGuidComponent implements OnInit, DescriptionComponent, OnDestroy {
  oInterval = interval(500);
  @Input() data: any;
  aIntervalResult: any[] = []//для просто ты тестов
  aFromResultFilterMap: user[] = []//для просто ты тестов
  oOfResult!: user[]
  aFromResultScan: number = 0
  aCustomers = customers.slice()
  oDestroyStream: Subject<unknown>;
  oClAuth!: clAuth;
  constructor() {
    this.oDestroyStream = new Subject();
    this.oClAuth = new clAuth()
  }
  fnStartInterval() {
    const oInterval$ = interval(1000);
    oInterval$.pipe(take(5)).subscribe(i => { this.aIntervalResult.push(i) });

  }
  fnStartFilterMap() {
    const oIntervalFilterMap$ = interval(1000);
    oIntervalFilterMap$.pipe(
      take(customers.length),
      filter(v => customers[v].age > 30),
      map(v => customers[v])
    ).subscribe((name) => this.aFromResultFilterMap.push(name))
  }
  fnStartScan() {
    const oIntervalScan = interval(500).pipe(
      take(customers.length),
      map(v => customers[v].age),
      scan((acc, v, i) => {
        acc += v
        return acc
      })
    ).subscribe(v => this.aFromResultScan = v)
  }

  fnOf() {
    // let oOf!: user[] | (()=>string) ;
    const oOf$ = of(customers, customers).pipe(scan((acc, v) => acc.concat(v)));
    oOf$.subscribe((v) => { this.oOfResult = v })
  }
  aFromResult: number[] = [];
  fnFrom() {
    let oFrom = from([1, 2, 3, 4, 5]).subscribe((v) => { this.aFromResult.push(v) });
  }
  aAny: any[] = [];
  fnObservable() {
    // let o = new Promise((res,rej)=>{res('qwe')})
    let oOb = new Observable((oPromise) => {
      let aNames = this.aCustomers.map((e) => e.name);
      setTimeout(() => { oPromise.next(aNames) }, 1000)
      oPromise.next(2)
      setTimeout(() => { oPromise.complete() }, 1300)
      // oPromise.error('error');
      oPromise.next(3)
    })
    // oOb.subscribe(
    //   //next
    //   (v) => {
    //     this.aAny.push(v);
    //   },
    //   //error
    //   (text: string) => {
    //     window.alert(text);
    //   },
    //   //complete
    //   () => { window.alert('Стрим закончен') })
    oOb.subscribe({
      next: (v) => { this.aAny.push(v) },
      error: (text) => window.alert(text + 2),
      complete: () => { window.alert('Стрим закончен2') }
    })
  }


  fnStart(btn: string) {
    switch (btn) {
      case 'interval':
        this.fnStartInterval();
        break;
      case 'FilterMap':
        this.fnStartFilterMap()
        break
      case 'Scan':
        this.fnStartScan()
        break
      case 'Of':
        this.fnOf()
        break
      case 'From':
        this.fnFrom()
        break
      case 'Observable':
        this.fnObservable()
        break
      case 'Timer':
        this.fnTimer()
        break
      case 'Range':
        this.fnRange()
        break
      case 'SendText':
        this.fnSendText()
        break
      case 'BehavorSubject':
        this.fnBehavorSubject()
        break
      default:
        break;
    }
  }
  oBeSubject!: Observable<any>;
  aResultBehavorSubject: any[] = [];
  oSubAuth!: Subscription;
  fnBehavorSubject() {
    this.oBeSubject = this.oClAuth.getAuth()
    if (this.oSubAuth && !this.oSubAuth.closed) {
      this.oSubAuth.unsubscribe()
    }
    else
      this.oSubAuth = this.oBeSubject.subscribe((o) => {
        this.aResultBehavorSubject.push('Авторизация: ' + o)
      })
  }
  bAuth = false;
  fnSetAuth(state: boolean) {
    this.oClAuth.fnSetAuth(state);
  }
  //Subject Observable//////////////////////////////////////////////////////////////////
  sTextArtical: string = '';
  obSubject: Subject<unknown> = new Subject();
  obObserv: Observable<unknown> = new Observable((suber) => {
    this.oSubIteratorObserv = interval(1000).subscribe((i) => {
      suber.next(i)
    })
  });
  aObservResult: any[] = [];
  aSubjectResult: any[] = [];
  oNewsSub!: Subscription;
  oMagsSub!: Subscription;
  oMagsSubObserv!: Subscription;
  oNewsSubObserv!: Subscription;

  fnSubjectSubscribeNews() {

    if (this.oNewsSub && !this.oNewsSub.closed) {
      this.oNewsSub.unsubscribe();
      this.oNewsSubObserv.unsubscribe()
    } else {
      this.oNewsSub = this.obSubject
        .subscribe((v) => {
          this.aSubjectResult.push(`Нововсть: ${v}`)
        })
      this.oNewsSubObserv = this.obObserv.subscribe((v) => {
        this.aObservResult.push(`Нововсть: ${v}`)
      })
    }
  }
  fnSubjectSubscribeMagazine() {
    if (this.oMagsSub && !this.oMagsSub.closed) {
      this.oMagsSub.unsubscribe()
      this.oMagsSubObserv.unsubscribe()
    } else {
      this.oMagsSub = this.obSubject.subscribe((v) => { this.aSubjectResult.push(`Журнал: ${v}`) })
      this.oMagsSubObserv = this.obObserv.subscribe((v) => { this.aObservResult.push(`Журнал: ${v}`) })
    }
  }
  fnSendText() {
    this.obObserv.subscribe((v) => this.aObservResult.push(`Текст: ${v}`));
    this.obSubject.next(this.sTextArtical);
  }
  oSubIterator!: Subscription;
  oSubIteratorObserv!: Subscription;
  fnToggleStream() {

    if (this.oSubIterator && !this.oSubIterator.closed) {
      this.oSubIterator.unsubscribe();
      this.oSubIteratorObserv?.unsubscribe();
    } else {
      this.oSubIterator = interval(1000).subscribe((i) => {
        this.obSubject.next(i)
      })
    }

  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  oTimerSubscription!: Subscription;
  oTimeCustomer!: user;
  fnTimer() {
    this.oTimerSubscription = timer(1000).subscribe((i) => { this.oTimeCustomer = this.aCustomers[i] })
  }
  fnUnsubEvent() {
    if (this.oTimerSubscription) {
      this.fnUnsubscribe(this.oTimerSubscription);
      window.alert('Подписка отменена!')
    }
  }
  fnUnsubscribe(oSub: Subscription) {
    oSub.unsubscribe()
  }
  aNumber: number[] = []
  fnRange() {
    let oRange = range(4, 10).subscribe((i) => { this.aNumber.push(i) })
  }
  ngOnDestroy(): void {
    //зачистка подписок
    this.oDestroyStream.next();
  }
  ngOnInit(): void {

  }
  @ViewChild('btnFromEvent') btn: any;
  aClientClick: { clientX: number, clientY: number }[] = [];
  ngAfterViewInit() {

    let el = this.btn._elementRef.nativeElement;
    fromEvent(el, 'click')
      .pipe(map((e: any) => { return { clientX: e.clientX, clientY: e.clientY } }))
      .subscribe((v) => { this.aClientClick.push(v) })
  }

}
