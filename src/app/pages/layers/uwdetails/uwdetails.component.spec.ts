import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UWdetailsComponent } from './uwdetails.component';

describe('UWdetailsComponent', () => {
  let component: UWdetailsComponent;
  let fixture: ComponentFixture<UWdetailsComponent>;

  beforeEach(waitForAsync(() => {
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
