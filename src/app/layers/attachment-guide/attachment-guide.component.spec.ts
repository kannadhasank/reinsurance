import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AttachmentGuideComponent } from './attachment-guide.component';

describe('AttachmentGuideComponent', () => {
  let component: AttachmentGuideComponent;
  let fixture: ComponentFixture<AttachmentGuideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
