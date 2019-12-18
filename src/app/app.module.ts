import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { GraphQLModule } from './graphql.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { EditProductDetailComponent } from './product-detail/edit-product-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';
import { FilmComponent } from './film/film.component';
import { PlanetComponent } from './planet/planet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import RomanizePipe from './RomanizePipe'

const appRoutes: Routes = [
  {
    path: 'people',
    component: PeopleListComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'products',
    component: ProductListComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'films',
    component: FilmComponent
  },
  {
    path: 'planet/:id',
    component: PlanetComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: '',
    redirectTo: '/films',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    EditProductDetailComponent,
    MessagesComponent,
    PeopleListComponent,
    PageNotFoundComponent,
    CounterComponent,
    FilmComponent,
    PlanetComponent,
    RomanizePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    GraphQLModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
