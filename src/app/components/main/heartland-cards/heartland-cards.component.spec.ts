import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartlandCardsComponent } from './heartland-cards.component';

describe('HeartlandCardsComponent', () => {
  let component: HeartlandCardsComponent;
  let fixture: ComponentFixture<HeartlandCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartlandCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartlandCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
