import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchContractComponent } from './search-contract.component';

describe('SearchContractComponent', () => {
  let component: SearchContractComponent;
  let fixture: ComponentFixture<SearchContractComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
