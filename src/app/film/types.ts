export type Film = {
    episodeId: number;
    title: string;
    director: string;
    releaseDate: Date;
}

export type Query = {
    allFilms: Film[];
}