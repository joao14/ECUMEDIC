import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediamPage } from './mediam.page';

describe('MediamPage', () => {
  let component: MediamPage;
  let fixture: ComponentFixture<MediamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
