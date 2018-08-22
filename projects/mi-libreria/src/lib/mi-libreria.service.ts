import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Pelicula } from './pelicula.interface';
import { MiLibConfigService } from './mi-libreria.config';

@Injectable({
  providedIn: 'root'
})
export class MiLibreriaService {

  constructor(@Inject(MiLibConfigService) private config: Pelicula[]) {
    console.log(config);
  }

  getPeliculas(): Observable<Pelicula[]> {
    return of(this.config);
  }
}
