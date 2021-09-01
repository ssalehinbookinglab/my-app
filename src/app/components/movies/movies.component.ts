import { Component, OnInit } from '@angular/core';
import {Movie} from '../../Movie';
import {MOVIES} from '../../movies-list';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  p: number = 1;
  movies: Movie[] = MOVIES;
  total: number = MoviesComponent.length
  constructor() { }

  ngOnInit(): void {
  }

}
