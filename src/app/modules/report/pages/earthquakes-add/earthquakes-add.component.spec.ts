import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakesAddComponent } from './earthquakes-add.component';

describe('EarthquakesAddComponent', () => {
  let component: EarthquakesAddComponent;
  let fixture: ComponentFixture<EarthquakesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
