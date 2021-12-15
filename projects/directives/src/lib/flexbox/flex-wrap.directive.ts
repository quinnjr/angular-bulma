import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-flex-nowrap]'
})
export class BulmaIsFlexNowrapDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-nowrap') public set buIsFlexNowrap(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexNowrap(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexNowrap) {
      this.elementRef.nativeElement.classList.add('is-flex-nowrap');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-nowrap');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexNowrap) {
      this.elementRef.nativeElement.classList.add('is-flex-nowrap');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-nowrap');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-wrap-wrap]'
})
export class BulmaIsFlexWrapWrapDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-wrap-wrap') public set buIsFlexWrapWrap(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexWrapWrap(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexWrapWrap) {
      this.elementRef.nativeElement.classList.add('is-flex-wrap-wrap');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-wrap-wrap');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexWrapWrap) {
      this.elementRef.nativeElement.classList.add('is-flex-wrap-wrap');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-wrap-wrap');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-wrap-wrap-reverse]'
})
export class BulmaIsFlexWrapWrapReverseDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-wrap-wrap-reverse') public set buIsFlexWrapWrapReverse(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexWrapWrapReverse(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexWrapWrapReverse) {
      this.elementRef.nativeElement.classList.add('is-flex-wrap-wrap-reverse');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-wrap-wrap-reverse');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexWrapWrapReverse) {
      this.elementRef.nativeElement.classList.add('is-flex-wrap-wrap-reverse');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-wrap-wrap-reverse');
    }
  }
}
