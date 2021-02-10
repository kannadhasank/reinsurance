import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentGuideComponent } from './attachment-guide.component';

describe('AttachmentGuideComponent', () => {
  let component: AttachmentGuideComponent;
  let fixture: ComponentFixture<AttachmentGuideComponent>;

  beforeEach(async(() => {
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
