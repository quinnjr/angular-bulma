import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-block]'
})
export class BulmaIsBlockDirective implements OnChanges, OnInit {
  @Input('bu-is-block') public set buIsBlock(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsBlock(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsBlock) {
      this.elementRef.nativeElement.classList.add('is-block');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block');
    }
  }

  public ngOnChanges() {
    if (this.buIsBlock) {
      this.elementRef.nativeElement.classList.add('is-block');
    } else {
      this.elementRef.nativeElement.classList.remove('is-block');
    }
  }
}

@Directive({
  selector: '[bu-is-flex]'
})
export class BulmaIsFlexDirective implements OnChanges, OnInit {
  @Input('bu-is-flex') public set buIsFlex(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsFlex(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlex) {
      this.elementRef.nativeElement.classList.add('is-flex');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlex) {
      this.elementRef.nativeElement.classList.add('is-flex');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex');
    }
  }
}

@Directive({
  selector: '[bu-is-inline]'
})
export class BulmaIsInlineDirective implements OnChanges, OnInit {
  @Input('bu-is-inline') public set buIsInline(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsInline(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInline) {
      this.elementRef.nativeElement.classList.add('is-inline');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline');
    }
  }

  public ngOnChanges() {
    if (this.buIsInline) {
      this.elementRef.nativeElement.classList.add('is-inline');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-block]'
})
export class BulmaIsInlineBlockDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-block') public set buIsInlineBlock(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineBlock(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineBlock) {
      this.elementRef.nativeElement.classList.add('is-inline-block');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineBlock) {
      this.elementRef.nativeElement.classList.add('is-inline-block');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-block');
    }
  }
}

@Directive({
  selector: '[bu-is-inline-flex]'
})
export class BulmaIsInlineFlexDirective implements OnChanges, OnInit {
  @Input('bu-is-inline-flex') public set buIsInlineFlex(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsInlineFlex(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInlineFlex) {
      this.elementRef.nativeElement.classList.add('is-inline-flex');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex');
    }
  }

  public ngOnChanges() {
    if (this.buIsInlineFlex) {
      this.elementRef.nativeElement.classList.add('is-inline-flex');
    } else {
      this.elementRef.nativeElement.classList.remove('is-inline-flex');
    }
  }
}
