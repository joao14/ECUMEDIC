import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAlimentosPage } from './plan-alimentos.page';

describe('PlanAlimentosPage', () => {
  let component: PlanAlimentosPage;
  let fixture: ComponentFixture<PlanAlimentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanAlimentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAlimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
