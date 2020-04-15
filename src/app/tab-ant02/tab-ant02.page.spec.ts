import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAnt02Page } from './tab-ant02.page';

describe('TabAnt02Page', () => {
  let component: TabAnt02Page;
  let fixture: ComponentFixture<TabAnt02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAnt02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAnt02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
