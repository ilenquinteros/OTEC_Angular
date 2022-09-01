import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingFormulariosComponent } from './databinding-formularios.component';

describe('DatabindingFormulariosComponent', () => {
  let component: DatabindingFormulariosComponent;
  let fixture: ComponentFixture<DatabindingFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingFormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
