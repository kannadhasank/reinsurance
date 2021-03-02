import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachementGuidelinesComponent } from './attachement-guidelines.component';

describe('AttachementGuidelinesComponent', () => {
  let component: AttachementGuidelinesComponent;
  let fixture: ComponentFixture<AttachementGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachementGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachementGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
