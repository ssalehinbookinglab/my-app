import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'movie-info', component: MovieInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
