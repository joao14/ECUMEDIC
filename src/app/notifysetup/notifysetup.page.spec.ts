import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifysetupPage } from './notifysetup.page';

describe('NotifysetupPage', () => {
  let component: NotifysetupPage;
  let fixture: ComponentFixture<NotifysetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifysetupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifysetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
