import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LayerSummaryComponent } from './layer-summary.component';

describe('LayerSummaryComponent', () => {
  let component: LayerSummaryComponent;
  let fixture: ComponentFixture<LayerSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
