import {
  BulmaIsJustifyContentFlexStartDirective,
  BulmaIsJustifyContentFlexEndDirective,
  BulmaIsJustifyContentCenterDirective,
  BulmaIsJustifyContentSpaceBetweenDirective,
  BulmaIsJustifyContentSpaceAroundDirective,
  BulmaIsJustifyContentSpaceEvenlyDirective,
  BulmaIsJustifyContentStartDirective,
  BulmaIsJustifyContentEndDirective,
  BulmaIsJustifyContentLeftDirective,
  BulmaIsJustifyContentRightDirective
} from './justify-content.directive';

import { TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('JustifyContent Directives', () => {
  describe('BulmaIsJustifyContentFlexStartDirective', () => {
    @Component({
      template: `
        <div bu-is-justify-content-flex-start id="test1"></div>
        <div [bu-is-justify-content-flex-start]="true" id="test2"></div>
        <div [bu-is-justify-content-flex-start]="false" id="test3"></div>
        <div [bu-is-justify-content-flex-start]="testMeTrue()" id="test4"></div>
        <div
          [bu-is-justify-content-flex-start]="testMeFalse()"
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
        declarations: [TestComponent, BulmaIsJustifyContentFlexStartDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsJustifyContentFlexStartDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('is-justify-content-flex-start')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('is-justify-content-flex-start')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('is-justify-content-flex-start')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('is-justify-content-flex-start')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('is-justify-content-flex-start')
      ).toBeFalsy();
    });
  });

  describe('BulmaIsJustifyContentFlexEndDirective', () => {
    @Component({
      template: `
        <div bu-is-justify-content-flex-end id="test1"></div>
        <div [bu-is-justify-content-flex-end]="true" id="test2"></div>
        <div [bu-is-justify-content-flex-end]="false" id="test3"></div>
        <div [bu-is-justify-content-flex-end]="testMeTrue()" id="test4"></div>
        <div [bu-is-justify-content-flex-end]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsJustifyContentFlexEndDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsJustifyContentFlexEndDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('is-justify-content-flex-end')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('is-justify-content-flex-end')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('is-justify-content-flex-end')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('is-justify-content-flex-end')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('is-justify-content-flex-end')
      ).toBeFalsy();
    });
  });

  describe('BulmaIsJustifyContentCenterDirective', () => {
    @Component({
      template: `
        <div bu-is-justify-content-center id="test1"></div>
        <div [bu-is-justify-content-center]="true" id="test2"></div>
        <div [bu-is-justify-content-center]="false" id="test3"></div>
        <div [bu-is-justify-content-center]="testMeTrue()" id="test4"></div>
        <div [bu-is-justify-content-center]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsJustifyContentCenterDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsJustifyContentCenterDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('is-justify-content-center')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('is-justify-content-center')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('is-justify-content-center')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-justify-content-center')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-justify-content-center')).toBeFalsy();
    });
  });

  describe('BulmaIsJustifyContentSpaceBetweenDirective', () => {
    @Component({
      template: `
        <div bu-is-justify-content-space-between id="test1"></div>
        <div [bu-is-justify-content-space-between]="true" id="test2"></div>
        <div [bu-is-justify-content-space-between]="false" id="test3"></div>
        <div
          [bu-is-justify-content-space-between]="testMeTrue()"
          id="test4"
        ></div>
        <div
          [bu-is-justify-content-space-between]="testMeFalse()"
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
          BulmaIsJustifyContentSpaceBetweenDirective
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsJustifyContentSpaceBetweenDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('is-justify-content-space-between')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('is-justify-content-space-between')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('is-justify-content-space-between')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('is-justify-content-space-between')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('is-justify-content-space-between')
      ).toBeFalsy();
    });
  });

  describe('BulmaIsJustifyContentSpaceAroundDirective', () => {
    @Component({
      template: `
        <div bu-is-justify-content-space-around id="test1"></div>
        <div [bu-is-justify-content-space-around]="true" id="test2"></div>
        <div [bu-is-justify-content-space-around]="false" id="test3"></div>
        <div
          [bu-is-justify-content-space-around]="testMeTrue()"
          id="test4"
        ></div>
        <div
          [bu-is-justify-content-space-around]="testMeFalse()"
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
          BulmaIsJustifyContentSpaceAroundDirective
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsJustifyContentSpaceAroundDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('is-justify-content-space-around')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('is-justify-content-space-around')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('is-justify-content-space-around')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('is-justify-content-space-around')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('is-justify-content-space-around')
      ).toBeFalsy();
    });
  });

  describe('BulmaIsJustifyContentSpaceEvenlyDirective', () => {
    @Component({
      template: `
        <div bu-is-justify-content-space-evenly id="test1"></div>
        <div [bu-is-justify-content-space-evenly]="true" id="test2"></div>
        <div [bu-is-justify-content-space-evenly]="false" id="test3"></div>
        <div
          [bu-is-justify-content-space-evenly]="testMeTrue()"
          id="test4"
        ></div>
        <div
          [bu-is-justify-content-space-evenly]="testMeFalse()"
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
          BulmaIsJustifyContentSpaceEvenlyDirective
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsJustifyContentSpaceEvenlyDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(
        test1.classList.contains('is-justify-content-space-evenly')
      ).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(
        test2.classList.contains('is-justify-content-space-evenly')
      ).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(
        test4.classList.contains('is-justify-content-space-evenly')
      ).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(
        test3.classList.contains('is-justify-content-space-evenly')
      ).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(
        test5.classList.contains('is-justify-content-space-evenly')
      ).toBeFalsy();
    });
  });

  describe('BulmaIsJustifyContentStartDirective', () => {
    @Component({
      template: `
        <div bu-is-justify-content-start id="test1"></div>
        <div [bu-is-justify-content-start]="true" id="test2"></div>
        <div [bu-is-justify-content-start]="false" id="test3"></div>
        <div [bu-is-justify-content-start]="testMeTrue()" id="test4"></div>
        <div [bu-is-justify-content-start]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsJustifyContentStartDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsJustifyContentStartDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-justify-content-start')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-justify-content-start')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-justify-content-start')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-justify-content-start')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-justify-content-start')).toBeFalsy();
    });
  });

  describe('BulmaIsJustifyContentEndDirective', () => {
    @Component({
      template: `
        <div bu-is-justify-content-end id="test1"></div>
        <div [bu-is-justify-content-end]="true" id="test2"></div>
        <div [bu-is-justify-content-end]="false" id="test3"></div>
        <div [bu-is-justify-content-end]="testMeTrue()" id="test4"></div>
        <div [bu-is-justify-content-end]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsJustifyContentEndDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsJustifyContentEndDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-justify-content-end')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-justify-content-end')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-justify-content-end')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-justify-content-end')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-justify-content-end')).toBeFalsy();
    });
  });

  describe('BulmaIsJustifyContentLeftDirective', () => {
    @Component({
      template: `
        <div bu-is-justify-content-left id="test1"></div>
        <div [bu-is-justify-content-left]="true" id="test2"></div>
        <div [bu-is-justify-content-left]="false" id="test3"></div>
        <div [bu-is-justify-content-left]="testMeTrue()" id="test4"></div>
        <div [bu-is-justify-content-left]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsJustifyContentLeftDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsJustifyContentLeftDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-justify-content-left')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-justify-content-left')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-justify-content-left')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-justify-content-left')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-justify-content-left')).toBeFalsy();
    });
  });

  describe('BulmaIsJustifyContentRightDirective', () => {
    @Component({
      template: `
        <div bu-is-justify-content-right id="test1"></div>
        <div [bu-is-justify-content-right]="true" id="test2"></div>
        <div [bu-is-justify-content-right]="false" id="test3"></div>
        <div [bu-is-justify-content-right]="testMeTrue()" id="test4"></div>
        <div [bu-is-justify-content-right]="testMeFalse()" id="test5"></div>
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
        declarations: [TestComponent, BulmaIsJustifyContentRightDirective],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(
        By.directive(BulmaIsJustifyContentRightDirective)
      );
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('is-justify-content-right')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('is-justify-content-right')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('is-justify-content-right')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('is-justify-content-right')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('is-justify-content-right')).toBeFalsy();
    });
  });
});
