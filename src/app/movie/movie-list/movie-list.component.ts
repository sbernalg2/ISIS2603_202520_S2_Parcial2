import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Movie } from '../Movie';
import { movieData } from '../movieData';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selected: Boolean = false;
  selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.movies = movieData;
  }

  onSelect(movie: Movie) {
    this.router.navigate(['/movie', movie.id]);
  }

  trackById(index: number, movie: Movie): number {
    return movie.id;
  }
}
