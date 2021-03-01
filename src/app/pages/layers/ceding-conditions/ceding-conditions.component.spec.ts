import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedingConditionsComponent } from './ceding-conditions.component';

describe('CedingConditionsComponent', () => {
  let component: CedingConditionsComponent;
  let fixture: ComponentFixture<CedingConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CedingConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CedingConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
