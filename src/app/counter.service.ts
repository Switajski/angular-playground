import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    counter = 0;

    constructor() {
        console.log('starting counter service');
        this.startInterval()
    }

    startInterval() {
        setInterval(() => {
            this.counter++;
            console.log(this.counter);
        }, 1000);
    }

    getCounter(): Observable<number> {
        return new Observable(subscribe => {
            const oldState = this.counter;
            setInterval(() => {
                if (oldState !== this.counter) {
                    subscribe.next(this.counter);
                }
            });
        })
    }
}