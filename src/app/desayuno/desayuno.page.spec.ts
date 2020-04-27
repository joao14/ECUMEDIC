import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesayunoPage } from './desayuno.page';

describe('DesayunoPage', () => {
  let component: DesayunoPage;
  let fixture: ComponentFixture<DesayunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesayunoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesayunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
