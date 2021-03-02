import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedInsuredComponent } from './named-insured.component';

describe('NamedInsuredComponent', () => {
  let component: NamedInsuredComponent;
  let fixture: ComponentFixture<NamedInsuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedInsuredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
