import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movie';
import{ SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  movie!:Movie;

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.movie= this.shared.getData();
  }

}
