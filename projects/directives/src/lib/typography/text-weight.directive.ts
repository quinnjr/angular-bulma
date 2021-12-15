import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-has-text-weight-light]'
})
export class BulmaHasTextWeightLightDirective implements OnChanges, OnInit {
  @Input('bu-has-text-weight-light') public set buHasTextWeightLight(
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

  public get buHasTextWeightLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextWeightLight) {
      this.elementRef.nativeElement.classList.add('has-text-weight-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-weight-light');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextWeightLight) {
      this.elementRef.nativeElement.classList.add('has-text-weight-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-weight-light');
    }
  }
}

@Directive({
  selector: '[bu-has-text-weight-normal]'
})
export class BulmaHasTextWeightNormalDirective implements OnChanges, OnInit {
  @Input('bu-has-text-weight-normal') public set buHasTextWeightNormal(
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

  public get buHasTextWeightNormal(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextWeightNormal) {
      this.elementRef.nativeElement.classList.add('has-text-weight-normal');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-weight-normal');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextWeightNormal) {
      this.elementRef.nativeElement.classList.add('has-text-weight-normal');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-weight-normal');
    }
  }
}

@Directive({
  selector: '[bu-has-text-weight-medium]'
})
export class BulmaHasTextWeightMediumDirective implements OnChanges, OnInit {
  @Input('bu-has-text-weight-medium') public set buHasTextWeightMedium(
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

  public get buHasTextWeightMedium(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextWeightMedium) {
      this.elementRef.nativeElement.classList.add('has-text-weight-medium');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-weight-medium');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextWeightMedium) {
      this.elementRef.nativeElement.classList.add('has-text-weight-medium');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-weight-medium');
    }
  }
}

@Directive({
  selector: '[bu-has-text-weight-semibold]'
})
export class BulmaHasTextWeightSemiboldDirective implements OnChanges, OnInit {
  @Input('bu-has-text-weight-semibold') public set buHasTextWeightSemibold(
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

  public get buHasTextWeightSemibold(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextWeightSemibold) {
      this.elementRef.nativeElement.classList.add('has-text-weight-semibold');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-weight-semibold'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasTextWeightSemibold) {
      this.elementRef.nativeElement.classList.add('has-text-weight-semibold');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-text-weight-semibold'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-text-weight-bold]'
})
export class BulmaHasTextWeightBoldDirective implements OnChanges, OnInit {
  @Input('bu-has-text-weight-bold') public set buHasTextWeightBold(
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

  public get buHasTextWeightBold(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextWeightBold) {
      this.elementRef.nativeElement.classList.add('has-text-weight-bold');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-weight-bold');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextWeightBold) {
      this.elementRef.nativeElement.classList.add('has-text-weight-bold');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-weight-bold');
    }
  }
}
