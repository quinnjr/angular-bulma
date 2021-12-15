import {
  BulmaIsCapitalizedDirective,
  BulmaIsLowercaseDirective,
  BulmaIsUppercaseDirective,
  BulmaIsItalicDirective,
  BulmaIsUnderlinedDirective,
} from './text-transformation.directive';

import { TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('TextTransformation Directives', () => {
  describe('BulmaIsCapitalizedDirective', () => {
    @Component({
      template: `
        <div bu-is-capitalized id="test1"></div>
        <div [bu-is-capitalized]="true" id="test2"></div>
        <div [bu-is-capitalized]="false" id="test3"></div>
        <div [bu-is-capitalized]="testMeTrue()" id="test4"></div>
        <div [bu-is-capitalized]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsCapitalizedDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsCapitalizedDirective));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-capitalized')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-capitalized')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-capitalized')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-capitalized')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-capitalized')).toBeFalsy();
    });
  });

  describe('BulmaIsLowercaseDirective', () => {
    @Component({
      template: `
        <div bu-is-lowercase id="test1"></div>
        <div [bu-is-lowercase]="true" id="test2"></div>
        <div [bu-is-lowercase]="false" id="test3"></div>
        <div [bu-is-lowercase]="testMeTrue()" id="test4"></div>
        <div [bu-is-lowercase]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsLowercaseDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsLowercaseDirective));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-lowercase')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-lowercase')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-lowercase')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-lowercase')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-lowercase')).toBeFalsy();
    });
  });

  describe('BulmaIsUppercaseDirective', () => {
    @Component({
      template: `
        <div bu-is-uppercase id="test1"></div>
        <div [bu-is-uppercase]="true" id="test2"></div>
        <div [bu-is-uppercase]="false" id="test3"></div>
        <div [bu-is-uppercase]="testMeTrue()" id="test4"></div>
        <div [bu-is-uppercase]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsUppercaseDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsUppercaseDirective));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-uppercase')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-uppercase')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-uppercase')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-uppercase')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-uppercase')).toBeFalsy();
    });
  });

  describe('BulmaIsItalicDirective', () => {
    @Component({
      template: `
        <div bu-is-italic id="test1"></div>
        <div [bu-is-italic]="true" id="test2"></div>
        <div [bu-is-italic]="false" id="test3"></div>
        <div [bu-is-italic]="testMeTrue()" id="test4"></div>
        <div [bu-is-italic]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsItalicDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsItalicDirective));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-italic')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-italic')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-italic')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-italic')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-italic')).toBeFalsy();
    });
  });

  describe('BulmaIsUnderlinedDirective', () => {
    @Component({
      template: `
        <div bu-is-underlined id="test1"></div>
        <div [bu-is-underlined]="true" id="test2"></div>
        <div [bu-is-underlined]="false" id="test3"></div>
        <div [bu-is-underlined]="testMeTrue()" id="test4"></div>
        <div [bu-is-underlined]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsUnderlinedDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsUnderlinedDirective));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-underlined')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-underlined')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-underlined')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-underlined')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-underlined')).toBeFalsy();
    });
  });
});
