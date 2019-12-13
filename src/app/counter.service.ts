import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    counter = 0;
    counter$: Observable<number>;

    constructor() {
        console.log('starting counter service');
        this.startInterval();
    }

    startInterval() {
        this.counter$ = interval(1000);
    }

    getCounter(): Observable<number> {
        return this.counter$;
    }
}