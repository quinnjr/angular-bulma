import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FloatableDirective } from './floatable.directive';

@Component({
  template: `<div appFloatable></div>`
})
class TestComponent {}

describe('FloatableDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: any;

  beforeAll(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [FloatableDirective]
    }).createComponent(TestComponent);

    directive = fixture.debugElement
      .query(By.directive(FloatableDirective))
      .injector.get(FloatableDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
