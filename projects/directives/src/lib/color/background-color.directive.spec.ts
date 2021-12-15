import {
  BulmaHasBackgroundWhiteDirective,
  BulmaHasBackgroundBlackDirective,
  BulmaHasBackgroundLightDirective,
  BulmaHasBackgroundDarkDirective,
  BulmaHasBackgroundPrimaryDirective,
  BulmaHasBackgroundLinkDirective,
  BulmaHasBackgroundInfoDirective,
  BulmaHasBackgroundSuccessDirective,
  BulmaHasBackgroundWarningDirective,
  BulmaHasBackgroundDangerDirective,
  BulmaHasBackgroundBlackBisDirective,
  BulmaHasBackgroundBlackTerDirective,
  BulmaHasBackgroundGreyDarkerDirective,
  BulmaHasBackgroundGreyDarkDirective,
  BulmaHasBackgroundGreyDirective,
  BulmaHasBackgroundGreyLightDirective,
  BulmaHasBackgroundGreyLighterDirective,
  BulmaHasBackgroundWhiteTerDirective,
  BulmaHasBackgroundWhiteBisDirective,
  BulmaHasBackgroundPrimaryLightDirective,
  BulmaHasBackgroundLinkLightDirective,
  BulmaHasBackgroundInfoLightDirective,
  BulmaHasBackgroundSuccessLightDirective,
  BulmaHasBackgroundWarningLightDirective,
  BulmaHasBackgroundDangerLightDirective,
  BulmaHasBackgroundPrimaryDarkDirective,
  BulmaHasBackgroundLinkDarkDirective,
  BulmaHasBackgroundInfoDarkDirective,
  BulmaHasBackgroundSuccessDarkDirective,
  BulmaHasBackgroundWarningDarkDirective,
  BulmaHasBackgroundDangerDarkDirective
} from './background-color.directive';

import { TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('BackgroundColor Directives', () => {
  describe('BulmaHasBackgroundWhiteDirective', () => {
    @Component({
      template: `
        <div bu-has-background-white id="test1"></div>
        <div [bu-has-background-white]="true" id="test2"></div>
        <div [bu-has-background-white]="false" id="test3"></div>
        <div [bu-has-background-white]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-white]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundWhiteDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundWhiteDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-white')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-white')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-white')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-white')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-white')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundBlackDirective', () => {
    @Component({
      template: `
        <div bu-has-background-black id="test1"></div>
        <div [bu-has-background-black]="true" id="test2"></div>
        <div [bu-has-background-black]="false" id="test3"></div>
        <div [bu-has-background-black]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-black]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundBlackDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundBlackDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-black')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-black')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-black')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-black')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-black')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundLightDirective', () => {
    @Component({
      template: `
        <div bu-has-background-light id="test1"></div>
        <div [bu-has-background-light]="true" id="test2"></div>
        <div [bu-has-background-light]="false" id="test3"></div>
        <div [bu-has-background-light]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-light]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundLightDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundLightDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-light')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-light')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-light')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-light')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-light')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundDarkDirective', () => {
    @Component({
      template: `
        <div bu-has-background-dark id="test1"></div>
        <div [bu-has-background-dark]="true" id="test2"></div>
        <div [bu-has-background-dark]="false" id="test3"></div>
        <div [bu-has-background-dark]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-dark]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundDarkDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundDarkDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-dark')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-dark')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-dark')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-dark')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-dark')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundPrimaryDirective', () => {
    @Component({
      template: `
        <div bu-has-background-primary id="test1"></div>
        <div [bu-has-background-primary]="true" id="test2"></div>
        <div [bu-has-background-primary]="false" id="test3"></div>
        <div [bu-has-background-primary]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-primary]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundPrimaryDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundPrimaryDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-primary')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-primary')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-primary')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-primary')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-primary')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundLinkDirective', () => {
    @Component({
      template: `
        <div bu-has-background-link id="test1"></div>
        <div [bu-has-background-link]="true" id="test2"></div>
        <div [bu-has-background-link]="false" id="test3"></div>
        <div [bu-has-background-link]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-link]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundLinkDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundLinkDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-link')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-link')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-link')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-link')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-link')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundInfoDirective', () => {
    @Component({
      template: `
        <div bu-has-background-info id="test1"></div>
        <div [bu-has-background-info]="true" id="test2"></div>
        <div [bu-has-background-info]="false" id="test3"></div>
        <div [bu-has-background-info]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-info]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundInfoDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundInfoDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-info')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-info')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-info')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-info')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-info')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundSuccessDirective', () => {
    @Component({
      template: `
        <div bu-has-background-success id="test1"></div>
        <div [bu-has-background-success]="true" id="test2"></div>
        <div [bu-has-background-success]="false" id="test3"></div>
        <div [bu-has-background-success]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-success]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundSuccessDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundSuccessDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-success')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-success')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-success')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-success')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-success')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundWarningDirective', () => {
    @Component({
      template: `
        <div bu-has-background-warning id="test1"></div>
        <div [bu-has-background-warning]="true" id="test2"></div>
        <div [bu-has-background-warning]="false" id="test3"></div>
        <div [bu-has-background-warning]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-warning]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundWarningDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundWarningDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-warning')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-warning')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-warning')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-warning')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-warning')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundDangerDirective', () => {
    @Component({
      template: `
        <div bu-has-background-danger id="test1"></div>
        <div [bu-has-background-danger]="true" id="test2"></div>
        <div [bu-has-background-danger]="false" id="test3"></div>
        <div [bu-has-background-danger]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-danger]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundDangerDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundDangerDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-danger')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-danger')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-danger')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-danger')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-danger')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundBlackBisDirective', () => {
    @Component({
      template: `
        <div bu-has-background-black-bis id="test1"></div>
        <div [bu-has-background-black-bis]="true" id="test2"></div>
        <div [bu-has-background-black-bis]="false" id="test3"></div>
        <div [bu-has-background-black-bis]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-black-bis]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundBlackBisDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundBlackBisDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-black-bis')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-black-bis')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-black-bis')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-black-bis')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-black-bis')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundBlackTerDirective', () => {
    @Component({
      template: `
        <div bu-has-background-black-ter id="test1"></div>
        <div [bu-has-background-black-ter]="true" id="test2"></div>
        <div [bu-has-background-black-ter]="false" id="test3"></div>
        <div [bu-has-background-black-ter]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-black-ter]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundBlackTerDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundBlackTerDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-black-ter')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-black-ter')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-black-ter')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-black-ter')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-black-ter')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundGreyDarkerDirective', () => {
    @Component({
      template: `
        <div bu-has-background-grey-darker id="test1"></div>
        <div [bu-has-background-grey-darker]="true" id="test2"></div>
        <div [bu-has-background-grey-darker]="false" id="test3"></div>
        <div [bu-has-background-grey-darker]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-grey-darker]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundGreyDarkerDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundGreyDarkerDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-grey-darker')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-grey-darker')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-grey-darker')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-background-grey-darker')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-background-grey-darker')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundGreyDarkDirective', () => {
    @Component({
      template: `
        <div bu-has-background-grey-dark id="test1"></div>
        <div [bu-has-background-grey-dark]="true" id="test2"></div>
        <div [bu-has-background-grey-dark]="false" id="test3"></div>
        <div [bu-has-background-grey-dark]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-grey-dark]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundGreyDarkDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundGreyDarkDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-grey-dark')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-grey-dark')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-grey-dark')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-grey-dark')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-grey-dark')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundGreyDirective', () => {
    @Component({
      template: `
        <div bu-has-background-grey id="test1"></div>
        <div [bu-has-background-grey]="true" id="test2"></div>
        <div [bu-has-background-grey]="false" id="test3"></div>
        <div [bu-has-background-grey]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-grey]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundGreyDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundGreyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-grey')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-grey')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-grey')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-grey')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-grey')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundGreyLightDirective', () => {
    @Component({
      template: `
        <div bu-has-background-grey-light id="test1"></div>
        <div [bu-has-background-grey-light]="true" id="test2"></div>
        <div [bu-has-background-grey-light]="false" id="test3"></div>
        <div [bu-has-background-grey-light]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-grey-light]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundGreyLightDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundGreyLightDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-grey-light')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-grey-light')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-grey-light')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-grey-light')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-grey-light')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundGreyLighterDirective', () => {
    @Component({
      template: `
        <div bu-has-background-grey-lighter id="test1"></div>
        <div [bu-has-background-grey-lighter]="true" id="test2"></div>
        <div [bu-has-background-grey-lighter]="false" id="test3"></div>
        <div [bu-has-background-grey-lighter]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-grey-lighter]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundGreyLighterDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundGreyLighterDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-grey-lighter')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-grey-lighter')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-grey-lighter')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-background-grey-lighter')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-background-grey-lighter')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundWhiteTerDirective', () => {
    @Component({
      template: `
        <div bu-has-background-white-ter id="test1"></div>
        <div [bu-has-background-white-ter]="true" id="test2"></div>
        <div [bu-has-background-white-ter]="false" id="test3"></div>
        <div [bu-has-background-white-ter]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-white-ter]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundWhiteTerDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundWhiteTerDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-white-ter')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-white-ter')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-white-ter')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-white-ter')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-white-ter')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundWhiteBisDirective', () => {
    @Component({
      template: `
        <div bu-has-background-white-bis id="test1"></div>
        <div [bu-has-background-white-bis]="true" id="test2"></div>
        <div [bu-has-background-white-bis]="false" id="test3"></div>
        <div [bu-has-background-white-bis]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-white-bis]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundWhiteBisDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundWhiteBisDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-white-bis')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-white-bis')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-white-bis')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-white-bis')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-white-bis')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundPrimaryLightDirective', () => {
    @Component({
      template: `
        <div bu-has-background-primary-light id="test1"></div>
        <div [bu-has-background-primary-light]="true" id="test2"></div>
        <div [bu-has-background-primary-light]="false" id="test3"></div>
        <div [bu-has-background-primary-light]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-primary-light]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundPrimaryLightDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundPrimaryLightDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-primary-light')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-primary-light')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-primary-light')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-background-primary-light')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-background-primary-light')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundLinkLightDirective', () => {
    @Component({
      template: `
        <div bu-has-background-link-light id="test1"></div>
        <div [bu-has-background-link-light]="true" id="test2"></div>
        <div [bu-has-background-link-light]="false" id="test3"></div>
        <div [bu-has-background-link-light]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-link-light]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundLinkLightDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundLinkLightDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-link-light')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-link-light')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-link-light')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-link-light')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-link-light')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundInfoLightDirective', () => {
    @Component({
      template: `
        <div bu-has-background-info-light id="test1"></div>
        <div [bu-has-background-info-light]="true" id="test2"></div>
        <div [bu-has-background-info-light]="false" id="test3"></div>
        <div [bu-has-background-info-light]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-info-light]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundInfoLightDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundInfoLightDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-info-light')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-info-light')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-info-light')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-info-light')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-info-light')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundSuccessLightDirective', () => {
    @Component({
      template: `
        <div bu-has-background-success-light id="test1"></div>
        <div [bu-has-background-success-light]="true" id="test2"></div>
        <div [bu-has-background-success-light]="false" id="test3"></div>
        <div [bu-has-background-success-light]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-success-light]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundSuccessLightDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundSuccessLightDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-success-light')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-success-light')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-success-light')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-background-success-light')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-background-success-light')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundWarningLightDirective', () => {
    @Component({
      template: `
        <div bu-has-background-warning-light id="test1"></div>
        <div [bu-has-background-warning-light]="true" id="test2"></div>
        <div [bu-has-background-warning-light]="false" id="test3"></div>
        <div [bu-has-background-warning-light]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-warning-light]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundWarningLightDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundWarningLightDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-warning-light')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-warning-light')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-warning-light')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-background-warning-light')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-background-warning-light')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundDangerLightDirective', () => {
    @Component({
      template: `
        <div bu-has-background-danger-light id="test1"></div>
        <div [bu-has-background-danger-light]="true" id="test2"></div>
        <div [bu-has-background-danger-light]="false" id="test3"></div>
        <div [bu-has-background-danger-light]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-danger-light]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundDangerLightDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundDangerLightDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-danger-light')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-danger-light')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-danger-light')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-background-danger-light')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-background-danger-light')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundPrimaryDarkDirective', () => {
    @Component({
      template: `
        <div bu-has-background-primary-dark id="test1"></div>
        <div [bu-has-background-primary-dark]="true" id="test2"></div>
        <div [bu-has-background-primary-dark]="false" id="test3"></div>
        <div [bu-has-background-primary-dark]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-primary-dark]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundPrimaryDarkDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundPrimaryDarkDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-primary-dark')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-primary-dark')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-primary-dark')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-background-primary-dark')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-background-primary-dark')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundLinkDarkDirective', () => {
    @Component({
      template: `
        <div bu-has-background-link-dark id="test1"></div>
        <div [bu-has-background-link-dark]="true" id="test2"></div>
        <div [bu-has-background-link-dark]="false" id="test3"></div>
        <div [bu-has-background-link-dark]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-link-dark]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundLinkDarkDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundLinkDarkDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-link-dark')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-link-dark')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-link-dark')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-link-dark')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-link-dark')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundInfoDarkDirective', () => {
    @Component({
      template: `
        <div bu-has-background-info-dark id="test1"></div>
        <div [bu-has-background-info-dark]="true" id="test2"></div>
        <div [bu-has-background-info-dark]="false" id="test3"></div>
        <div [bu-has-background-info-dark]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-info-dark]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundInfoDarkDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundInfoDarkDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-background-info-dark')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-background-info-dark')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-background-info-dark')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-background-info-dark')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-background-info-dark')).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundSuccessDarkDirective', () => {
    @Component({
      template: `
        <div bu-has-background-success-dark id="test1"></div>
        <div [bu-has-background-success-dark]="true" id="test2"></div>
        <div [bu-has-background-success-dark]="false" id="test3"></div>
        <div [bu-has-background-success-dark]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-success-dark]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundSuccessDarkDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundSuccessDarkDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-success-dark')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-success-dark')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-success-dark')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-background-success-dark')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-background-success-dark')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundWarningDarkDirective', () => {
    @Component({
      template: `
        <div bu-has-background-warning-dark id="test1"></div>
        <div [bu-has-background-warning-dark]="true" id="test2"></div>
        <div [bu-has-background-warning-dark]="false" id="test3"></div>
        <div [bu-has-background-warning-dark]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-warning-dark]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundWarningDarkDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundWarningDarkDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-warning-dark')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-warning-dark')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-warning-dark')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-background-warning-dark')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-background-warning-dark')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasBackgroundDangerDarkDirective', () => {
    @Component({
      template: `
        <div bu-has-background-danger-dark id="test1"></div>
        <div [bu-has-background-danger-dark]="true" id="test2"></div>
        <div [bu-has-background-danger-dark]="false" id="test3"></div>
        <div [bu-has-background-danger-dark]="testMeTrue()" id="test4"></div>
        <div [bu-has-background-danger-dark]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasBackgroundDangerDarkDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasBackgroundDangerDarkDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-background-danger-dark')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-background-danger-dark')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-background-danger-dark')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-background-danger-dark')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-background-danger-dark')
      ).toBeFalsy();
    });
  });
});
