import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { GraphQLModule } from './graphql.module';
import { MaterialModule } from './material.module';
import { RootRouterModule } from './root-router.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { EditProductDetailComponent } from './product-detail/edit-product-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';
import { FilmComponent } from './film/film.component';
import { PlanetComponent } from './planet/planet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import RomanizePipe from './RomanizePipe';
import { SpinnerComponent } from './spinner/spinner.component';

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
    RomanizePipe,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    GraphQLModule,
    MaterialModule,
    BrowserAnimationsModule,
    RootRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
