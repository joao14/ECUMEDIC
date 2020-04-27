import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmuerzoPage } from './almuerzo.page';

describe('AlmuerzoPage', () => {
  let component: AlmuerzoPage;
  let fixture: ComponentFixture<AlmuerzoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmuerzoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmuerzoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
