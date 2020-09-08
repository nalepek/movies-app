export interface ApiPopularMovie {
    backdrop_path: string | null;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_name: string;
    original_title: string;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    title: string;
    release_date: Date;
    vote_average: number;
    vote_count: number;
}