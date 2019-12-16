import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { Film, Query } from './types';

@Component({
  selector: 'app-list',
  template: `
  <h3>Films</h3>
      <mat-card class="h-spaced" *ngFor="let film of films | async">
        <p>{{film.title}} by {{film.director}} 
        from {{film.releaseDate}}</p>
        Occuring Planets:
        <ul>
          <li *ngFor="let planet of film.planets">
          <a routerLink="/planet/{{planet.name}}">{{planet.name}}</a>
          </li>
        </ul>
      </mat-card>
  `,
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  films: Observable<Film[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.films = this.apollo.watchQuery<Query>({
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
        map(result => {
          return result.data.allFilms
        })
      );
  }
}