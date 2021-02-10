import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPreferenceComponent } from './contact-preference.component';

describe('ContactPreferenceComponent', () => {
  let component: ContactPreferenceComponent;
  let fixture: ComponentFixture<ContactPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
