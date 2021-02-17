import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParticipantSummaryComponent } from './participant-summary.component';

describe('ParticipantSummaryComponent', () => {
  let component: ParticipantSummaryComponent;
  let fixture: ComponentFixture<ParticipantSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
