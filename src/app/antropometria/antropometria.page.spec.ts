import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntropometriaPage } from './antropometria.page';

describe('AntropometriaPage', () => {
  let component: AntropometriaPage;
  let fixture: ComponentFixture<AntropometriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntropometriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntropometriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
