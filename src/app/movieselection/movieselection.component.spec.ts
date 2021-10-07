import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieselectionComponent } from './movieselection.component';

describe('MovieselectionComponent', () => {
  let component: MovieselectionComponent;
  let fixture: ComponentFixture<MovieselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
