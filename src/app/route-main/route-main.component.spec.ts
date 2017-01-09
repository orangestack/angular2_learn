/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouteMainComponent } from './route-main.component';

describe('RouteMainComponent', () => {
  let component: RouteMainComponent;
  let fixture: ComponentFixture<RouteMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
