import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContract2Component } from './create-contract2.component';

describe('CreateContract2Component', () => {
  let component: CreateContract2Component;
  let fixture: ComponentFixture<CreateContract2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContract2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContract2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
