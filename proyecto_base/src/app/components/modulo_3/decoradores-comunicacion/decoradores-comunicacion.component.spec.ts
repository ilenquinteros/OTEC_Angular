import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradoresComunicacionComponent } from './decoradores-comunicacion.component';

describe('DecoradoresComunicacionComponent', () => {
  let component: DecoradoresComunicacionComponent;
  let fixture: ComponentFixture<DecoradoresComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoradoresComunicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradoresComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
