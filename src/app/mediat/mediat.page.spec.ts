import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediatPage } from './mediat.page';

describe('MediatPage', () => {
  let component: MediatPage;
  let fixture: ComponentFixture<MediatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
