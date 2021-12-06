import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-has-text-centered-mobile]'
})
export class BulmaHasTextCenteredMobileDirective implements OnChanges, OnInit {
  @Input('bu-has-text-centered-mobile') public set buHasTextCenteredMobile(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextCenteredMobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextCenteredMobile) {
      this.elementRef.nativeElement.classList.add('has-text-centered-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-mobile'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextCenteredMobile) {
      this.elementRef.nativeElement.classList.add('has-text-centered-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-mobile'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-centered-touch]'
})
export class BulmaHasTextCenteredTouchDirective implements OnChanges, OnInit {
  @Input('bu-has-text-centered-touch') public set buHasTextCenteredTouch(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextCenteredTouch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextCenteredTouch) {
      this.elementRef.nativeElement.classList.add('has-text-centered-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-centered-touch');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextCenteredTouch) {
      this.elementRef.nativeElement.classList.add('has-text-centered-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-centered-touch');
    }
  }
}

@Directive({
  selector: '[bu-has-text-centered-tablet-only]'
})
export class BulmaHasTextCenteredTabletOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-centered-tablet-only')
  public set buHasTextCenteredTabletOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextCenteredTabletOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextCenteredTabletOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-centered-tablet-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-tablet-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextCenteredTabletOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-centered-tablet-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-tablet-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-centered-tablet]'
})
export class BulmaHasTextCenteredTabletDirective implements OnChanges, OnInit {
  @Input('bu-has-text-centered-tablet') public set buHasTextCenteredTablet(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextCenteredTablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextCenteredTablet) {
      this.elementRef.nativeElement.classList.add('has-text-centered-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-tablet'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextCenteredTablet) {
      this.elementRef.nativeElement.classList.add('has-text-centered-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-tablet'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-centered-desktop-only]'
})
export class BulmaHasTextCenteredDesktopOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-centered-desktop-only')
  public set buHasTextCenteredDesktopOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextCenteredDesktopOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextCenteredDesktopOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-centered-desktop-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-desktop-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextCenteredDesktopOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-centered-desktop-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-desktop-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-centered-desktop]'
})
export class BulmaHasTextCenteredDesktopDirective implements OnChanges, OnInit {
  @Input('bu-has-text-centered-desktop') public set buHasTextCenteredDesktop(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextCenteredDesktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextCenteredDesktop) {
      this.elementRef.nativeElement.classList.add('has-text-centered-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-desktop'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextCenteredDesktop) {
      this.elementRef.nativeElement.classList.add('has-text-centered-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-desktop'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-centered-widescreen-only]'
})
export class BulmaHasTextCenteredWidescreenOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-centered-widescreen-only')
  public set buHasTextCenteredWidescreenOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextCenteredWidescreenOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextCenteredWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-centered-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-widescreen-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextCenteredWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-centered-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-widescreen-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-centered-widescreen]'
})
export class BulmaHasTextCenteredWidescreenDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-centered-widescreen')
  public set buHasTextCenteredWidescreen(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextCenteredWidescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextCenteredWidescreen) {
      this.elementRef.nativeElement.classList.add(
        'has-text-centered-widescreen'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-widescreen'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextCenteredWidescreen) {
      this.elementRef.nativeElement.classList.add(
        'has-text-centered-widescreen'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-widescreen'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-centered-fullhd]'
})
export class BulmaHasTextCenteredFullhdDirective implements OnChanges, OnInit {
  @Input('bu-has-text-centered-fullhd') public set buHasTextCenteredFullhd(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextCenteredFullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextCenteredFullhd) {
      this.elementRef.nativeElement.classList.add('has-text-centered-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-fullhd'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextCenteredFullhd) {
      this.elementRef.nativeElement.classList.add('has-text-centered-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-centered-fullhd'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-justified-mobile]'
})
export class BulmaHasTextJustifiedMobileDirective implements OnChanges, OnInit {
  @Input('bu-has-text-justified-mobile') public set buHasTextJustifiedMobile(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextJustifiedMobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextJustifiedMobile) {
      this.elementRef.nativeElement.classList.add('has-text-justified-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-mobile'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextJustifiedMobile) {
      this.elementRef.nativeElement.classList.add('has-text-justified-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-mobile'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-justified-touch]'
})
export class BulmaHasTextJustifiedTouchDirective implements OnChanges, OnInit {
  @Input('bu-has-text-justified-touch') public set buHasTextJustifiedTouch(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextJustifiedTouch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextJustifiedTouch) {
      this.elementRef.nativeElement.classList.add('has-text-justified-touch');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-touch'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextJustifiedTouch) {
      this.elementRef.nativeElement.classList.add('has-text-justified-touch');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-touch'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-justified-tablet-only]'
})
export class BulmaHasTextJustifiedTabletOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-justified-tablet-only')
  public set buHasTextJustifiedTabletOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextJustifiedTabletOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextJustifiedTabletOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-justified-tablet-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-tablet-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextJustifiedTabletOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-justified-tablet-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-tablet-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-justified-tablet]'
})
export class BulmaHasTextJustifiedTabletDirective implements OnChanges, OnInit {
  @Input('bu-has-text-justified-tablet') public set buHasTextJustifiedTablet(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextJustifiedTablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextJustifiedTablet) {
      this.elementRef.nativeElement.classList.add('has-text-justified-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-tablet'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextJustifiedTablet) {
      this.elementRef.nativeElement.classList.add('has-text-justified-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-tablet'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-justified-desktop-only]'
})
export class BulmaHasTextJustifiedDesktopOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-justified-desktop-only')
  public set buHasTextJustifiedDesktopOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextJustifiedDesktopOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextJustifiedDesktopOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-justified-desktop-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-desktop-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextJustifiedDesktopOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-justified-desktop-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-desktop-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-justified-desktop]'
})
export class BulmaHasTextJustifiedDesktopDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-justified-desktop') public set buHasTextJustifiedDesktop(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextJustifiedDesktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextJustifiedDesktop) {
      this.elementRef.nativeElement.classList.add('has-text-justified-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-desktop'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextJustifiedDesktop) {
      this.elementRef.nativeElement.classList.add('has-text-justified-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-desktop'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-justified-widescreen-only]'
})
export class BulmaHasTextJustifiedWidescreenOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-justified-widescreen-only')
  public set buHasTextJustifiedWidescreenOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextJustifiedWidescreenOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextJustifiedWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-justified-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-widescreen-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextJustifiedWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-justified-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-widescreen-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-justified-widescreen]'
})
export class BulmaHasTextJustifiedWidescreenDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-justified-widescreen')
  public set buHasTextJustifiedWidescreen(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextJustifiedWidescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextJustifiedWidescreen) {
      this.elementRef.nativeElement.classList.add(
        'has-text-justified-widescreen'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-widescreen'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextJustifiedWidescreen) {
      this.elementRef.nativeElement.classList.add(
        'has-text-justified-widescreen'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-widescreen'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-justified-fullhd]'
})
export class BulmaHasTextJustifiedFullhdDirective implements OnChanges, OnInit {
  @Input('bu-has-text-justified-fullhd') public set buHasTextJustifiedFullhd(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextJustifiedFullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextJustifiedFullhd) {
      this.elementRef.nativeElement.classList.add('has-text-justified-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-fullhd'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextJustifiedFullhd) {
      this.elementRef.nativeElement.classList.add('has-text-justified-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-justified-fullhd'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-left-mobile]'
})
export class BulmaHasTextLeftMobileDirective implements OnChanges, OnInit {
  @Input('bu-has-text-left-mobile') public set buHasTextLeftMobile(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLeftMobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLeftMobile) {
      this.elementRef.nativeElement.classList.add('has-text-left-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLeftMobile) {
      this.elementRef.nativeElement.classList.add('has-text-left-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left-mobile');
    }
  }
}

@Directive({
  selector: '[bu-has-text-left-touch]'
})
export class BulmaHasTextLeftTouchDirective implements OnChanges, OnInit {
  @Input('bu-has-text-left-touch') public set buHasTextLeftTouch(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLeftTouch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLeftTouch) {
      this.elementRef.nativeElement.classList.add('has-text-left-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left-touch');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLeftTouch) {
      this.elementRef.nativeElement.classList.add('has-text-left-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left-touch');
    }
  }
}

@Directive({
  selector: '[bu-has-text-left-tablet-only]'
})
export class BulmaHasTextLeftTabletOnlyDirective implements OnChanges, OnInit {
  @Input('bu-has-text-left-tablet-only') public set buHasTextLeftTabletOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLeftTabletOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLeftTabletOnly) {
      this.elementRef.nativeElement.classList.add('has-text-left-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-left-tablet-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLeftTabletOnly) {
      this.elementRef.nativeElement.classList.add('has-text-left-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-left-tablet-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-left-tablet]'
})
export class BulmaHasTextLeftTabletDirective implements OnChanges, OnInit {
  @Input('bu-has-text-left-tablet') public set buHasTextLeftTablet(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLeftTablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLeftTablet) {
      this.elementRef.nativeElement.classList.add('has-text-left-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLeftTablet) {
      this.elementRef.nativeElement.classList.add('has-text-left-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left-tablet');
    }
  }
}

@Directive({
  selector: '[bu-has-text-left-desktop-only]'
})
export class BulmaHasTextLeftDesktopOnlyDirective implements OnChanges, OnInit {
  @Input('bu-has-text-left-desktop-only') public set buHasTextLeftDesktopOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLeftDesktopOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLeftDesktopOnly) {
      this.elementRef.nativeElement.classList.add('has-text-left-desktop-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-left-desktop-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLeftDesktopOnly) {
      this.elementRef.nativeElement.classList.add('has-text-left-desktop-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-left-desktop-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-left-desktop]'
})
export class BulmaHasTextLeftDesktopDirective implements OnChanges, OnInit {
  @Input('bu-has-text-left-desktop') public set buHasTextLeftDesktop(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLeftDesktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLeftDesktop) {
      this.elementRef.nativeElement.classList.add('has-text-left-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLeftDesktop) {
      this.elementRef.nativeElement.classList.add('has-text-left-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left-desktop');
    }
  }
}

@Directive({
  selector: '[bu-has-text-left-widescreen-only]'
})
export class BulmaHasTextLeftWidescreenOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-left-widescreen-only')
  public set buHasTextLeftWidescreenOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLeftWidescreenOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLeftWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-left-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-left-widescreen-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLeftWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-left-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-left-widescreen-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-left-widescreen]'
})
export class BulmaHasTextLeftWidescreenDirective implements OnChanges, OnInit {
  @Input('bu-has-text-left-widescreen') public set buHasTextLeftWidescreen(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLeftWidescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLeftWidescreen) {
      this.elementRef.nativeElement.classList.add('has-text-left-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-left-widescreen'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLeftWidescreen) {
      this.elementRef.nativeElement.classList.add('has-text-left-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-left-widescreen'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-left-fullhd]'
})
export class BulmaHasTextLeftFullhdDirective implements OnChanges, OnInit {
  @Input('bu-has-text-left-fullhd') public set buHasTextLeftFullhd(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLeftFullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLeftFullhd) {
      this.elementRef.nativeElement.classList.add('has-text-left-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLeftFullhd) {
      this.elementRef.nativeElement.classList.add('has-text-left-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left-fullhd');
    }
  }
}

@Directive({
  selector: '[bu-has-text-right-mobile]'
})
export class BulmaHasTextRightMobileDirective implements OnChanges, OnInit {
  @Input('bu-has-text-right-mobile') public set buHasTextRightMobile(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextRightMobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextRightMobile) {
      this.elementRef.nativeElement.classList.add('has-text-right-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextRightMobile) {
      this.elementRef.nativeElement.classList.add('has-text-right-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right-mobile');
    }
  }
}

@Directive({
  selector: '[bu-has-text-right-touch]'
})
export class BulmaHasTextRightTouchDirective implements OnChanges, OnInit {
  @Input('bu-has-text-right-touch') public set buHasTextRightTouch(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextRightTouch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextRightTouch) {
      this.elementRef.nativeElement.classList.add('has-text-right-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right-touch');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextRightTouch) {
      this.elementRef.nativeElement.classList.add('has-text-right-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right-touch');
    }
  }
}

@Directive({
  selector: '[bu-has-text-right-tablet-only]'
})
export class BulmaHasTextRightTabletOnlyDirective implements OnChanges, OnInit {
  @Input('bu-has-text-right-tablet-only') public set buHasTextRightTabletOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextRightTabletOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextRightTabletOnly) {
      this.elementRef.nativeElement.classList.add('has-text-right-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-right-tablet-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextRightTabletOnly) {
      this.elementRef.nativeElement.classList.add('has-text-right-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-right-tablet-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-right-tablet]'
})
export class BulmaHasTextRightTabletDirective implements OnChanges, OnInit {
  @Input('bu-has-text-right-tablet') public set buHasTextRightTablet(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextRightTablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextRightTablet) {
      this.elementRef.nativeElement.classList.add('has-text-right-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextRightTablet) {
      this.elementRef.nativeElement.classList.add('has-text-right-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right-tablet');
    }
  }
}

@Directive({
  selector: '[bu-has-text-right-desktop-only]'
})
export class BulmaHasTextRightDesktopOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-right-desktop-only') public set buHasTextRightDesktopOnly(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextRightDesktopOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextRightDesktopOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-right-desktop-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-right-desktop-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextRightDesktopOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-right-desktop-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-right-desktop-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-right-desktop]'
})
export class BulmaHasTextRightDesktopDirective implements OnChanges, OnInit {
  @Input('bu-has-text-right-desktop') public set buHasTextRightDesktop(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextRightDesktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextRightDesktop) {
      this.elementRef.nativeElement.classList.add('has-text-right-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextRightDesktop) {
      this.elementRef.nativeElement.classList.add('has-text-right-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right-desktop');
    }
  }
}

@Directive({
  selector: '[bu-has-text-right-widescreen-only]'
})
export class BulmaHasTextRightWidescreenOnlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-text-right-widescreen-only')
  public set buHasTextRightWidescreenOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextRightWidescreenOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextRightWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-right-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-right-widescreen-only'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextRightWidescreenOnly) {
      this.elementRef.nativeElement.classList.add(
        'has-text-right-widescreen-only'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-right-widescreen-only'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-right-widescreen]'
})
export class BulmaHasTextRightWidescreenDirective implements OnChanges, OnInit {
  @Input('bu-has-text-right-widescreen') public set buHasTextRightWidescreen(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextRightWidescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextRightWidescreen) {
      this.elementRef.nativeElement.classList.add('has-text-right-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-right-widescreen'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextRightWidescreen) {
      this.elementRef.nativeElement.classList.add('has-text-right-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-right-widescreen'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-right-fullhd]'
})
export class BulmaHasTextRightFullhdDirective implements OnChanges, OnInit {
  @Input('bu-has-text-right-fullhd') public set buHasTextRightFullhd(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextRightFullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextRightFullhd) {
      this.elementRef.nativeElement.classList.add('has-text-right-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextRightFullhd) {
      this.elementRef.nativeElement.classList.add('has-text-right-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right-fullhd');
    }
  }
}
