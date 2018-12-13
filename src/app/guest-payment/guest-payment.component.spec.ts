import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPaymentComponent } from './guest-payment.component';

describe('GuestPaymentComponent', () => {
  let component: GuestPaymentComponent;
  let fixture: ComponentFixture<GuestPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
