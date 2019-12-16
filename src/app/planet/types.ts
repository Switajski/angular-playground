// import { Film } from '../Film/types';

export interface Planet {
    id: number;
    name: string;
    climate: string[];
    diameter: number;
    terrain: string[];
    // films: Film[];
}

export interface PlanetQuery {
    Planet: Planet
}

export interface Image {
    image: string
}

export interface ImageSearchRequest {
    image_results: Image[]
}