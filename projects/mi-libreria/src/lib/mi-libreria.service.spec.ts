import { TestBed, inject } from '@angular/core/testing';

import { MiLibreriaService } from './mi-libreria.service';

describe('MiLibreriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiLibreriaService]
    });
  });

  it('should be created', inject([MiLibreriaService], (service: MiLibreriaService) => {
    expect(service).toBeTruthy();
  }));
});
