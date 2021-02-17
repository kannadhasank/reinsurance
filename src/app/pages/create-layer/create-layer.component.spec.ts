import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateLayerComponent } from './create-layer.component';

describe('CreateLayerComponent', () => {
  let component: CreateLayerComponent;
  let fixture: ComponentFixture<CreateLayerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
