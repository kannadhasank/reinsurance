import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LayerDetailsComponent } from './layer-details.component';

describe('LayerDetailsComponent', () => {
  let component: LayerDetailsComponent;
  let fixture: ComponentFixture<LayerDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
