import { Injectable } from '@angular/core'
import { Observable, of, throwError, Subject } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http';
import { ApolloError } from 'apollo-client';

@Injectable({
    providedIn: 'root',
})
export default class MessageService {
    messages$: Subject<string> = new Subject<string>();

    get(): Observable<string> {
        return this.messages$.asObservable();
    }

    add(msg: string) {
        this.messages$.next(msg);
    }

    handleError(err: HttpErrorResponse): Observable<any> {
        let msg = '';
        switch (err.constructor) {
            case ErrorEvent:
                msg = err.error.message;
            // case HttpErrorResponse:
            //     msg = err.message
            // case ApolloError:
            //     msg = err.message
            default:
                msg = err.message
        }
        console.log(msg)
        this.add(msg)
        return throwError(msg);
    }
}