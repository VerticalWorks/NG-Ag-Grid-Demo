import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowmanComponent } from './bowman.component';

describe('BowmanComponent', () => {
  let component: BowmanComponent;
  let fixture: ComponentFixture<BowmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
