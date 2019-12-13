import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    counter = 0;
    counter$ = new Subject<number>();

    constructor() {
        console.log('starting counter service');
        this.startInterval();
    }

    startInterval() {
        setInterval(() => {
            this.counter$.next(this.counter++)
            console.log(this.counter);
        }, 1000);
    }

    getCounter(): Observable<number> {
        return this.counter$.asObservable();
    }
}