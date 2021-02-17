import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PremiumSettlementDetailsComponent } from './premium-settlement-details.component';

describe('PremiumSettlementDetailsComponent', () => {
  let component: PremiumSettlementDetailsComponent;
  let fixture: ComponentFixture<PremiumSettlementDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumSettlementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumSettlementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
