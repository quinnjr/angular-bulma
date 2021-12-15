import {
  BulmaIsSize1Directive,
  BulmaIsSize2Directive,
  BulmaIsSize3Directive,
  BulmaIsSize4Directive,
  BulmaIsSize5Directive,
  BulmaIsSize6Directive,
  BulmaIsSize7Directive,
} from './size.directive';

import { TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('Size Directives', () => {
  describe('BulmaIsSize1Directive', () => {
    @Component({
      template: `
        <div bu-is-size-1 id="test1"></div>
        <div [bu-is-size-1]="true" id="test2"></div>
        <div [bu-is-size-1]="false" id="test3"></div>
        <div [bu-is-size-1]="testMeTrue()" id="test4"></div>
        <div [bu-is-size-1]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsSize1Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsSize1Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-size-1')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-size-1')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-size-1')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-size-1')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-size-1')).toBeFalsy();
    });
  });

  describe('BulmaIsSize2Directive', () => {
    @Component({
      template: `
        <div bu-is-size-2 id="test1"></div>
        <div [bu-is-size-2]="true" id="test2"></div>
        <div [bu-is-size-2]="false" id="test3"></div>
        <div [bu-is-size-2]="testMeTrue()" id="test4"></div>
        <div [bu-is-size-2]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsSize2Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsSize2Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-size-2')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-size-2')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-size-2')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-size-2')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-size-2')).toBeFalsy();
    });
  });

  describe('BulmaIsSize3Directive', () => {
    @Component({
      template: `
        <div bu-is-size-3 id="test1"></div>
        <div [bu-is-size-3]="true" id="test2"></div>
        <div [bu-is-size-3]="false" id="test3"></div>
        <div [bu-is-size-3]="testMeTrue()" id="test4"></div>
        <div [bu-is-size-3]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsSize3Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsSize3Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-size-3')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-size-3')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-size-3')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-size-3')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-size-3')).toBeFalsy();
    });
  });

  describe('BulmaIsSize4Directive', () => {
    @Component({
      template: `
        <div bu-is-size-4 id="test1"></div>
        <div [bu-is-size-4]="true" id="test2"></div>
        <div [bu-is-size-4]="false" id="test3"></div>
        <div [bu-is-size-4]="testMeTrue()" id="test4"></div>
        <div [bu-is-size-4]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsSize4Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsSize4Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-size-4')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-size-4')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-size-4')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-size-4')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-size-4')).toBeFalsy();
    });
  });

  describe('BulmaIsSize5Directive', () => {
    @Component({
      template: `
        <div bu-is-size-5 id="test1"></div>
        <div [bu-is-size-5]="true" id="test2"></div>
        <div [bu-is-size-5]="false" id="test3"></div>
        <div [bu-is-size-5]="testMeTrue()" id="test4"></div>
        <div [bu-is-size-5]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsSize5Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsSize5Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-size-5')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-size-5')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-size-5')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-size-5')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-size-5')).toBeFalsy();
    });
  });

  describe('BulmaIsSize6Directive', () => {
    @Component({
      template: `
        <div bu-is-size-6 id="test1"></div>
        <div [bu-is-size-6]="true" id="test2"></div>
        <div [bu-is-size-6]="false" id="test3"></div>
        <div [bu-is-size-6]="testMeTrue()" id="test4"></div>
        <div [bu-is-size-6]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsSize6Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsSize6Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-size-6')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-size-6')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-size-6')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-size-6')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-size-6')).toBeFalsy();
    });
  });

  describe('BulmaIsSize7Directive', () => {
    @Component({
      template: `
        <div bu-is-size-7 id="test1"></div>
        <div [bu-is-size-7]="true" id="test2"></div>
        <div [bu-is-size-7]="false" id="test3"></div>
        <div [bu-is-size-7]="testMeTrue()" id="test4"></div>
        <div [bu-is-size-7]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsSize7Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaIsSize7Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-size-7')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-size-7')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-size-7')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-size-7')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-size-7')).toBeFalsy();
    });
  });
});
