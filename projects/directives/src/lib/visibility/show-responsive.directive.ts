import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-is-block-mobile]'
})
export class BulmaIsBlockMobileDirective implements OnChanges, OnInit {
  @Input('bu-is-block-mobile') public set buIsBlockMobile(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsBlockMobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsBlockMobile) {
      this.elementRef.nativeElement.classList.add('is-block-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsBlockMobile) {
      this.elementRef.nativeElement.classList.add('is-block-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-block-tablet-only]'
})
export class BulmaIsBlockTabletOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-block-tablet-only') public set buIsBlockTabletOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsBlockTabletOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsBlockTabletOnly) {
      this.elementRef.nativeElement.classList.add('is-block-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-tablet-only');
    }
  }

  public ngOnChanges() {
    if (this.buIsBlockTabletOnly) {
      this.elementRef.nativeElement.classList.add('is-block-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-tablet-only');
    }
  }
}

@Directive({
  selector: '[bu-is-block-desktop-only]'
})
export class BulmaIsBlockDesktopOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-block-desktop-only') public set buIsBlockDesktopOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsBlockDesktopOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsBlockDesktopOnly) {
      this.elementRef.nativeElement.classList.add('is-block-desktop-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-desktop-only');
    }
  }

  public ngOnChanges() {
    if (this.buIsBlockDesktopOnly) {
      this.elementRef.nativeElement.classList.add('is-block-desktop-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-desktop-only');
    }
  }
}

@Directive({
  selector: '[bu-is-block-widescreen-only]'
})
export class BulmaIsBlockWidescreenOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-block-widescreen-only') public set buIsBlockWidescreenOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsBlockWidescreenOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsBlockWidescreenOnly) {
      this.elementRef.nativeElement.classList.add('is-block-widescreen-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-block-widescreen-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsBlockWidescreenOnly) {
      this.elementRef.nativeElement.classList.add('is-block-widescreen-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-block-widescreen-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-block-touch]'
})
export class BulmaIsBlockTouchDirective implements OnChanges, OnInit {
  @Input('bu-is-block-touch') public set buIsBlockTouch(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsBlockTouch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsBlockTouch) {
      this.elementRef.nativeElement.classList.add('is-block-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsBlockTouch) {
      this.elementRef.nativeElement.classList.add('is-block-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-block-tablet]'
})
export class BulmaIsBlockTabletDirective implements OnChanges, OnInit {
  @Input('bu-is-block-tablet') public set buIsBlockTablet(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsBlockTablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsBlockTablet) {
      this.elementRef.nativeElement.classList.add('is-block-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsBlockTablet) {
      this.elementRef.nativeElement.classList.add('is-block-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-block-desktop]'
})
export class BulmaIsBlockDesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-block-desktop') public set buIsBlockDesktop(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsBlockDesktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsBlockDesktop) {
      this.elementRef.nativeElement.classList.add('is-block-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsBlockDesktop) {
      this.elementRef.nativeElement.classList.add('is-block-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-block-widescreen]'
})
export class BulmaIsBlockWidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-block-widescreen') public set buIsBlockWidescreen(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsBlockWidescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsBlockWidescreen) {
      this.elementRef.nativeElement.classList.add('is-block-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-widescreen');
    }
  }

  public ngOnChanges() {
    if (this.buIsBlockWidescreen) {
      this.elementRef.nativeElement.classList.add('is-block-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-widescreen');
    }
  }
}

@Directive({
  selector: '[bu-is-block-fullhd]'
})
export class BulmaIsBlockFullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-block-fullhd') public set buIsBlockFullhd(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsBlockFullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsBlockFullhd) {
      this.elementRef.nativeElement.classList.add('is-block-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsBlockFullhd) {
      this.elementRef.nativeElement.classList.add('is-block-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block-fullhd');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-mobile]'
})
export class BulmaIsFlexMobileDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-mobile') public set buIsFlexMobile(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexMobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexMobile) {
      this.elementRef.nativeElement.classList.add('is-flex-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexMobile) {
      this.elementRef.nativeElement.classList.add('is-flex-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-tablet-only]'
})
export class BulmaIsFlexTabletOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-tablet-only') public set buIsFlexTabletOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexTabletOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexTabletOnly) {
      this.elementRef.nativeElement.classList.add('is-flex-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-tablet-only');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexTabletOnly) {
      this.elementRef.nativeElement.classList.add('is-flex-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-tablet-only');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-desktop-only]'
})
export class BulmaIsFlexDesktopOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-desktop-only') public set buIsFlexDesktopOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexDesktopOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexDesktopOnly) {
      this.elementRef.nativeElement.classList.add('is-flex-desktop-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-desktop-only');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexDesktopOnly) {
      this.elementRef.nativeElement.classList.add('is-flex-desktop-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-desktop-only');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-widescreen-only]'
})
export class BulmaIsFlexWidescreenOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-widescreen-only') public set buIsFlexWidescreenOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexWidescreenOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexWidescreenOnly) {
      this.elementRef.nativeElement.classList.add('is-flex-widescreen-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-widescreen-only');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexWidescreenOnly) {
      this.elementRef.nativeElement.classList.add('is-flex-widescreen-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-widescreen-only');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-touch]'
})
export class BulmaIsFlexTouchDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-touch') public set buIsFlexTouch(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexTouch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexTouch) {
      this.elementRef.nativeElement.classList.add('is-flex-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexTouch) {
      this.elementRef.nativeElement.classList.add('is-flex-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-tablet]'
})
export class BulmaIsFlexTabletDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-tablet') public set buIsFlexTablet(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexTablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexTablet) {
      this.elementRef.nativeElement.classList.add('is-flex-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexTablet) {
      this.elementRef.nativeElement.classList.add('is-flex-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-desktop]'
})
export class BulmaIsFlexDesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-desktop') public set buIsFlexDesktop(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexDesktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexDesktop) {
      this.elementRef.nativeElement.classList.add('is-flex-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexDesktop) {
      this.elementRef.nativeElement.classList.add('is-flex-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-widescreen]'
})
export class BulmaIsFlexWidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-widescreen') public set buIsFlexWidescreen(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexWidescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexWidescreen) {
      this.elementRef.nativeElement.classList.add('is-flex-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-widescreen');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexWidescreen) {
      this.elementRef.nativeElement.classList.add('is-flex-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-widescreen');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-fullhd]'
})
export class BulmaIsFlexFullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-fullhd') public set buIsFlexFullhd(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexFullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexFullhd) {
      this.elementRef.nativeElement.classList.add('is-flex-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexFullhd) {
      this.elementRef.nativeElement.classList.add('is-flex-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-fullhd');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-mobile]'
})
export class BulmaIsInlineMobileDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-mobile') public set buIsInlineMobile(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineMobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineMobile) {
      this.elementRef.nativeElement.classList.add('is-inline-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineMobile) {
      this.elementRef.nativeElement.classList.add('is-inline-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-tablet-only]'
})
export class BulmaIsInlineTabletOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-tablet-only') public set buIsInlineTabletOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineTabletOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineTabletOnly) {
      this.elementRef.nativeElement.classList.add('is-inline-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-tablet-only');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineTabletOnly) {
      this.elementRef.nativeElement.classList.add('is-inline-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-tablet-only');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-desktop-only]'
})
export class BulmaIsInlineDesktopOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-desktop-only') public set buIsInlineDesktopOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineDesktopOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineDesktopOnly) {
      this.elementRef.nativeElement.classList.add('is-inline-desktop-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-desktop-only');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineDesktopOnly) {
      this.elementRef.nativeElement.classList.add('is-inline-desktop-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-desktop-only');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-widescreen-only]'
})
export class BulmaIsInlineWidescreenOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-widescreen-only') public set buIsInlineWidescreenOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineWidescreenOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineWidescreenOnly) {
      this.elementRef.nativeElement.classList.add('is-inline-widescreen-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-widescreen-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineWidescreenOnly) {
      this.elementRef.nativeElement.classList.add('is-inline-widescreen-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-widescreen-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-inline-touch]'
})
export class BulmaIsInlineTouchDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-touch') public set buIsInlineTouch(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineTouch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineTouch) {
      this.elementRef.nativeElement.classList.add('is-inline-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineTouch) {
      this.elementRef.nativeElement.classList.add('is-inline-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-tablet]'
})
export class BulmaIsInlineTabletDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-tablet') public set buIsInlineTablet(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineTablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineTablet) {
      this.elementRef.nativeElement.classList.add('is-inline-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineTablet) {
      this.elementRef.nativeElement.classList.add('is-inline-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-desktop]'
})
export class BulmaIsInlineDesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-desktop') public set buIsInlineDesktop(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineDesktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineDesktop) {
      this.elementRef.nativeElement.classList.add('is-inline-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineDesktop) {
      this.elementRef.nativeElement.classList.add('is-inline-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-widescreen]'
})
export class BulmaIsInlineWidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-widescreen') public set buIsInlineWidescreen(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineWidescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineWidescreen) {
      this.elementRef.nativeElement.classList.add('is-inline-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-widescreen');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineWidescreen) {
      this.elementRef.nativeElement.classList.add('is-inline-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-widescreen');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-fullhd]'
})
export class BulmaIsInlineFullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-fullhd') public set buIsInlineFullhd(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineFullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineFullhd) {
      this.elementRef.nativeElement.classList.add('is-inline-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineFullhd) {
      this.elementRef.nativeElement.classList.add('is-inline-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-fullhd');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-block-mobile]'
})
export class BulmaIsInlineBlockMobileDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-block-mobile') public set buIsInlineBlockMobile(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineBlockMobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineBlockMobile) {
      this.elementRef.nativeElement.classList.add('is-inline-block-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineBlockMobile) {
      this.elementRef.nativeElement.classList.add('is-inline-block-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-block-tablet-only]'
})
export class BulmaIsInlineBlockTabletOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-inline-block-tablet-only') public set buIsInlineBlockTabletOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineBlockTabletOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineBlockTabletOnly) {
      this.elementRef.nativeElement.classList.add(
        'is-inline-block-tablet-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-block-tablet-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineBlockTabletOnly) {
      this.elementRef.nativeElement.classList.add(
        'is-inline-block-tablet-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-block-tablet-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-inline-block-desktop-only]'
})
export class BulmaIsInlineBlockDesktopOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-inline-block-desktop-only')
  public set buIsInlineBlockDesktopOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineBlockDesktopOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineBlockDesktopOnly) {
      this.elementRef.nativeElement.classList.add(
        'is-inline-block-desktop-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-block-desktop-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineBlockDesktopOnly) {
      this.elementRef.nativeElement.classList.add(
        'is-inline-block-desktop-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-block-desktop-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-inline-block-widescreen-only]'
})
export class BulmaIsInlineBlockWidescreenOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-inline-block-widescreen-only')
  public set buIsInlineBlockWidescreenOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineBlockWidescreenOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineBlockWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'is-inline-block-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-block-widescreen-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineBlockWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'is-inline-block-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-block-widescreen-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-inline-block-touch]'
})
export class BulmaIsInlineBlockTouchDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-block-touch') public set buIsInlineBlockTouch(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineBlockTouch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineBlockTouch) {
      this.elementRef.nativeElement.classList.add('is-inline-block-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineBlockTouch) {
      this.elementRef.nativeElement.classList.add('is-inline-block-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-block-tablet]'
})
export class BulmaIsInlineBlockTabletDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-block-tablet') public set buIsInlineBlockTablet(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineBlockTablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineBlockTablet) {
      this.elementRef.nativeElement.classList.add('is-inline-block-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineBlockTablet) {
      this.elementRef.nativeElement.classList.add('is-inline-block-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-block-desktop]'
})
export class BulmaIsInlineBlockDesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-block-desktop') public set buIsInlineBlockDesktop(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineBlockDesktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineBlockDesktop) {
      this.elementRef.nativeElement.classList.add('is-inline-block-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineBlockDesktop) {
      this.elementRef.nativeElement.classList.add('is-inline-block-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-block-widescreen]'
})
export class BulmaIsInlineBlockWidescreenDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-inline-block-widescreen') public set buIsInlineBlockWidescreen(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineBlockWidescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineBlockWidescreen) {
      this.elementRef.nativeElement.classList.add('is-inline-block-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-block-widescreen'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineBlockWidescreen) {
      this.elementRef.nativeElement.classList.add('is-inline-block-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-block-widescreen'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-inline-block-fullhd]'
})
export class BulmaIsInlineBlockFullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-block-fullhd') public set buIsInlineBlockFullhd(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineBlockFullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineBlockFullhd) {
      this.elementRef.nativeElement.classList.add('is-inline-block-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineBlockFullhd) {
      this.elementRef.nativeElement.classList.add('is-inline-block-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block-fullhd');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-flex-mobile]'
})
export class BulmaIsInlineFlexMobileDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-flex-mobile') public set buIsInlineFlexMobile(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineFlexMobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineFlexMobile) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineFlexMobile) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-flex-tablet-only]'
})
export class BulmaIsInlineFlexTabletOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-flex-tablet-only') public set buIsInlineFlexTabletOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineFlexTabletOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineFlexTabletOnly) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-flex-tablet-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineFlexTabletOnly) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-flex-tablet-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-inline-flex-desktop-only]'
})
export class BulmaIsInlineFlexDesktopOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-inline-flex-desktop-only') public set buIsInlineFlexDesktopOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineFlexDesktopOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineFlexDesktopOnly) {
      this.elementRef.nativeElement.classList.add(
        'is-inline-flex-desktop-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-flex-desktop-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineFlexDesktopOnly) {
      this.elementRef.nativeElement.classList.add(
        'is-inline-flex-desktop-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-flex-desktop-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-inline-flex-widescreen-only]'
})
export class BulmaIsInlineFlexWidescreenOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-inline-flex-widescreen-only')
  public set buIsInlineFlexWidescreenOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineFlexWidescreenOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineFlexWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'is-inline-flex-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-flex-widescreen-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineFlexWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'is-inline-flex-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-flex-widescreen-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-inline-flex-touch]'
})
export class BulmaIsInlineFlexTouchDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-flex-touch') public set buIsInlineFlexTouch(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineFlexTouch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineFlexTouch) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineFlexTouch) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-flex-tablet]'
})
export class BulmaIsInlineFlexTabletDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-flex-tablet') public set buIsInlineFlexTablet(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineFlexTablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineFlexTablet) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineFlexTablet) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-flex-desktop]'
})
export class BulmaIsInlineFlexDesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-flex-desktop') public set buIsInlineFlexDesktop(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineFlexDesktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineFlexDesktop) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineFlexDesktop) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-flex-widescreen]'
})
export class BulmaIsInlineFlexWidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-flex-widescreen') public set buIsInlineFlexWidescreen(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineFlexWidescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineFlexWidescreen) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-flex-widescreen'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineFlexWidescreen) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-inline-flex-widescreen'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-inline-flex-fullhd]'
})
export class BulmaIsInlineFlexFullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-flex-fullhd') public set buIsInlineFlexFullhd(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineFlexFullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineFlexFullhd) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineFlexFullhd) {
      this.elementRef.nativeElement.classList.add('is-inline-flex-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex-fullhd');
    }
  }
}
