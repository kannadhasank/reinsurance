import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContractLayerComponent } from './search-contract-layer.component';

describe('SearchContractLayerComponent', () => {
  let component: SearchContractLayerComponent;
  let fixture: ComponentFixture<SearchContractLayerComponent>;

  beforeEach(async(() => {
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
