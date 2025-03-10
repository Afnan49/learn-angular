/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExplaineComponent } from './explaine.component';

describe('ExplaineComponent', () => {
  let component: ExplaineComponent;
  let fixture: ComponentFixture<ExplaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
