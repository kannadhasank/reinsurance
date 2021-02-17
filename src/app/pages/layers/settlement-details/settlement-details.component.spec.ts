import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SettlementDetailsComponent } from './settlement-details.component';

describe('SettlementDetailsComponent', () => {
  let component: SettlementDetailsComponent;
  let fixture: ComponentFixture<SettlementDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
