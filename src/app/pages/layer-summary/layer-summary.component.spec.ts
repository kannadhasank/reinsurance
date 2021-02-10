import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerSummaryComponent } from './layer-summary.component';

describe('LayerSummaryComponent', () => {
  let component: LayerSummaryComponent;
  let fixture: ComponentFixture<LayerSummaryComponent>;

  beforeEach(async(() => {
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
