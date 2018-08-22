import { Pelicula } from 'mi-libreria';
import { MiLibreriaModule } from './../../projects/mi-libreria/src/lib/mi-libreria.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const peliculas: Pelicula[] = [
  {
    titulo: 'Titanic',
    director: 'James Cameron',
    estreno: 1997,
    actores: [
      'Leonardo DiCaprio',
      'Kate Winslet'
    ]
  },
  {
    titulo: 'El Padrino',
    director: 'Francis Ford Coppola',
    estreno: 1972,
    actores: [
      'Marlon Brando',
      'Al Pacino'
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MiLibreriaModule.forRoot(peliculas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
