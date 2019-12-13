import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import MessageService from './message.service';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Something { name: string; }
export interface Result { results: Something[]; }

@Injectable({
  providedIn: 'root'
})
/**
 * Playground for rest calls - especially with loading indicator
 * For every HTTP Requests here a solution with a interceptor: https://stackoverflow.com/questions/49385369/angular-show-spinner-for-every-http-request-with-very-less-code-changes
 * 
 */
export class PeopleService {

  people: Something[];

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient) {
  }

  getPeople(): Observable<Something[]> {
    return this.httpClient.get<Result>('https://swapi.co/api/people/').pipe(
      map(req => req.results),
      tap(req => this.people = req),
      tap(() => console.log('requesting strange poeple')),
      catchError(this.handleError)
    );
  }

  getPeopleCached(): Observable<Something[]> {
    if (this.people) {
      return of(this.people);
    } else {
      return this.getPeople();
    }
  }

  private handleError(err: HttpErrorResponse): Observable<Something[]> {
    const msg = err.error instanceof ErrorEvent ? err.error.message : `Server returned ${err.status}`;
    this.messageService.add(msg);
    return throwError(msg);
  }

}
