import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-clearfix]'
})
export class BulmaIsClearfixDirective implements OnChanges, OnInit {
  @Input('bu-is-clearfix') public set buIsClearfix(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsClearfix(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsClearfix) {
      this.elementRef.nativeElement.classList.add('is-clearfix');
    } else {
      this.elementRef.nativeElement.classList.remove('is-clearfix');
    }
  }

  public ngOnChanges() {
    if (this.buIsClearfix) {
      this.elementRef.nativeElement.classList.add('is-clearfix');
    } else {
      this.elementRef.nativeElement.classList.remove('is-clearfix');
    }
  }
}

@Directive({
  selector: '[bu-is-pulled-left]'
})
export class BulmaIsPulledLeftDirective implements OnChanges, OnInit {
  @Input('bu-is-pulled-left') public set buIsPulledLeft(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsPulledLeft(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsPulledLeft) {
      this.elementRef.nativeElement.classList.add('is-pulled-left');
    } else {
      this.elementRef.nativeElement.classList.remove('is-pulled-left');
    }
  }

  public ngOnChanges() {
    if (this.buIsPulledLeft) {
      this.elementRef.nativeElement.classList.add('is-pulled-left');
    } else {
      this.elementRef.nativeElement.classList.remove('is-pulled-left');
    }
  }
}

@Directive({
  selector: '[bu-is-pulled-right]'
})
export class BulmaIsPulledRightDirective implements OnChanges, OnInit {
  @Input('bu-is-pulled-right') public set buIsPulledRight(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsPulledRight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsPulledRight) {
      this.elementRef.nativeElement.classList.add('is-pulled-right');
    } else {
      this.elementRef.nativeElement.classList.remove('is-pulled-right');
    }
  }

  public ngOnChanges() {
    if (this.buIsPulledRight) {
      this.elementRef.nativeElement.classList.add('is-pulled-right');
    } else {
      this.elementRef.nativeElement.classList.remove('is-pulled-right');
    }
  }
}

@Directive({
  selector: '[bu-is-overlay]'
})
export class BulmaIsOverlayDirective implements OnChanges, OnInit {
  @Input('bu-is-overlay') public set buIsOverlay(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsOverlay(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsOverlay) {
      this.elementRef.nativeElement.classList.add('is-overlay');
    } else {
      this.elementRef.nativeElement.classList.remove('is-overlay');
    }
  }

  public ngOnChanges() {
    if (this.buIsOverlay) {
      this.elementRef.nativeElement.classList.add('is-overlay');
    } else {
      this.elementRef.nativeElement.classList.remove('is-overlay');
    }
  }
}

@Directive({
  selector: '[bu-is-clipped]'
})
export class BulmaIsClippedDirective implements OnChanges, OnInit {
  @Input('bu-is-clipped') public set buIsClipped(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsClipped(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsClipped) {
      this.elementRef.nativeElement.classList.add('is-clipped');
    } else {
      this.elementRef.nativeElement.classList.remove('is-clipped');
    }
  }

  public ngOnChanges() {
    if (this.buIsClipped) {
      this.elementRef.nativeElement.classList.add('is-clipped');
    } else {
      this.elementRef.nativeElement.classList.remove('is-clipped');
    }
  }
}

@Directive({
  selector: '[bu-is-radiusless]'
})
export class BulmaIsRadiuslessDirective implements OnChanges, OnInit {
  @Input('bu-is-radiusless') public set buIsRadiusless(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsRadiusless(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsRadiusless) {
      this.elementRef.nativeElement.classList.add('is-radiusless');
    } else {
      this.elementRef.nativeElement.classList.remove('is-radiusless');
    }
  }

  public ngOnChanges() {
    if (this.buIsRadiusless) {
      this.elementRef.nativeElement.classList.add('is-radiusless');
    } else {
      this.elementRef.nativeElement.classList.remove('is-radiusless');
    }
  }
}

@Directive({
  selector: '[bu-is-shadowless]'
})
export class BulmaIsShadowlessDirective implements OnChanges, OnInit {
  @Input('bu-is-shadowless') public set buIsShadowless(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsShadowless(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsShadowless) {
      this.elementRef.nativeElement.classList.add('is-shadowless');
    } else {
      this.elementRef.nativeElement.classList.remove('is-shadowless');
    }
  }

  public ngOnChanges() {
    if (this.buIsShadowless) {
      this.elementRef.nativeElement.classList.add('is-shadowless');
    } else {
      this.elementRef.nativeElement.classList.remove('is-shadowless');
    }
  }
}

@Directive({
  selector: '[bu-is-unselectable]'
})
export class BulmaIsUnselectableDirective implements OnChanges, OnInit {
  @Input('bu-is-unselectable') public set buIsUnselectable(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsUnselectable(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsUnselectable) {
      this.elementRef.nativeElement.classList.add('is-unselectable');
    } else {
      this.elementRef.nativeElement.classList.remove('is-unselectable');
    }
  }

  public ngOnChanges() {
    if (this.buIsUnselectable) {
      this.elementRef.nativeElement.classList.add('is-unselectable');
    } else {
      this.elementRef.nativeElement.classList.remove('is-unselectable');
    }
  }
}

@Directive({
  selector: '[bu-is-clickable]'
})
export class BulmaIsClickableDirective implements OnChanges, OnInit {
  @Input('bu-is-clickable') public set buIsClickable(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsClickable(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsClickable) {
      this.elementRef.nativeElement.classList.add('is-clickable');
    } else {
      this.elementRef.nativeElement.classList.remove('is-clickable');
    }
  }

  public ngOnChanges() {
    if (this.buIsClickable) {
      this.elementRef.nativeElement.classList.add('is-clickable');
    } else {
      this.elementRef.nativeElement.classList.remove('is-clickable');
    }
  }
}

@Directive({
  selector: '[bu-is-relative]'
})
export class BulmaIsRelativeDirective implements OnChanges, OnInit {
  @Input('bu-is-relative') public set buIsRelative(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsRelative(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsRelative) {
      this.elementRef.nativeElement.classList.add('is-relative');
    } else {
      this.elementRef.nativeElement.classList.remove('is-relative');
    }
  }

  public ngOnChanges() {
    if (this.buIsRelative) {
      this.elementRef.nativeElement.classList.add('is-relative');
    } else {
      this.elementRef.nativeElement.classList.remove('is-relative');
    }
  }
}
