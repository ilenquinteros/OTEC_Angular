import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploIIComponent } from './ejemplo-ii.component';

describe('EjemploIIComponent', () => {
  let component: EjemploIIComponent;
  let fixture: ComponentFixture<EjemploIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
