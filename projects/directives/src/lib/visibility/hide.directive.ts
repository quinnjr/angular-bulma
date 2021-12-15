import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-hidden-mobile]'
})
export class BulmaIsHiddenMobileDirective implements OnChanges, OnInit {
  @Input('bu-is-hidden-mobile') public set buIsHiddenMobile(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsHiddenMobile(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsHiddenMobile) {
      this.elementRef.nativeElement.classList.add('is-hidden-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-mobile');
    }
  }

  public ngOnChanges() {
    if (this.buIsHiddenMobile) {
      this.elementRef.nativeElement.classList.add('is-hidden-mobile');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-mobile');
    }
  }
}

@Directive({
  selector: '[bu-is-hidden-tablet-only]'
})
export class BulmaIsHiddenTabletOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-hidden-tablet-only') public set buIsHiddenTabletOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsHiddenTabletOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsHiddenTabletOnly) {
      this.elementRef.nativeElement.classList.add('is-hidden-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-tablet-only');
    }
  }

  public ngOnChanges() {
    if (this.buIsHiddenTabletOnly) {
      this.elementRef.nativeElement.classList.add('is-hidden-tablet-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-tablet-only');
    }
  }
}

@Directive({
  selector: '[bu-is-hidden-desktop-only]'
})
export class BulmaIsHiddenDesktopOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-hidden-desktop-only') public set buIsHiddenDesktopOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsHiddenDesktopOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsHiddenDesktopOnly) {
      this.elementRef.nativeElement.classList.add('is-hidden-desktop-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-desktop-only');
    }
  }

  public ngOnChanges() {
    if (this.buIsHiddenDesktopOnly) {
      this.elementRef.nativeElement.classList.add('is-hidden-desktop-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-desktop-only');
    }
  }
}

@Directive({
  selector: '[bu-is-hidden-widescreen-only]'
})
export class BulmaIsHiddenWidescreenOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-hidden-widescreen-only') public set buIsHiddenWidescreenOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsHiddenWidescreenOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsHiddenWidescreenOnly) {
      this.elementRef.nativeElement.classList.add('is-hidden-widescreen-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-widescreen-only');
    }
  }

  public ngOnChanges() {
    if (this.buIsHiddenWidescreenOnly) {
      this.elementRef.nativeElement.classList.add('is-hidden-widescreen-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-widescreen-only');
    }
  }
}

@Directive({
  selector: '[bu-is-hidden-touch]'
})
export class BulmaIsHiddenTouchDirective implements OnChanges, OnInit {
  @Input('bu-is-hidden-touch') public set buIsHiddenTouch(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsHiddenTouch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsHiddenTouch) {
      this.elementRef.nativeElement.classList.add('is-hidden-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-touch');
    }
  }

  public ngOnChanges() {
    if (this.buIsHiddenTouch) {
      this.elementRef.nativeElement.classList.add('is-hidden-touch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-touch');
    }
  }
}

@Directive({
  selector: '[bu-is-hidden-tablet]'
})
export class BulmaIsHiddenTabletDirective implements OnChanges, OnInit {
  @Input('bu-is-hidden-tablet') public set buIsHiddenTablet(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsHiddenTablet(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsHiddenTablet) {
      this.elementRef.nativeElement.classList.add('is-hidden-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-tablet');
    }
  }

  public ngOnChanges() {
    if (this.buIsHiddenTablet) {
      this.elementRef.nativeElement.classList.add('is-hidden-tablet');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-tablet');
    }
  }
}

@Directive({
  selector: '[bu-is-hidden-desktop]'
})
export class BulmaIsHiddenDesktopDirective implements OnChanges, OnInit {
  @Input('bu-is-hidden-desktop') public set buIsHiddenDesktop(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsHiddenDesktop(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsHiddenDesktop) {
      this.elementRef.nativeElement.classList.add('is-hidden-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-desktop');
    }
  }

  public ngOnChanges() {
    if (this.buIsHiddenDesktop) {
      this.elementRef.nativeElement.classList.add('is-hidden-desktop');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-desktop');
    }
  }
}

@Directive({
  selector: '[bu-is-hidden-widescreen]'
})
export class BulmaIsHiddenWidescreenDirective implements OnChanges, OnInit {
  @Input('bu-is-hidden-widescreen') public set buIsHiddenWidescreen(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsHiddenWidescreen(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsHiddenWidescreen) {
      this.elementRef.nativeElement.classList.add('is-hidden-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-widescreen');
    }
  }

  public ngOnChanges() {
    if (this.buIsHiddenWidescreen) {
      this.elementRef.nativeElement.classList.add('is-hidden-widescreen');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-widescreen');
    }
  }
}

@Directive({
  selector: '[bu-is-hidden-fullhd]'
})
export class BulmaIsHiddenFullhdDirective implements OnChanges, OnInit {
  @Input('bu-is-hidden-fullhd') public set buIsHiddenFullhd(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsHiddenFullhd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsHiddenFullhd) {
      this.elementRef.nativeElement.classList.add('is-hidden-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-fullhd');
    }
  }

  public ngOnChanges() {
    if (this.buIsHiddenFullhd) {
      this.elementRef.nativeElement.classList.add('is-hidden-fullhd');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden-fullhd');
    }
  }
}
