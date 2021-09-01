import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../Movie';
import{ SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input()
  movie!: Movie;

  constructor(private shared : SharedService) { }

  ngOnInit(): void {
  }

  setInfo(data:Movie){
   this.shared.setData(data); 
  }

}
