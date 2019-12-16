import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { Film, Query } from './types';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let film of films | async">
        {{film.title}} by {{film.director}} 
        from {{film.releaseDate}}
        <br />
        PLANETS:
        <ul>
          <li *ngFor="let planet of film.planets">
          <a routerLink="/planet/{{planet.name}}">{{planet.name}}</a>
          </li>
        </ul>
      </li>
    </ul>
  `
})
export class FilmComponent implements OnInit {
  films: Observable<Film[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.films = this.apollo.watchQuery<Query>({
      query: gql`{
        allFilms {
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