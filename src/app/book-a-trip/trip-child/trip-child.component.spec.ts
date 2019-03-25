import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripChildComponent } from './trip-child.component';

describe('TripChildComponent', () => {
  let component: TripChildComponent;
  let fixture: ComponentFixture<TripChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
