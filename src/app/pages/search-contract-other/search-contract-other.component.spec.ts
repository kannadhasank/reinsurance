import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchContractOtherComponent } from './search-contract-other.component';

describe('SearchContractOtherComponent', () => {
  let component: SearchContractOtherComponent;
  let fixture: ComponentFixture<SearchContractOtherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContractOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContractOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
