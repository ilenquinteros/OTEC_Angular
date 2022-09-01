import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploIComponent } from './ejemplo-i.component';

describe('EjemploIComponent', () => {
  let component: EjemploIComponent;
  let fixture: ComponentFixture<EjemploIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
