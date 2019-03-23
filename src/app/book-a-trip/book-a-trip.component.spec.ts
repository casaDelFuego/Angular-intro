import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookATripComponent } from './book-a-trip.component';

describe('BookATripComponent', () => {
  let component: BookATripComponent;
  let fixture: ComponentFixture<BookATripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookATripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookATripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
