import { MovieResponse } from './../../movies/shared/movie-response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/movies/shared/movie';

const baseUrl = 'https://api.themoviedb.org/3/';
const imageBaseUrl = 'https://image.tmdb.org/';
const API_KEY = '4ff9d08260ed338797caa272d7df35dd';

const getUrl = path => `${baseUrl}${path}?api_key=${API_KEY}`;
const getImageUrl = path => `${imageBaseUrl}t/p/w185${path}?api_key=${API_KEY}`;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getPopularMovies(page: number = 1): Observable<MovieResponse> {

    const params = new HttpParams()
      .set('page', page.toString());

    return this.http
      .get(getUrl('movie/popular'), { params })
      .pipe(
        map((response) => {
          const movieResponse = {} as MovieResponse;
          movieResponse.page = response['page'];
          movieResponse.totalPages = response['total_pages'];
          movieResponse.totalResults = response['total_results'];

          movieResponse.results = response['results'].map((r: any) => {
            return {
              id: r['id'],
              originalLanguage: r['original_language'],
              originalTitle: r['original_title'],
              overview: r['overview'],
              popularity: r['popularity'],
              posterPath: getImageUrl(r['poster_path']),
              releaseDate: r['release_date'],
              title: r['title'],
              voteAverage: r['vote_average']
            } as Movie;
          });
          return movieResponse;
        })
      );
  }
}
