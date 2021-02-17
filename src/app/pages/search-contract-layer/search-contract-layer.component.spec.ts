import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchContractLayerComponent } from './search-contract-layer.component';

describe('SearchContractLayerComponent', () => {
  let component: SearchContractLayerComponent;
  let fixture: ComponentFixture<SearchContractLayerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContractLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContractLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
