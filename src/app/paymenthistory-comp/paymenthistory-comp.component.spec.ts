import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenthistoryCompComponent } from './paymenthistory-comp.component';

describe('PaymenthistoryCompComponent', () => {
  let component: PaymenthistoryCompComponent;
  let fixture: ComponentFixture<PaymenthistoryCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymenthistoryCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymenthistoryCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
