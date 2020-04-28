import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindfoodPage } from './findfood.page';

describe('FindfoodPage', () => {
  let component: FindfoodPage;
  let fixture: ComponentFixture<FindfoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindfoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
