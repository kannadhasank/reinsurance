import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoadingConditionComponent } from './coading-condition.component';

describe('CoadingConditionComponent', () => {
  let component: CoadingConditionComponent;
  let fixture: ComponentFixture<CoadingConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoadingConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoadingConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
