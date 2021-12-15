import {
  BulmaMb0Directive,
  BulmaMb1Directive,
  BulmaMb2Directive,
  BulmaMb3Directive,
  BulmaMb4Directive,
  BulmaMb5Directive,
  BulmaMb6Directive,
} from './margin-bottom.directive';

import { TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('MarginBottom Directives', () => {
  describe('BulmaMb0Directive', () => {
    @Component({
      template: `
        <div bu-mb-0 id="test1"></div>
        <div [bu-mb-0]="true" id="test2"></div>
        <div [bu-mb-0]="false" id="test3"></div>
        <div [bu-mb-0]="testMeTrue()" id="test4"></div>
        <div [bu-mb-0]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMb0Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMb0Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('mb-0')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('mb-0')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('mb-0')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('mb-0')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('mb-0')).toBeFalsy();
    });
  });

  describe('BulmaMb1Directive', () => {
    @Component({
      template: `
        <div bu-mb-1 id="test1"></div>
        <div [bu-mb-1]="true" id="test2"></div>
        <div [bu-mb-1]="false" id="test3"></div>
        <div [bu-mb-1]="testMeTrue()" id="test4"></div>
        <div [bu-mb-1]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMb1Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMb1Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('mb-1')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('mb-1')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('mb-1')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('mb-1')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('mb-1')).toBeFalsy();
    });
  });

  describe('BulmaMb2Directive', () => {
    @Component({
      template: `
        <div bu-mb-2 id="test1"></div>
        <div [bu-mb-2]="true" id="test2"></div>
        <div [bu-mb-2]="false" id="test3"></div>
        <div [bu-mb-2]="testMeTrue()" id="test4"></div>
        <div [bu-mb-2]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMb2Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMb2Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('mb-2')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('mb-2')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('mb-2')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('mb-2')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('mb-2')).toBeFalsy();
    });
  });

  describe('BulmaMb3Directive', () => {
    @Component({
      template: `
        <div bu-mb-3 id="test1"></div>
        <div [bu-mb-3]="true" id="test2"></div>
        <div [bu-mb-3]="false" id="test3"></div>
        <div [bu-mb-3]="testMeTrue()" id="test4"></div>
        <div [bu-mb-3]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMb3Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMb3Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('mb-3')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('mb-3')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('mb-3')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('mb-3')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('mb-3')).toBeFalsy();
    });
  });

  describe('BulmaMb4Directive', () => {
    @Component({
      template: `
        <div bu-mb-4 id="test1"></div>
        <div [bu-mb-4]="true" id="test2"></div>
        <div [bu-mb-4]="false" id="test3"></div>
        <div [bu-mb-4]="testMeTrue()" id="test4"></div>
        <div [bu-mb-4]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMb4Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMb4Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('mb-4')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('mb-4')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('mb-4')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('mb-4')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('mb-4')).toBeFalsy();
    });
  });

  describe('BulmaMb5Directive', () => {
    @Component({
      template: `
        <div bu-mb-5 id="test1"></div>
        <div [bu-mb-5]="true" id="test2"></div>
        <div [bu-mb-5]="false" id="test3"></div>
        <div [bu-mb-5]="testMeTrue()" id="test4"></div>
        <div [bu-mb-5]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMb5Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMb5Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('mb-5')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('mb-5')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('mb-5')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('mb-5')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('mb-5')).toBeFalsy();
    });
  });

  describe('BulmaMb6Directive', () => {
    @Component({
      template: `
        <div bu-mb-6 id="test1"></div>
        <div [bu-mb-6]="true" id="test2"></div>
        <div [bu-mb-6]="false" id="test3"></div>
        <div [bu-mb-6]="testMeTrue()" id="test4"></div>
        <div [bu-mb-6]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaMb6Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(BulmaMb6Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('mb-6')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('mb-6')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('mb-6')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('mb-6')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('mb-6')).toBeFalsy();
    });
  });
});
