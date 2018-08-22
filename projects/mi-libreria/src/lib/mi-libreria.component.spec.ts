import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiLibreriaComponent } from './mi-libreria.component';

describe('MiLibreriaComponent', () => {
  let component: MiLibreriaComponent;
  let fixture: ComponentFixture<MiLibreriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiLibreriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiLibreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
