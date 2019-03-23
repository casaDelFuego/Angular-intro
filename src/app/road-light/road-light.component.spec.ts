import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadLightComponent } from './road-light.component';

describe('RoadLightComponent', () => {
  let component: RoadLightComponent;
  let fixture: ComponentFixture<RoadLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
