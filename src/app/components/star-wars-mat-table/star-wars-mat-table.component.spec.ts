import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsMatTableComponent } from './star-wars-mat-table.component';

describe('StarWarsMatTableComponent', () => {
  let component: StarWarsMatTableComponent;
  let fixture: ComponentFixture<StarWarsMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsMatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
