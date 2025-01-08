export interface IMovieVideo {
    id: number;
    results: Result[];
}

export interface Result {
    iso_639_1: "en";
    iso_3166_1: "US";
    name: string;
    key: string;
    site: "YouTube";
    size: number;
    type: Type;
    official: boolean;
    published_at: Date;
    id: string;
}

export enum Type {
    Clip = "Clip",
    Featurette = "Featurette",
    Trailer = "Trailer",
}
