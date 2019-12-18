import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilmComponent } from './film/film.component';
import { PlanetComponent } from './planet/planet.component';
import { CounterComponent } from './counter/counter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';

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
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class RootRouterModule { }