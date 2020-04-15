import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAnt01Page } from './tab-ant01.page';

describe('TabAnt01Page', () => {
  let component: TabAnt01Page;
  let fixture: ComponentFixture<TabAnt01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAnt01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAnt01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
