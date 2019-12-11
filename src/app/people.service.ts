import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import MessageService from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people: any;

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient) {
    this.httpClient.get('https://swapi.co/api/people')
      .subscribe(
        r => this.people = r,
        e => messageService.add(e.message));
  }

  getPeople(): Observable<any> {
    return of(this.people.results);
  }
}
