import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CopyContractComponent } from './copy-contract.component';

describe('CopyContractComponent', () => {
  let component: CopyContractComponent;
  let fixture: ComponentFixture<CopyContractComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
