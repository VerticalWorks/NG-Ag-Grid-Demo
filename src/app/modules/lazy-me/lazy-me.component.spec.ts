import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyMeComponent } from './lazy-me.component';

describe('LazyMeComponent', () => {
  let component: LazyMeComponent;
  let fixture: ComponentFixture<LazyMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
