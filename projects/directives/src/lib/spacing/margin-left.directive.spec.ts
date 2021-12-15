import {
  BulmaMl0Directive,
  BulmaMl1Directive,
  BulmaMl2Directive,
  BulmaMl3Directive,
  BulmaMl4Directive,
  BulmaMl5Directive,
  BulmaMl6Directive,
} from './margin-left.directive';

import { TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('MarginLeft Directives', () => {
  describe('BulmaMl0Directive', () => {
    @Component({
      template: `
        <div bu-ml-0 id="test1"></div>
        <div [bu-ml-0]="true" id="test2"></div>
        <div [bu-ml-0]="false" id="test3"></div>
        <div [bu-ml-0]="testMeTrue()" id="test4"></div>
        <div [bu-ml-0]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMl0Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMl0Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('ml-0')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('ml-0')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('ml-0')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('ml-0')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('ml-0')).toBeFalsy();
    });
  });

  describe('BulmaMl1Directive', () => {
    @Component({
      template: `
        <div bu-ml-1 id="test1"></div>
        <div [bu-ml-1]="true" id="test2"></div>
        <div [bu-ml-1]="false" id="test3"></div>
        <div [bu-ml-1]="testMeTrue()" id="test4"></div>
        <div [bu-ml-1]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMl1Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMl1Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('ml-1')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('ml-1')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('ml-1')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('ml-1')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('ml-1')).toBeFalsy();
    });
  });

  describe('BulmaMl2Directive', () => {
    @Component({
      template: `
        <div bu-ml-2 id="test1"></div>
        <div [bu-ml-2]="true" id="test2"></div>
        <div [bu-ml-2]="false" id="test3"></div>
        <div [bu-ml-2]="testMeTrue()" id="test4"></div>
        <div [bu-ml-2]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMl2Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMl2Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('ml-2')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('ml-2')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('ml-2')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('ml-2')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('ml-2')).toBeFalsy();
    });
  });

  describe('BulmaMl3Directive', () => {
    @Component({
      template: `
        <div bu-ml-3 id="test1"></div>
        <div [bu-ml-3]="true" id="test2"></div>
        <div [bu-ml-3]="false" id="test3"></div>
        <div [bu-ml-3]="testMeTrue()" id="test4"></div>
        <div [bu-ml-3]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMl3Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMl3Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('ml-3')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('ml-3')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('ml-3')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('ml-3')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('ml-3')).toBeFalsy();
    });
  });

  describe('BulmaMl4Directive', () => {
    @Component({
      template: `
        <div bu-ml-4 id="test1"></div>
        <div [bu-ml-4]="true" id="test2"></div>
        <div [bu-ml-4]="false" id="test3"></div>
        <div [bu-ml-4]="testMeTrue()" id="test4"></div>
        <div [bu-ml-4]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMl4Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMl4Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('ml-4')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('ml-4')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('ml-4')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('ml-4')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('ml-4')).toBeFalsy();
    });
  });

  describe('BulmaMl5Directive', () => {
    @Component({
      template: `
        <div bu-ml-5 id="test1"></div>
        <div [bu-ml-5]="true" id="test2"></div>
        <div [bu-ml-5]="false" id="test3"></div>
        <div [bu-ml-5]="testMeTrue()" id="test4"></div>
        <div [bu-ml-5]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMl5Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMl5Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('ml-5')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('ml-5')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('ml-5')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('ml-5')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('ml-5')).toBeFalsy();
    });
  });

  describe('BulmaMl6Directive', () => {
    @Component({
      template: `
        <div bu-ml-6 id="test1"></div>
        <div [bu-ml-6]="true" id="test2"></div>
        <div [bu-ml-6]="false" id="test3"></div>
        <div [bu-ml-6]="testMeTrue()" id="test4"></div>
        <div [bu-ml-6]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMl6Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMl6Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('ml-6')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('ml-6')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('ml-6')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('ml-6')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('ml-6')).toBeFalsy();
    });
  });
});
