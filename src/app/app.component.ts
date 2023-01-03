import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string;
  private obs$: Observable<any>;
  private subj$: Subject<any>;
  private behav$: BehaviorSubject<any>;

  constructor() {
    this.title = 'crm';
    this.obs$ = new Observable((listX) => {
      listX.next(Math.random());
    });
    this.subj$ = new Subject();
    this.behav$ = new BehaviorSubject('toto');

    // this.obs$.subscribe(console.log);
    // this.obs$.subscribe(console.log);

    // this.subj$.subscribe(console.log);
    // this.subj$.next('toto');
    // this.subj$.next('toto2');
    // this.subj$.subscribe(console.log);
    // this.subj$.next(Math.random());

    // this.behav$.next('toto2');
    // this.behav$.subscribe(console.log);
    // this.behav$.next(Math.random());
    // this.behav$.subscribe(console.log);
  }
}
