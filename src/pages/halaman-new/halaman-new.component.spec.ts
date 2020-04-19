import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalamanNewComponent } from './halaman-new.component';

describe('HalamanNewComponent', () => {
  let component: HalamanNewComponent;
  let fixture: ComponentFixture<HalamanNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalamanNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalamanNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
