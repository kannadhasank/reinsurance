import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingOptionComponent } from './processing-option.component';

describe('ProcessingOptionComponent', () => {
  let component: ProcessingOptionComponent;
  let fixture: ComponentFixture<ProcessingOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
