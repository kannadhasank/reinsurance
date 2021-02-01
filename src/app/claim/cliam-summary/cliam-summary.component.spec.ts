import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliamSummaryComponent } from './cliam-summary.component';

describe('CliamSummaryComponent', () => {
  let component: CliamSummaryComponent;
  let fixture: ComponentFixture<CliamSummaryComponent>;

  beforeEach(async(() => {
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
