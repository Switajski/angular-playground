import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export default class MessageService {
    messages: string[] = [];

    get(): Observable<string[]> {
        return of(this.messages);
    }

    add(msg: string) {
        this.messages.push(msg);
    }
}