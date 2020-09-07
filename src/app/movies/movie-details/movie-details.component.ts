import { DataService } from './../../services/data.service';
import { Movie } from 'src/app/movies/shared/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie = {} as  Movie;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentData.subscribe(data => this.movie = data as Movie);
  }

}
