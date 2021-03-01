import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CliamSummaryComponent } from './cliam-summary.component';

describe('CliamSummaryComponent', () => {
  let component: CliamSummaryComponent;
  let fixture: ComponentFixture<CliamSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CliamSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliamSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
