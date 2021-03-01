import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Contrac2Component } from './contrac2.component';

describe('Contrac2Component', () => {
  let component: Contrac2Component;
  let fixture: ComponentFixture<Contrac2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Contrac2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contrac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
