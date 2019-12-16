import { Injectable } from '@angular/core'
import { Observable, of, throwError } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http';

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

    handleError(err: HttpErrorResponse): Observable<any> {
        const msg = err.error instanceof ErrorEvent ? err.error.message : `Server returned ${err.status}`;
        this.add(msg);
        return throwError(msg);
    }
}