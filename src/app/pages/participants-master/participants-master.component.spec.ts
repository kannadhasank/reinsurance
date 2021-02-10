import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsMasterComponent } from './participants-master.component';

describe('ParticipantsMasterComponent', () => {
  let component: ParticipantsMasterComponent;
  let fixture: ComponentFixture<ParticipantsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
