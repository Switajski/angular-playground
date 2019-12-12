import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import MessageService from './message.service';
import { Observable, of } from 'rxjs';

export interface Something { name: string; }
export interface Result { results: Something[]; }

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people: Something[];

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient) {
    this.httpClient.get('https://swapi.co/api/people')
      .subscribe(
        (r: Result) => {
          this.people = r.results;
          console.log(this.people);
        },
        e => messageService.add(e.message));
  }

  getPeople(): Observable<Something[]> {
    return of(this.people);
  }
}
