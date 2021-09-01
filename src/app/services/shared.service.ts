import { Injectable } from '@angular/core';
import { Movie } from '../Movie';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  data!: Movie;

  constructor() { }
  setData(data: Movie){
    this.data = data;
  }
  getData() {
    return this.data;
  }
}
