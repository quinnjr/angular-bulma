import {
  BulmaHasTextCenteredMobileDirective,
  BulmaHasTextCenteredTouchDirective,
  BulmaHasTextCenteredTabletOnlyDirective,
  BulmaHasTextCenteredTabletDirective,
  BulmaHasTextCenteredDesktopOnlyDirective,
  BulmaHasTextCenteredDesktopDirective,
  BulmaHasTextCenteredWidescreenOnlyDirective,
  BulmaHasTextCenteredWidescreenDirective,
  BulmaHasTextCenteredFullhdDirective,
  BulmaHasTextJustifiedMobileDirective,
  BulmaHasTextJustifiedTouchDirective,
  BulmaHasTextJustifiedTabletOnlyDirective,
  BulmaHasTextJustifiedTabletDirective,
  BulmaHasTextJustifiedDesktopOnlyDirective,
  BulmaHasTextJustifiedDesktopDirective,
  BulmaHasTextJustifiedWidescreenOnlyDirective,
  BulmaHasTextJustifiedWidescreenDirective,
  BulmaHasTextJustifiedFullhdDirective,
  BulmaHasTextLeftMobileDirective,
  BulmaHasTextLeftTouchDirective,
  BulmaHasTextLeftTabletOnlyDirective,
  BulmaHasTextLeftTabletDirective,
  BulmaHasTextLeftDesktopOnlyDirective,
  BulmaHasTextLeftDesktopDirective,
  BulmaHasTextLeftWidescreenOnlyDirective,
  BulmaHasTextLeftWidescreenDirective,
  BulmaHasTextLeftFullhdDirective,
  BulmaHasTextRightMobileDirective,
  BulmaHasTextRightTouchDirective,
  BulmaHasTextRightTabletOnlyDirective,
  BulmaHasTextRightTabletDirective,
  BulmaHasTextRightDesktopOnlyDirective,
  BulmaHasTextRightDesktopDirective,
  BulmaHasTextRightWidescreenOnlyDirective,
  BulmaHasTextRightWidescreenDirective,
  BulmaHasTextRightFullhdDirective
} from './responsive-alignment.directive';

import { TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('ResponsiveAlignment Directives', () => {
  describe('BulmaHasTextCenteredMobileDirective', () => {
    @Component({
      template: `
        <div bu-has-text-centered-mobile id="test1"></div>
        <div [bu-has-text-centered-mobile]="true" id="test2"></div>
        <div [bu-has-text-centered-mobile]="false" id="test3"></div>
        <div [bu-has-text-centered-mobile]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-centered-mobile]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextCenteredMobileDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextCenteredMobileDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-centered-mobile')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-centered-mobile')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-centered-mobile')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-centered-mobile')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-centered-mobile')).toBeFalsy();
    });
  });

  describe('BulmaHasTextCenteredTouchDirective', () => {
    @Component({
      template: `
        <div bu-has-text-centered-touch id="test1"></div>
        <div [bu-has-text-centered-touch]="true" id="test2"></div>
        <div [bu-has-text-centered-touch]="false" id="test3"></div>
        <div [bu-has-text-centered-touch]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-centered-touch]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextCenteredTouchDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextCenteredTouchDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-centered-touch')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-centered-touch')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-centered-touch')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-centered-touch')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-centered-touch')).toBeFalsy();
    });
  });

  describe('BulmaHasTextCenteredTabletOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-centered-tablet-only id="test1"></div>
        <div [bu-has-text-centered-tablet-only]="true" id="test2"></div>
        <div [bu-has-text-centered-tablet-only]="false" id="test3"></div>
        <div [bu-has-text-centered-tablet-only]="testMeTrue()" id="test4"></div>
        <div
          [bu-has-text-centered-tablet-only]="testMeFalse()"
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
        declarations: [TestComponent, BulmaHasTextCenteredTabletOnlyDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextCenteredTabletOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-centered-tablet-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-centered-tablet-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-centered-tablet-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-centered-tablet-only')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-centered-tablet-only')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextCenteredTabletDirective', () => {
    @Component({
      template: `
        <div bu-has-text-centered-tablet id="test1"></div>
        <div [bu-has-text-centered-tablet]="true" id="test2"></div>
        <div [bu-has-text-centered-tablet]="false" id="test3"></div>
        <div [bu-has-text-centered-tablet]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-centered-tablet]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextCenteredTabletDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextCenteredTabletDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-centered-tablet')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-centered-tablet')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-centered-tablet')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-centered-tablet')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-centered-tablet')).toBeFalsy();
    });
  });

  describe('BulmaHasTextCenteredDesktopOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-centered-desktop-only id="test1"></div>
        <div [bu-has-text-centered-desktop-only]="true" id="test2"></div>
        <div [bu-has-text-centered-desktop-only]="false" id="test3"></div>
        <div
          [bu-has-text-centered-desktop-only]="testMeTrue()"
          id="test4"
        ></div>
        <div
          [bu-has-text-centered-desktop-only]="testMeFalse()"
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
        declarations: [TestComponent, BulmaHasTextCenteredDesktopOnlyDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextCenteredDesktopOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-centered-desktop-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-centered-desktop-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-centered-desktop-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-centered-desktop-only')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-centered-desktop-only')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextCenteredDesktopDirective', () => {
    @Component({
      template: `
        <div bu-has-text-centered-desktop id="test1"></div>
        <div [bu-has-text-centered-desktop]="true" id="test2"></div>
        <div [bu-has-text-centered-desktop]="false" id="test3"></div>
        <div [bu-has-text-centered-desktop]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-centered-desktop]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextCenteredDesktopDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextCenteredDesktopDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-centered-desktop')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-centered-desktop')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-centered-desktop')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-centered-desktop')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-centered-desktop')).toBeFalsy();
    });
  });

  describe('BulmaHasTextCenteredWidescreenOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-centered-widescreen-only id="test1"></div>
        <div [bu-has-text-centered-widescreen-only]="true" id="test2"></div>
        <div [bu-has-text-centered-widescreen-only]="false" id="test3"></div>
        <div
          [bu-has-text-centered-widescreen-only]="testMeTrue()"
          id="test4"
        ></div>
        <div
          [bu-has-text-centered-widescreen-only]="testMeFalse()"
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
          BulmaHasTextCenteredWidescreenOnlyDirective
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextCenteredWidescreenOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-centered-widescreen-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-centered-widescreen-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-centered-widescreen-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-centered-widescreen-only')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-centered-widescreen-only')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextCenteredWidescreenDirective', () => {
    @Component({
      template: `
        <div bu-has-text-centered-widescreen id="test1"></div>
        <div [bu-has-text-centered-widescreen]="true" id="test2"></div>
        <div [bu-has-text-centered-widescreen]="false" id="test3"></div>
        <div [bu-has-text-centered-widescreen]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-centered-widescreen]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextCenteredWidescreenDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextCenteredWidescreenDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-centered-widescreen')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-centered-widescreen')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-centered-widescreen')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-centered-widescreen')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-centered-widescreen')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextCenteredFullhdDirective', () => {
    @Component({
      template: `
        <div bu-has-text-centered-fullhd id="test1"></div>
        <div [bu-has-text-centered-fullhd]="true" id="test2"></div>
        <div [bu-has-text-centered-fullhd]="false" id="test3"></div>
        <div [bu-has-text-centered-fullhd]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-centered-fullhd]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextCenteredFullhdDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextCenteredFullhdDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-centered-fullhd')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-centered-fullhd')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-centered-fullhd')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-centered-fullhd')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-centered-fullhd')).toBeFalsy();
    });
  });

  describe('BulmaHasTextJustifiedMobileDirective', () => {
    @Component({
      template: `
        <div bu-has-text-justified-mobile id="test1"></div>
        <div [bu-has-text-justified-mobile]="true" id="test2"></div>
        <div [bu-has-text-justified-mobile]="false" id="test3"></div>
        <div [bu-has-text-justified-mobile]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-justified-mobile]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextJustifiedMobileDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextJustifiedMobileDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-justified-mobile')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-justified-mobile')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-justified-mobile')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-justified-mobile')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-justified-mobile')).toBeFalsy();
    });
  });

  describe('BulmaHasTextJustifiedTouchDirective', () => {
    @Component({
      template: `
        <div bu-has-text-justified-touch id="test1"></div>
        <div [bu-has-text-justified-touch]="true" id="test2"></div>
        <div [bu-has-text-justified-touch]="false" id="test3"></div>
        <div [bu-has-text-justified-touch]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-justified-touch]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextJustifiedTouchDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextJustifiedTouchDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-justified-touch')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-justified-touch')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-justified-touch')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-justified-touch')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-justified-touch')).toBeFalsy();
    });
  });

  describe('BulmaHasTextJustifiedTabletOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-justified-tablet-only id="test1"></div>
        <div [bu-has-text-justified-tablet-only]="true" id="test2"></div>
        <div [bu-has-text-justified-tablet-only]="false" id="test3"></div>
        <div
          [bu-has-text-justified-tablet-only]="testMeTrue()"
          id="test4"
        ></div>
        <div
          [bu-has-text-justified-tablet-only]="testMeFalse()"
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
        declarations: [TestComponent, BulmaHasTextJustifiedTabletOnlyDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextJustifiedTabletOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-justified-tablet-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-justified-tablet-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-justified-tablet-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-justified-tablet-only')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-justified-tablet-only')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextJustifiedTabletDirective', () => {
    @Component({
      template: `
        <div bu-has-text-justified-tablet id="test1"></div>
        <div [bu-has-text-justified-tablet]="true" id="test2"></div>
        <div [bu-has-text-justified-tablet]="false" id="test3"></div>
        <div [bu-has-text-justified-tablet]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-justified-tablet]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextJustifiedTabletDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextJustifiedTabletDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-justified-tablet')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-justified-tablet')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-justified-tablet')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-justified-tablet')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-justified-tablet')).toBeFalsy();
    });
  });

  describe('BulmaHasTextJustifiedDesktopOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-justified-desktop-only id="test1"></div>
        <div [bu-has-text-justified-desktop-only]="true" id="test2"></div>
        <div [bu-has-text-justified-desktop-only]="false" id="test3"></div>
        <div
          [bu-has-text-justified-desktop-only]="testMeTrue()"
          id="test4"
        ></div>
        <div
          [bu-has-text-justified-desktop-only]="testMeFalse()"
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
          BulmaHasTextJustifiedDesktopOnlyDirective
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextJustifiedDesktopOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-justified-desktop-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-justified-desktop-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-justified-desktop-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-justified-desktop-only')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-justified-desktop-only')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextJustifiedDesktopDirective', () => {
    @Component({
      template: `
        <div bu-has-text-justified-desktop id="test1"></div>
        <div [bu-has-text-justified-desktop]="true" id="test2"></div>
        <div [bu-has-text-justified-desktop]="false" id="test3"></div>
        <div [bu-has-text-justified-desktop]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-justified-desktop]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextJustifiedDesktopDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextJustifiedDesktopDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-justified-desktop')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-justified-desktop')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-justified-desktop')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-justified-desktop')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-justified-desktop')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextJustifiedWidescreenOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-justified-widescreen-only id="test1"></div>
        <div [bu-has-text-justified-widescreen-only]="true" id="test2"></div>
        <div [bu-has-text-justified-widescreen-only]="false" id="test3"></div>
        <div
          [bu-has-text-justified-widescreen-only]="testMeTrue()"
          id="test4"
        ></div>
        <div
          [bu-has-text-justified-widescreen-only]="testMeFalse()"
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
          BulmaHasTextJustifiedWidescreenOnlyDirective
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextJustifiedWidescreenOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-justified-widescreen-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-justified-widescreen-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-justified-widescreen-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-justified-widescreen-only')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-justified-widescreen-only')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextJustifiedWidescreenDirective', () => {
    @Component({
      template: `
        <div bu-has-text-justified-widescreen id="test1"></div>
        <div [bu-has-text-justified-widescreen]="true" id="test2"></div>
        <div [bu-has-text-justified-widescreen]="false" id="test3"></div>
        <div [bu-has-text-justified-widescreen]="testMeTrue()" id="test4"></div>
        <div
          [bu-has-text-justified-widescreen]="testMeFalse()"
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
        declarations: [TestComponent, BulmaHasTextJustifiedWidescreenDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextJustifiedWidescreenDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-justified-widescreen')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-justified-widescreen')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-justified-widescreen')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-justified-widescreen')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-justified-widescreen')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextJustifiedFullhdDirective', () => {
    @Component({
      template: `
        <div bu-has-text-justified-fullhd id="test1"></div>
        <div [bu-has-text-justified-fullhd]="true" id="test2"></div>
        <div [bu-has-text-justified-fullhd]="false" id="test3"></div>
        <div [bu-has-text-justified-fullhd]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-justified-fullhd]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextJustifiedFullhdDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextJustifiedFullhdDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-justified-fullhd')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-justified-fullhd')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-justified-fullhd')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-justified-fullhd')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-justified-fullhd')).toBeFalsy();
    });
  });

  describe('BulmaHasTextLeftMobileDirective', () => {
    @Component({
      template: `
        <div bu-has-text-left-mobile id="test1"></div>
        <div [bu-has-text-left-mobile]="true" id="test2"></div>
        <div [bu-has-text-left-mobile]="false" id="test3"></div>
        <div [bu-has-text-left-mobile]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-left-mobile]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextLeftMobileDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextLeftMobileDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-left-mobile')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-left-mobile')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-left-mobile')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-left-mobile')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-left-mobile')).toBeFalsy();
    });
  });

  describe('BulmaHasTextLeftTouchDirective', () => {
    @Component({
      template: `
        <div bu-has-text-left-touch id="test1"></div>
        <div [bu-has-text-left-touch]="true" id="test2"></div>
        <div [bu-has-text-left-touch]="false" id="test3"></div>
        <div [bu-has-text-left-touch]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-left-touch]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextLeftTouchDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextLeftTouchDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-left-touch')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-left-touch')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-left-touch')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-left-touch')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-left-touch')).toBeFalsy();
    });
  });

  describe('BulmaHasTextLeftTabletOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-left-tablet-only id="test1"></div>
        <div [bu-has-text-left-tablet-only]="true" id="test2"></div>
        <div [bu-has-text-left-tablet-only]="false" id="test3"></div>
        <div [bu-has-text-left-tablet-only]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-left-tablet-only]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextLeftTabletOnlyDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextLeftTabletOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-left-tablet-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-left-tablet-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-left-tablet-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-left-tablet-only')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-left-tablet-only')).toBeFalsy();
    });
  });

  describe('BulmaHasTextLeftTabletDirective', () => {
    @Component({
      template: `
        <div bu-has-text-left-tablet id="test1"></div>
        <div [bu-has-text-left-tablet]="true" id="test2"></div>
        <div [bu-has-text-left-tablet]="false" id="test3"></div>
        <div [bu-has-text-left-tablet]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-left-tablet]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextLeftTabletDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextLeftTabletDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-left-tablet')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-left-tablet')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-left-tablet')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-left-tablet')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-left-tablet')).toBeFalsy();
    });
  });

  describe('BulmaHasTextLeftDesktopOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-left-desktop-only id="test1"></div>
        <div [bu-has-text-left-desktop-only]="true" id="test2"></div>
        <div [bu-has-text-left-desktop-only]="false" id="test3"></div>
        <div [bu-has-text-left-desktop-only]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-left-desktop-only]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextLeftDesktopOnlyDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextLeftDesktopOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-left-desktop-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-left-desktop-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-left-desktop-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-left-desktop-only')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-left-desktop-only')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextLeftDesktopDirective', () => {
    @Component({
      template: `
        <div bu-has-text-left-desktop id="test1"></div>
        <div [bu-has-text-left-desktop]="true" id="test2"></div>
        <div [bu-has-text-left-desktop]="false" id="test3"></div>
        <div [bu-has-text-left-desktop]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-left-desktop]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextLeftDesktopDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextLeftDesktopDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-left-desktop')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-left-desktop')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-left-desktop')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-left-desktop')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-left-desktop')).toBeFalsy();
    });
  });

  describe('BulmaHasTextLeftWidescreenOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-left-widescreen-only id="test1"></div>
        <div [bu-has-text-left-widescreen-only]="true" id="test2"></div>
        <div [bu-has-text-left-widescreen-only]="false" id="test3"></div>
        <div [bu-has-text-left-widescreen-only]="testMeTrue()" id="test4"></div>
        <div
          [bu-has-text-left-widescreen-only]="testMeFalse()"
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
        declarations: [TestComponent, BulmaHasTextLeftWidescreenOnlyDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextLeftWidescreenOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-left-widescreen-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-left-widescreen-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-left-widescreen-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-left-widescreen-only')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-left-widescreen-only')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextLeftWidescreenDirective', () => {
    @Component({
      template: `
        <div bu-has-text-left-widescreen id="test1"></div>
        <div [bu-has-text-left-widescreen]="true" id="test2"></div>
        <div [bu-has-text-left-widescreen]="false" id="test3"></div>
        <div [bu-has-text-left-widescreen]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-left-widescreen]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextLeftWidescreenDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextLeftWidescreenDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-left-widescreen')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-left-widescreen')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-left-widescreen')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-left-widescreen')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-left-widescreen')).toBeFalsy();
    });
  });

  describe('BulmaHasTextLeftFullhdDirective', () => {
    @Component({
      template: `
        <div bu-has-text-left-fullhd id="test1"></div>
        <div [bu-has-text-left-fullhd]="true" id="test2"></div>
        <div [bu-has-text-left-fullhd]="false" id="test3"></div>
        <div [bu-has-text-left-fullhd]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-left-fullhd]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextLeftFullhdDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextLeftFullhdDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-left-fullhd')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-left-fullhd')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-left-fullhd')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-left-fullhd')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-left-fullhd')).toBeFalsy();
    });
  });

  describe('BulmaHasTextRightMobileDirective', () => {
    @Component({
      template: `
        <div bu-has-text-right-mobile id="test1"></div>
        <div [bu-has-text-right-mobile]="true" id="test2"></div>
        <div [bu-has-text-right-mobile]="false" id="test3"></div>
        <div [bu-has-text-right-mobile]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-right-mobile]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextRightMobileDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextRightMobileDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-right-mobile')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-right-mobile')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-right-mobile')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-right-mobile')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-right-mobile')).toBeFalsy();
    });
  });

  describe('BulmaHasTextRightTouchDirective', () => {
    @Component({
      template: `
        <div bu-has-text-right-touch id="test1"></div>
        <div [bu-has-text-right-touch]="true" id="test2"></div>
        <div [bu-has-text-right-touch]="false" id="test3"></div>
        <div [bu-has-text-right-touch]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-right-touch]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextRightTouchDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextRightTouchDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-right-touch')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-right-touch')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-right-touch')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-right-touch')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-right-touch')).toBeFalsy();
    });
  });

  describe('BulmaHasTextRightTabletOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-right-tablet-only id="test1"></div>
        <div [bu-has-text-right-tablet-only]="true" id="test2"></div>
        <div [bu-has-text-right-tablet-only]="false" id="test3"></div>
        <div [bu-has-text-right-tablet-only]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-right-tablet-only]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextRightTabletOnlyDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextRightTabletOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-right-tablet-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-right-tablet-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-right-tablet-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-right-tablet-only')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-right-tablet-only')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextRightTabletDirective', () => {
    @Component({
      template: `
        <div bu-has-text-right-tablet id="test1"></div>
        <div [bu-has-text-right-tablet]="true" id="test2"></div>
        <div [bu-has-text-right-tablet]="false" id="test3"></div>
        <div [bu-has-text-right-tablet]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-right-tablet]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextRightTabletDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextRightTabletDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-right-tablet')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-right-tablet')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-right-tablet')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-right-tablet')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-right-tablet')).toBeFalsy();
    });
  });

  describe('BulmaHasTextRightDesktopOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-right-desktop-only id="test1"></div>
        <div [bu-has-text-right-desktop-only]="true" id="test2"></div>
        <div [bu-has-text-right-desktop-only]="false" id="test3"></div>
        <div [bu-has-text-right-desktop-only]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-right-desktop-only]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextRightDesktopOnlyDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextRightDesktopOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-right-desktop-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-right-desktop-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-right-desktop-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-right-desktop-only')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-right-desktop-only')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextRightDesktopDirective', () => {
    @Component({
      template: `
        <div bu-has-text-right-desktop id="test1"></div>
        <div [bu-has-text-right-desktop]="true" id="test2"></div>
        <div [bu-has-text-right-desktop]="false" id="test3"></div>
        <div [bu-has-text-right-desktop]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-right-desktop]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextRightDesktopDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextRightDesktopDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-right-desktop')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-right-desktop')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-right-desktop')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-right-desktop')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-right-desktop')).toBeFalsy();
    });
  });

  describe('BulmaHasTextRightWidescreenOnlyDirective', () => {
    @Component({
      template: `
        <div bu-has-text-right-widescreen-only id="test1"></div>
        <div [bu-has-text-right-widescreen-only]="true" id="test2"></div>
        <div [bu-has-text-right-widescreen-only]="false" id="test3"></div>
        <div
          [bu-has-text-right-widescreen-only]="testMeTrue()"
          id="test4"
        ></div>
        <div
          [bu-has-text-right-widescreen-only]="testMeFalse()"
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
        declarations: [TestComponent, BulmaHasTextRightWidescreenOnlyDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextRightWidescreenOnlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-right-widescreen-only')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-right-widescreen-only')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-right-widescreen-only')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('has-text-right-widescreen-only')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('has-text-right-widescreen-only')
      ).toBeFalsy();
    });
  });

  describe('BulmaHasTextRightWidescreenDirective', () => {
    @Component({
      template: `
        <div bu-has-text-right-widescreen id="test1"></div>
        <div [bu-has-text-right-widescreen]="true" id="test2"></div>
        <div [bu-has-text-right-widescreen]="false" id="test3"></div>
        <div [bu-has-text-right-widescreen]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-right-widescreen]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextRightWidescreenDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextRightWidescreenDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('has-text-right-widescreen')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('has-text-right-widescreen')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('has-text-right-widescreen')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-right-widescreen')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-right-widescreen')).toBeFalsy();
    });
  });

  describe('BulmaHasTextRightFullhdDirective', () => {
    @Component({
      template: `
        <div bu-has-text-right-fullhd id="test1"></div>
        <div [bu-has-text-right-fullhd]="true" id="test2"></div>
        <div [bu-has-text-right-fullhd]="false" id="test3"></div>
        <div [bu-has-text-right-fullhd]="testMeTrue()" id="test4"></div>
        <div [bu-has-text-right-fullhd]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaHasTextRightFullhdDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaHasTextRightFullhdDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('has-text-right-fullhd')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('has-text-right-fullhd')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('has-text-right-fullhd')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('has-text-right-fullhd')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('has-text-right-fullhd')).toBeFalsy();
    });
  });
});
