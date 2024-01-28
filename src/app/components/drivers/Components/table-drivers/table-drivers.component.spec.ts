/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableDriversComponent } from './table-drivers.component';

describe('TableDriversComponent', () => {
  let component: TableDriversComponent;
  let fixture: ComponentFixture<TableDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
