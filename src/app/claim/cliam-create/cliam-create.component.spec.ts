import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CliamCreateComponent } from './cliam-create.component';

describe('CliamCreateComponent', () => {
  let component: CliamCreateComponent;
  let fixture: ComponentFixture<CliamCreateComponent>;

  beforeEach(waitForAsync(() => {
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
