import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLayerComponent } from './create-layer.component';

describe('CreateLayerComponent', () => {
  let component: CreateLayerComponent;
  let fixture: ComponentFixture<CreateLayerComponent>;

  beforeEach(async(() => {
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
