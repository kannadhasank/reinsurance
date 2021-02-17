import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RenewContractComponent } from './renew-contract.component';

describe('RenewContractComponent', () => {
  let component: RenewContractComponent;
  let fixture: ComponentFixture<RenewContractComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
