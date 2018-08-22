import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MiLibreriaService } from './mi-libreria.service';
import { MiLibConfigService } from './mi-libreria.config';
import { Pelicula } from './pelicula.interface';
import { MiLibreriaComponent } from './mi-libreria.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [MiLibreriaComponent],
  exports: [MiLibreriaComponent]
})
export class MiLibreriaModule {
  static forRoot(config: Pelicula[]): ModuleWithProviders {
    return {
      ngModule: MiLibreriaModule,
      providers: [
        MiLibreriaService,
        {
          provide: MiLibConfigService,
          useValue: config
        }
      ]
    };
  }
}
