/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FruitItemComponent } from './fruit-item.component';

describe('FruitItemComponent', () => {
  let component: FruitItemComponent;
  let fixture: ComponentFixture<FruitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
