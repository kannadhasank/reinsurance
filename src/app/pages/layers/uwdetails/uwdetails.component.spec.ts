import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UWdetailsComponent } from './uwdetails.component';

describe('UWdetailsComponent', () => {
  let component: UWdetailsComponent;
  let fixture: ComponentFixture<UWdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UWdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UWdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
