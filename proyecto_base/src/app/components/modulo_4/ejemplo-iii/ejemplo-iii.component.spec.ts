import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploIIIComponent } from './ejemplo-iii.component';

describe('EjemploIIIComponent', () => {
  let component: EjemploIIIComponent;
  let fixture: ComponentFixture<EjemploIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploIIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
