import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenaPage } from './cena.page';

describe('CenaPage', () => {
  let component: CenaPage;
  let fixture: ComponentFixture<CenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
