import { Planet } from '../planet/types'

export type Film = {
    episodeId: number;
    title: string;
    director: string;
    releaseDate: Date;
    planets: Planet[];
}

export type Query = {
    allFilms: Film[];
}