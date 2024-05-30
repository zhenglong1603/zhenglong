import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
//import { FilmComponent } from './film/film.component';
//import { GoatComponent } from './goat/goat.component';


const routes:Routes =[
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: ContactComponent,
    path: 'contact'
  },
  {
    component: PortfolioComponent, 
    path: 'portfolio'
  }, 
//   {
//     component: FilmComponent, 
//     path: 'film'
//   }, 
//   {
//     component: GoatComponent, 
//     path: 'goat'
//   }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }