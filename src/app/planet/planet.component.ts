import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Planet, PlanetQuery, ImageSearchRequest } from './types';
import { Observable, of } from 'rxjs'
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import gql from 'graphql-tag';
import MessageService from '../message.service';

@Component({
  selector: 'app-planet',
  template: `<mat-card *ngIf="planet$ | async as planet ">
  <h3> Planet {{ planet.name }}</h3>
  <div class="card">
    <div class="double">
      <div *ngIf="image$ | async as image">
      <img src={{image}} />
      </div>
    </div>
    <div>
      <p>climate: {{planet.climate}}</p>
      <p>terrain: {{planet.terrain}}</p>
      <p>diameter: {{planet.diameter}}</p>
      <p>films: <ul>
      <li *ngFor="let film of planet.films">{{film.title}}</li>
      </ul>
    </div>
    </div> 
    </mat-card>`,
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planet$: Observable<Planet>;
  image$: Observable<string>;
  id: string;

  constructor(private apollo: Apollo,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private httpClient: HttpClient) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.planet$ = this.apollo.watchQuery<PlanetQuery>({
      query: gql`query {
        Planet(name: "${id}") {
          name
          climate
          diameter
          population
          terrain
          films {
            title
            episodeId,
            director
          }
        }
      }`
    }).valueChanges
      .pipe(map(r => r.data.Planet))

    if (id === 'Yavin IV') {
      this.image$ = of('https://vignette.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20181015023938')
    }
    else {
      this.image$ = this.httpClient.get<ImageSearchRequest>(
        'https://api.serpwow.com/live/search', {
        params: {
          api_key: "3A7309BEBDDE43B3950857CBF1904EA5",
          q: id,
          gl: "de",
          google_domain: "google.de",
          search_type: "images"
        }
      }).pipe(
        map(req => req.image_results[0].image),
        tap(req => console.log(req)),
        catchError(this.messageService.handleError)
      );
    }
  }

}
