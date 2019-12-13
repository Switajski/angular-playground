import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    counter = 0;
    counter$ = new Subject<number>();
    interval;

    constructor() {
        console.log('starting counter service');
        this.startInterval();
    }

    startInterval() {
        this.interval = setInterval(() => {
            this.counter++;
            this.counter$.next(this.counter);
            console.log(this.counter);
        }, 1000);
    }

    getCounter(): Observable<number> {
        if (this.interval === undefined) {
            this.startInterval();
        }
        return this.counter$.asObservable();
    }

    dispose(): void {
        clearInterval(this.interval);
        this.interval = undefined;
    }
}