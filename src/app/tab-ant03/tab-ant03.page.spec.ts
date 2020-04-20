import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAnt03Page } from './tab-ant03.page';

describe('TabAnt03Page', () => {
  let component: TabAnt03Page;
  let fixture: ComponentFixture<TabAnt03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAnt03Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAnt03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
