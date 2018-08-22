import { InjectionToken } from '@angular/core';

import { Pelicula } from './pelicula.interface';

export const MiLibConfigService = new InjectionToken<Pelicula[]>('Pelicula');
