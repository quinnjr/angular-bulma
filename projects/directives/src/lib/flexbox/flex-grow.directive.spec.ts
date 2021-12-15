import {
  BulmaIsFlexGrow0Directive,
  BulmaIsFlexGrow1Directive,
  BulmaIsFlexGrow2Directive,
  BulmaIsFlexGrow3Directive,
  BulmaIsFlexGrow4Directive,
  BulmaIsFlexGrow5Directive,
} from './flex-grow.directive';

import { TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('FlexGrow Directives', () => {
  describe('BulmaIsFlexGrow0Directive', () => {
    @Component({
      template: `
        <div bu-is-flex-grow-0 id="test1"></div>
        <div [bu-is-flex-grow-0]="true" id="test2"></div>
        <div [bu-is-flex-grow-0]="false" id="test3"></div>
        <div [bu-is-flex-grow-0]="testMeTrue()" id="test4"></div>
        <div [bu-is-flex-grow-0]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsFlexGrow0Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsFlexGrow0Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-flex-grow-0')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-flex-grow-0')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-flex-grow-0')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-flex-grow-0')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-flex-grow-0')).toBeFalsy();
    });
  });

  describe('BulmaIsFlexGrow1Directive', () => {
    @Component({
      template: `
        <div bu-is-flex-grow-1 id="test1"></div>
        <div [bu-is-flex-grow-1]="true" id="test2"></div>
        <div [bu-is-flex-grow-1]="false" id="test3"></div>
        <div [bu-is-flex-grow-1]="testMeTrue()" id="test4"></div>
        <div [bu-is-flex-grow-1]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsFlexGrow1Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsFlexGrow1Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-flex-grow-1')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-flex-grow-1')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-flex-grow-1')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-flex-grow-1')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-flex-grow-1')).toBeFalsy();
    });
  });

  describe('BulmaIsFlexGrow2Directive', () => {
    @Component({
      template: `
        <div bu-is-flex-grow-2 id="test1"></div>
        <div [bu-is-flex-grow-2]="true" id="test2"></div>
        <div [bu-is-flex-grow-2]="false" id="test3"></div>
        <div [bu-is-flex-grow-2]="testMeTrue()" id="test4"></div>
        <div [bu-is-flex-grow-2]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsFlexGrow2Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsFlexGrow2Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-flex-grow-2')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-flex-grow-2')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-flex-grow-2')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-flex-grow-2')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-flex-grow-2')).toBeFalsy();
    });
  });

  describe('BulmaIsFlexGrow3Directive', () => {
    @Component({
      template: `
        <div bu-is-flex-grow-3 id="test1"></div>
        <div [bu-is-flex-grow-3]="true" id="test2"></div>
        <div [bu-is-flex-grow-3]="false" id="test3"></div>
        <div [bu-is-flex-grow-3]="testMeTrue()" id="test4"></div>
        <div [bu-is-flex-grow-3]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsFlexGrow3Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsFlexGrow3Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-flex-grow-3')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-flex-grow-3')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-flex-grow-3')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-flex-grow-3')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-flex-grow-3')).toBeFalsy();
    });
  });

  describe('BulmaIsFlexGrow4Directive', () => {
    @Component({
      template: `
        <div bu-is-flex-grow-4 id="test1"></div>
        <div [bu-is-flex-grow-4]="true" id="test2"></div>
        <div [bu-is-flex-grow-4]="false" id="test3"></div>
        <div [bu-is-flex-grow-4]="testMeTrue()" id="test4"></div>
        <div [bu-is-flex-grow-4]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsFlexGrow4Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsFlexGrow4Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-flex-grow-4')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-flex-grow-4')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-flex-grow-4')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-flex-grow-4')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-flex-grow-4')).toBeFalsy();
    });
  });

  describe('BulmaIsFlexGrow5Directive', () => {
    @Component({
      template: `
        <div bu-is-flex-grow-5 id="test1"></div>
        <div [bu-is-flex-grow-5]="true" id="test2"></div>
        <div [bu-is-flex-grow-5]="false" id="test3"></div>
        <div [bu-is-flex-grow-5]="testMeTrue()" id="test4"></div>
        <div [bu-is-flex-grow-5]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsFlexGrow5Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsFlexGrow5Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-flex-grow-5')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-flex-grow-5')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-flex-grow-5')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-flex-grow-5')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-flex-grow-5')).toBeFalsy();
    });
  });
});
