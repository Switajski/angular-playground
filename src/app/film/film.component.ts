import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import gql from 'graphql-tag';

import { Film, Query } from './types';
import MessageService from '../message.service';

@Component({
  selector: 'app-list',
  template: `<h3>Films</h3>
  <div class="flex" *ngIf="films$ | async as films; else loading">
    <mat-card class="h-spaced" *ngFor="let film of films">
      <p>
        <b>{{ film.episodeId | romanize }}. {{ film.title }} </b>
      </p>
      {{ film.releaseDate | date: "yyyy" }} by {{ film.director }}<br />
      Occuring Planets:
      <ul>
        <li *ngFor="let planet of film.planets">
          <a routerLink="/planet/{{ planet.name }}">{{ planet.name }}</a>
        </li>
      </ul>
    </mat-card>
  </div>
  <ng-template #loading>
    <ng-container *ngIf="!errored; else errored">
      <app-spinner></app-spinner>
    </ng-container>
  </ng-template>
  <ng-template #errored>
    Could not fetch data from server
  </ng-template>
  `,
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  films$: Observable<Film[]>;
  errored = false;

  constructor(private apollo: Apollo,
    private messageService: MessageService) { }

  ngOnInit() {
    this.films$ = this.apollo.watchQuery<Query>({
      query: gql`{
        allFilms (orderBy: episodeId_ASC) {
          releaseDate
          episodeId
          title
          director
          planets {
            name
          }
      }}`,
    })
      .valueChanges
      .pipe(
        map(result => result.data.allFilms),
        catchError(err => {
          this.errored = true;
          return this.messageService.handleError(err);
        })
      );
  }
}