import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LayersAliasComponent } from './layers-alias.component';

describe('LayersAliasComponent', () => {
  let component: LayersAliasComponent;
  let fixture: ComponentFixture<LayersAliasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayersAliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
