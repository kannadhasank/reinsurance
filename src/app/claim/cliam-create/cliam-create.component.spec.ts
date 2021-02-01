import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliamCreateComponent } from './cliam-create.component';

describe('CliamCreateComponent', () => {
  let component: CliamCreateComponent;
  let fixture: ComponentFixture<CliamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
