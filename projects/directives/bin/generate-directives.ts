/* eslint-disable guard-for-in */

import { promises as fs } from 'fs';
import { join } from 'path';
import startCase from 'lodash.startcase';
import upperFirst from 'lodash.upperfirst';

import types from '../directives.json';

const realPath = (...path: string[]) => {
  return join(__dirname, '../src/lib', ...path);
};

const main = async () => {
  for (const type in types) {
    const files = (types as any)[type];

    let indexContent = '';
    let moduleContentHeader = `import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\n`;

    let moduleContents: string[] = [];

    for (const file in files) {
      const directives = files[file];

      moduleContents = moduleContents.concat(directives);

      const importsStatement = `import {\n${directives
        .map(
          (d: string) => `  Bulma${startCase(d).replace(/\s/g, '')}Directive,`
        )
        .join('\n')}\n} from './${file}.directive';\n\n`;

      moduleContentHeader += importsStatement;

      let specFileContents = `import { TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('${startCase(file).replace(/\s/g, '')} Directives', () => {`;

      let fileContents = `import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';\nimport isBoolean from 'lodash.isboolean';\n`;

      /* eslint-disable-next-line @typescript-eslint/prefer-for-of */
      for (let i = 0; i < directives.length; i++) {
        const directive = directives[i];
        const directiveName = startCase(directive).replace(/\s/g, '');

        fileContents += `
@Directive({
  selector: '[bu-${directive}]'
})
export class Bulma${directiveName}Directive implements OnChanges, OnInit {
  @Input('bu-${directive}') public set bu${directiveName}(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true
      }
    }

    this._enabled = val;
  }

  public get bu${directiveName}(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.bu${directiveName}) {
      this.elementRef.nativeElement.classList.add('${directive}');
    } else {
      this.elementRef.nativeElement.classList.remove('${directive}');
    }
  }

  public ngOnChanges() {
    if (this.bu${directiveName}) {
      this.elementRef.nativeElement.classList.add('${directive}');
    } else {
      this.elementRef.nativeElement.classList.remove('${directive}');
    }
  }
}\n`;

        specFileContents += `
  describe('Bulma${directiveName}Directive', () => {
    @Component({
      template: \`
        <div bu-${directive} id="test1"></div>
        <div [bu-${directive}]="true" id="test2"></div>
        <div [bu-${directive}]="false" id="test3"></div>
        <div [bu-${directive}]="testMeTrue()" id="test4"></div>
        <div [bu-${directive}]="testMeFalse()" id="test5"></div>
      \`
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
        declarations: [TestComponent, Bulma${directiveName}Directive],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).createComponent(TestComponent);

      fixture.detectChanges();
      fixture.autoDetectChanges(true);
    });

    it('should properly apply to an element as an HTML attribute', () => {
      const test: HTMLElement[] = fixture.debugElement.queryAll(By.directive(Bulma${directiveName}Directive));
      expect(test.length).toBe(5);
      const test1: HTMLElement = fixture.nativeElement.querySelector('#test1');
      expect(test1.classList.contains('${directive}')).toBeTruthy();
    });

    it('should properly apply to an element with a 1-way direction binding of true boolean value', () => {
      const test2: HTMLElement = fixture.nativeElement.querySelector('#test2');
      expect(test2.classList.contains('${directive}')).toBeTruthy();
      const test4: HTMLElement = fixture.nativeElement.querySelector('#test4');
      expect(test4.classList.contains('${directive}')).toBeTruthy();
    });

    it('should properly /not/ apply to an element with a 1-way direction binding of false boolean value', () => {
      const test3: HTMLElement = fixture.nativeElement.querySelector('#test3');
      expect(test3.classList.contains('${directive}')).toBeFalsy();
      const test5: HTMLElement = fixture.nativeElement.querySelector('#test5');
      expect(test5.classList.contains('${directive}')).toBeFalsy();
    });
  });
`;
      }

      indexContent += `export * from './${file}.directive';\n`;
      specFileContents += '});\n';

      await fs.writeFile(
        realPath(type, file.concat('.directive.ts')),
        fileContents
      );

      await fs.writeFile(
        realPath(type, file.concat('.directive.spec.ts')),
        importsStatement.concat(specFileContents)
      );
    }

    const moduleFile = moduleContentHeader.concat(`@NgModule({
  imports: [CommonModule],
  declarations: [
    ${moduleContents
      .map((d: string) => `Bulma${startCase(d).replace(/\s/g, '')}Directive,`)
      .join('\n    ')}
  ],
  exports: [
    ${moduleContents
      .map((d: string) => `Bulma${startCase(d).replace(/\s/g, '')}Directive,`)
      .join('\n    ')}
  ]
})
export class Bulma${upperFirst(type)}DirectivesModule {}
`);

    indexContent += `export * from './${type}.module';\n`;

    await fs.writeFile(realPath(type, type.concat('.module.ts')), moduleFile);

    await fs.writeFile(realPath(type, 'index.ts'), indexContent);
  }
};

main().catch(console.error);
