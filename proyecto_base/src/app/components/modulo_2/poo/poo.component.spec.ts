import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POOComponent } from './poo.component';

describe('POOComponent', () => {
  let component: POOComponent;
  let fixture: ComponentFixture<POOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
