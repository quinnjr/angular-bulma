import {
  BulmaIsFlexDirectionRowDirective,
  BulmaIsFlexDirectionRowReverseDirective,
  BulmaIsFlexDirectionColumnDirective,
  BulmaIsFlexDirectionColumnReverseDirective
} from './flex-direction.directive';

import { TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('FlexDirection Directives', () => {
  describe('BulmaIsFlexDirectionRowDirective', () => {
    @Component({
      template: `
        <div bu-is-flex-direction-row id="test1"></div>
        <div [bu-is-flex-direction-row]="true" id="test2"></div>
        <div [bu-is-flex-direction-row]="false" id="test3"></div>
        <div [bu-is-flex-direction-row]="testMeTrue()" id="test4"></div>
        <div [bu-is-flex-direction-row]="testMeFalse()" id="test5"></div>
      `
    })
    class TestComponent {
      public testMeTrue(): boolean {
        return true;
      }

      public testMeFalse(): boolean {
        return false;
      }
    }

    let fixture: any;

    beforeAll(() => {
      fixture = TestBed.configureTestingModule({
        imports: [CommonModule],
        declarations: [TestComponent, BulmaIsFlexDirectionRowDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsFlexDirectionRowDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-flex-direction-row')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-flex-direction-row')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-flex-direction-row')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-flex-direction-row')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-flex-direction-row')).toBeFalsy();
    });
  });

  describe('BulmaIsFlexDirectionRowReverseDirective', () => {
    @Component({
      template: `
        <div bu-is-flex-direction-row-reverse id="test1"></div>
        <div [bu-is-flex-direction-row-reverse]="true" id="test2"></div>
        <div [bu-is-flex-direction-row-reverse]="false" id="test3"></div>
        <div [bu-is-flex-direction-row-reverse]="testMeTrue()" id="test4"></div>
        <div
          [bu-is-flex-direction-row-reverse]="testMeFalse()"
          id="test5"
        ></div>
      `
    })
    class TestComponent {
      public testMeTrue(): boolean {
        return true;
      }

      public testMeFalse(): boolean {
        return false;
      }
    }

    let fixture: any;

    beforeAll(() => {
      fixture = TestBed.configureTestingModule({
        imports: [CommonModule],
        declarations: [TestComponent, BulmaIsFlexDirectionRowReverseDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsFlexDirectionRowReverseDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('is-flex-direction-row-reverse')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('is-flex-direction-row-reverse')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('is-flex-direction-row-reverse')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('is-flex-direction-row-reverse')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('is-flex-direction-row-reverse')
      ).toBeFalsy();
    });
  });

  describe('BulmaIsFlexDirectionColumnDirective', () => {
    @Component({
      template: `
        <div bu-is-flex-direction-column id="test1"></div>
        <div [bu-is-flex-direction-column]="true" id="test2"></div>
        <div [bu-is-flex-direction-column]="false" id="test3"></div>
        <div [bu-is-flex-direction-column]="testMeTrue()" id="test4"></div>
        <div [bu-is-flex-direction-column]="testMeFalse()" id="test5"></div>
      `
    })
    class TestComponent {
      public testMeTrue(): boolean {
        return true;
      }

      public testMeFalse(): boolean {
        return false;
      }
    }

    let fixture: any;

    beforeAll(() => {
      fixture = TestBed.configureTestingModule({
        imports: [CommonModule],
        declarations: [TestComponent, BulmaIsFlexDirectionColumnDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsFlexDirectionColumnDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-flex-direction-column')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-flex-direction-column')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-flex-direction-column')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-flex-direction-column')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-flex-direction-column')).toBeFalsy();
    });
  });

  describe('BulmaIsFlexDirectionColumnReverseDirective', () => {
    @Component({
      template: `
        <div bu-is-flex-direction-column-reverse id="test1"></div>
        <div [bu-is-flex-direction-column-reverse]="true" id="test2"></div>
        <div [bu-is-flex-direction-column-reverse]="false" id="test3"></div>
        <div
          [bu-is-flex-direction-column-reverse]="testMeTrue()"
          id="test4"
        ></div>
        <div
          [bu-is-flex-direction-column-reverse]="testMeFalse()"
          id="test5"
        ></div>
      `
    })
    class TestComponent {
      public testMeTrue(): boolean {
        return true;
      }

      public testMeFalse(): boolean {
        return false;
      }
    }

    let fixture: any;

    beforeAll(() => {
      fixture = TestBed.configureTestingModule({
        imports: [CommonModule],
        declarations: [
          TestComponent,
          BulmaIsFlexDirectionColumnReverseDirective
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsFlexDirectionColumnReverseDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('is-flex-direction-column-reverse')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('is-flex-direction-column-reverse')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('is-flex-direction-column-reverse')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('is-flex-direction-column-reverse')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('is-flex-direction-column-reverse')
      ).toBeFalsy();
    });
  });
});
