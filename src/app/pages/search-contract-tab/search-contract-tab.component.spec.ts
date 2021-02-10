import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContractTabComponent } from './search-contract-tab.component';

describe('SearchContractTabComponent', () => {
  let component: SearchContractTabComponent;
  let fixture: ComponentFixture<SearchContractTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContractTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContractTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
