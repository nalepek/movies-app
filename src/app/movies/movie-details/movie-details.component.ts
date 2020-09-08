import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from '../shared/movie-details';
import { Store, select } from '@ngrx/store';
import { getMovieDetails } from './../../store/selectors/movie.selector';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  selectedMovie = {} as MovieDetails;

  public selectedMovie$: Observable<MovieDetails> = this.store.pipe(
    select(getMovieDetails)
  );
  
  constructor(private store: Store) {
   }

  ngOnInit() {
    this.selectedMovie$.subscribe((res) => this.selectedMovie = res);
  }

}
