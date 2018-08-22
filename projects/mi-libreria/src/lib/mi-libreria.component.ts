import { MiLibreriaService } from './mi-libreria.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from './pelicula.interface';

@Component({
  selector: 'ml-mi-libreria',
  template: `
    <div style="margin: 20px 0" *ngFor="let pelicula of peliculas$ | async; let i = index">
      <b>{{ i + 1 }}. {{ pelicula.titulo }} - {{ pelicula.director }} ({{ pelicula.estreno }})</b>
      <div *ngFor="let actor of pelicula.actores"><i>{{ actor }}</i></div>
    </div>
  `,
  styles: []
})
export class MiLibreriaComponent implements OnInit {

  public peliculas$: Observable<Pelicula[]>;

  constructor(private miLibreriaService: MiLibreriaService) { }

  ngOnInit() {
    this.peliculas$ = this.miLibreriaService.getPeliculas();
  }
}
