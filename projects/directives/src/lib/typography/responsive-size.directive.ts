import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-is-size-1-mobile]'
})
export class BulmaIsSize1MobileDirective implements OnChanges, OnInit {
  @Input('bu-is-size-1-mobile') public set buIsSize1Mobile(
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

  public get buIsSize1Mobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize1Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-1-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize1Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-1-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-size-1-touch]'
})
export class BulmaIsSize1TouchDirective implements OnChanges, OnInit {
  @Input('bu-is-size-1-touch') public set buIsSize1Touch(
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

  public get buIsSize1Touch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize1Touch) {
      this.elementRef.nativeElement.classList.add('is-size-1-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize1Touch) {
      this.elementRef.nativeElement.classList.add('is-size-1-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-size-1-tablet]'
})
export class BulmaIsSize1TabletDirective implements OnChanges, OnInit {
  @Input('bu-is-size-1-tablet') public set buIsSize1Tablet(
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

  public get buIsSize1Tablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize1Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-1-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize1Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-1-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-size-1-desktop]'
})
export class BulmaIsSize1DesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-size-1-desktop') public set buIsSize1Desktop(
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

  public get buIsSize1Desktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize1Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-1-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize1Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-1-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-size-1-widescreen]'
})
export class BulmaIsSize1WidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-size-1-widescreen') public set buIsSize1Widescreen(
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

  public get buIsSize1Widescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize1Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-1-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-widescreen');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize1Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-1-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-widescreen');
    }
  }
}

@Directive({
  selector: '[bu-is-size-1-fullhd]'
})
export class BulmaIsSize1FullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-size-1-fullhd') public set buIsSize1Fullhd(
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

  public get buIsSize1Fullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize1Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-1-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize1Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-1-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1-fullhd');
    }
  }
}

@Directive({
  selector: '[bu-is-size-2-mobile]'
})
export class BulmaIsSize2MobileDirective implements OnChanges, OnInit {
  @Input('bu-is-size-2-mobile') public set buIsSize2Mobile(
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

  public get buIsSize2Mobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize2Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-2-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize2Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-2-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-size-2-touch]'
})
export class BulmaIsSize2TouchDirective implements OnChanges, OnInit {
  @Input('bu-is-size-2-touch') public set buIsSize2Touch(
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

  public get buIsSize2Touch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize2Touch) {
      this.elementRef.nativeElement.classList.add('is-size-2-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize2Touch) {
      this.elementRef.nativeElement.classList.add('is-size-2-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-size-2-tablet]'
})
export class BulmaIsSize2TabletDirective implements OnChanges, OnInit {
  @Input('bu-is-size-2-tablet') public set buIsSize2Tablet(
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

  public get buIsSize2Tablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize2Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-2-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize2Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-2-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-size-2-desktop]'
})
export class BulmaIsSize2DesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-size-2-desktop') public set buIsSize2Desktop(
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

  public get buIsSize2Desktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize2Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-2-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize2Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-2-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-size-2-widescreen]'
})
export class BulmaIsSize2WidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-size-2-widescreen') public set buIsSize2Widescreen(
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

  public get buIsSize2Widescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize2Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-2-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-widescreen');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize2Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-2-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-widescreen');
    }
  }
}

@Directive({
  selector: '[bu-is-size-2-fullhd]'
})
export class BulmaIsSize2FullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-size-2-fullhd') public set buIsSize2Fullhd(
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

  public get buIsSize2Fullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize2Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-2-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize2Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-2-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2-fullhd');
    }
  }
}

@Directive({
  selector: '[bu-is-size-3-mobile]'
})
export class BulmaIsSize3MobileDirective implements OnChanges, OnInit {
  @Input('bu-is-size-3-mobile') public set buIsSize3Mobile(
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

  public get buIsSize3Mobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize3Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-3-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize3Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-3-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-size-3-touch]'
})
export class BulmaIsSize3TouchDirective implements OnChanges, OnInit {
  @Input('bu-is-size-3-touch') public set buIsSize3Touch(
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

  public get buIsSize3Touch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize3Touch) {
      this.elementRef.nativeElement.classList.add('is-size-3-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize3Touch) {
      this.elementRef.nativeElement.classList.add('is-size-3-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-size-3-tablet]'
})
export class BulmaIsSize3TabletDirective implements OnChanges, OnInit {
  @Input('bu-is-size-3-tablet') public set buIsSize3Tablet(
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

  public get buIsSize3Tablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize3Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-3-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize3Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-3-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-size-3-desktop]'
})
export class BulmaIsSize3DesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-size-3-desktop') public set buIsSize3Desktop(
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

  public get buIsSize3Desktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize3Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-3-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize3Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-3-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-size-3-widescreen]'
})
export class BulmaIsSize3WidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-size-3-widescreen') public set buIsSize3Widescreen(
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

  public get buIsSize3Widescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize3Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-3-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-widescreen');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize3Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-3-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-widescreen');
    }
  }
}

@Directive({
  selector: '[bu-is-size-3-fullhd]'
})
export class BulmaIsSize3FullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-size-3-fullhd') public set buIsSize3Fullhd(
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

  public get buIsSize3Fullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize3Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-3-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize3Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-3-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3-fullhd');
    }
  }
}

@Directive({
  selector: '[bu-is-size-4-mobile]'
})
export class BulmaIsSize4MobileDirective implements OnChanges, OnInit {
  @Input('bu-is-size-4-mobile') public set buIsSize4Mobile(
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

  public get buIsSize4Mobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize4Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-4-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize4Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-4-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-size-4-touch]'
})
export class BulmaIsSize4TouchDirective implements OnChanges, OnInit {
  @Input('bu-is-size-4-touch') public set buIsSize4Touch(
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

  public get buIsSize4Touch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize4Touch) {
      this.elementRef.nativeElement.classList.add('is-size-4-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize4Touch) {
      this.elementRef.nativeElement.classList.add('is-size-4-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-size-4-tablet]'
})
export class BulmaIsSize4TabletDirective implements OnChanges, OnInit {
  @Input('bu-is-size-4-tablet') public set buIsSize4Tablet(
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

  public get buIsSize4Tablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize4Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-4-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize4Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-4-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-size-4-desktop]'
})
export class BulmaIsSize4DesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-size-4-desktop') public set buIsSize4Desktop(
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

  public get buIsSize4Desktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize4Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-4-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize4Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-4-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-size-4-widescreen]'
})
export class BulmaIsSize4WidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-size-4-widescreen') public set buIsSize4Widescreen(
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

  public get buIsSize4Widescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize4Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-4-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-widescreen');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize4Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-4-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-widescreen');
    }
  }
}

@Directive({
  selector: '[bu-is-size-4-fullhd]'
})
export class BulmaIsSize4FullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-size-4-fullhd') public set buIsSize4Fullhd(
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

  public get buIsSize4Fullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize4Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-4-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize4Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-4-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4-fullhd');
    }
  }
}

@Directive({
  selector: '[bu-is-size-5-mobile]'
})
export class BulmaIsSize5MobileDirective implements OnChanges, OnInit {
  @Input('bu-is-size-5-mobile') public set buIsSize5Mobile(
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

  public get buIsSize5Mobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize5Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-5-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize5Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-5-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-size-5-touch]'
})
export class BulmaIsSize5TouchDirective implements OnChanges, OnInit {
  @Input('bu-is-size-5-touch') public set buIsSize5Touch(
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

  public get buIsSize5Touch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize5Touch) {
      this.elementRef.nativeElement.classList.add('is-size-5-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize5Touch) {
      this.elementRef.nativeElement.classList.add('is-size-5-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-size-5-tablet]'
})
export class BulmaIsSize5TabletDirective implements OnChanges, OnInit {
  @Input('bu-is-size-5-tablet') public set buIsSize5Tablet(
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

  public get buIsSize5Tablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize5Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-5-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize5Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-5-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-size-5-desktop]'
})
export class BulmaIsSize5DesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-size-5-desktop') public set buIsSize5Desktop(
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

  public get buIsSize5Desktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize5Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-5-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize5Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-5-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-size-5-widescreen]'
})
export class BulmaIsSize5WidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-size-5-widescreen') public set buIsSize5Widescreen(
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

  public get buIsSize5Widescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize5Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-5-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-widescreen');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize5Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-5-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-widescreen');
    }
  }
}

@Directive({
  selector: '[bu-is-size-5-fullhd]'
})
export class BulmaIsSize5FullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-size-5-fullhd') public set buIsSize5Fullhd(
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

  public get buIsSize5Fullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize5Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-5-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize5Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-5-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5-fullhd');
    }
  }
}

@Directive({
  selector: '[bu-is-size-6-mobile]'
})
export class BulmaIsSize6MobileDirective implements OnChanges, OnInit {
  @Input('bu-is-size-6-mobile') public set buIsSize6Mobile(
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

  public get buIsSize6Mobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize6Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-6-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize6Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-6-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-size-6-touch]'
})
export class BulmaIsSize6TouchDirective implements OnChanges, OnInit {
  @Input('bu-is-size-6-touch') public set buIsSize6Touch(
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

  public get buIsSize6Touch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize6Touch) {
      this.elementRef.nativeElement.classList.add('is-size-6-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize6Touch) {
      this.elementRef.nativeElement.classList.add('is-size-6-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-size-6-tablet]'
})
export class BulmaIsSize6TabletDirective implements OnChanges, OnInit {
  @Input('bu-is-size-6-tablet') public set buIsSize6Tablet(
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

  public get buIsSize6Tablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize6Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-6-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize6Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-6-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-size-6-desktop]'
})
export class BulmaIsSize6DesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-size-6-desktop') public set buIsSize6Desktop(
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

  public get buIsSize6Desktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize6Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-6-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize6Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-6-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-size-6-widescreen]'
})
export class BulmaIsSize6WidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-size-6-widescreen') public set buIsSize6Widescreen(
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

  public get buIsSize6Widescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize6Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-6-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-widescreen');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize6Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-6-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-widescreen');
    }
  }
}

@Directive({
  selector: '[bu-is-size-6-fullhd]'
})
export class BulmaIsSize6FullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-size-6-fullhd') public set buIsSize6Fullhd(
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

  public get buIsSize6Fullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize6Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-6-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize6Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-6-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6-fullhd');
    }
  }
}

@Directive({
  selector: '[bu-is-size-7-mobile]'
})
export class BulmaIsSize7MobileDirective implements OnChanges, OnInit {
  @Input('bu-is-size-7-mobile') public set buIsSize7Mobile(
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

  public get buIsSize7Mobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize7Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-7-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize7Mobile) {
      this.elementRef.nativeElement.classList.add('is-size-7-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-size-7-touch]'
})
export class BulmaIsSize7TouchDirective implements OnChanges, OnInit {
  @Input('bu-is-size-7-touch') public set buIsSize7Touch(
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

  public get buIsSize7Touch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize7Touch) {
      this.elementRef.nativeElement.classList.add('is-size-7-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize7Touch) {
      this.elementRef.nativeElement.classList.add('is-size-7-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-size-7-tablet]'
})
export class BulmaIsSize7TabletDirective implements OnChanges, OnInit {
  @Input('bu-is-size-7-tablet') public set buIsSize7Tablet(
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

  public get buIsSize7Tablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize7Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-7-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize7Tablet) {
      this.elementRef.nativeElement.classList.add('is-size-7-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-size-7-desktop]'
})
export class BulmaIsSize7DesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-size-7-desktop') public set buIsSize7Desktop(
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

  public get buIsSize7Desktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize7Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-7-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize7Desktop) {
      this.elementRef.nativeElement.classList.add('is-size-7-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-size-7-widescreen]'
})
export class BulmaIsSize7WidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-size-7-widescreen') public set buIsSize7Widescreen(
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

  public get buIsSize7Widescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize7Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-7-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-widescreen');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize7Widescreen) {
      this.elementRef.nativeElement.classList.add('is-size-7-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-widescreen');
    }
  }
}

@Directive({
  selector: '[bu-is-size-7-fullhd]'
})
export class BulmaIsSize7FullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-size-7-fullhd') public set buIsSize7Fullhd(
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

  public get buIsSize7Fullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize7Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-7-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize7Fullhd) {
      this.elementRef.nativeElement.classList.add('is-size-7-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7-fullhd');
    }
  }
}
