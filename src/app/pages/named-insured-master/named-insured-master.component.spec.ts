import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedInsuredMasterComponent } from './named-insured-master.component';

describe('NamedInsuredMasterComponent', () => {
  let component: NamedInsuredMasterComponent;
  let fixture: ComponentFixture<NamedInsuredMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedInsuredMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedInsuredMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
