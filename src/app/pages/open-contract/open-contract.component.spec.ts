import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenContractComponent } from './open-contract.component';

describe('OpenContractComponent', () => {
  let component: OpenContractComponent;
  let fixture: ComponentFixture<OpenContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
