import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-flex-shrink-0]'
})
export class BulmaIsFlexShrink0Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-shrink-0') public set buIsFlexShrink0(
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

  public get buIsFlexShrink0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexShrink0) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-0');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-0');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexShrink0) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-0');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-0');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-shrink-1]'
})
export class BulmaIsFlexShrink1Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-shrink-1') public set buIsFlexShrink1(
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

  public get buIsFlexShrink1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexShrink1) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-1');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-1');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexShrink1) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-1');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-1');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-shrink-2]'
})
export class BulmaIsFlexShrink2Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-shrink-2') public set buIsFlexShrink2(
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

  public get buIsFlexShrink2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexShrink2) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-2');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-2');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexShrink2) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-2');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-2');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-shrink-3]'
})
export class BulmaIsFlexShrink3Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-shrink-3') public set buIsFlexShrink3(
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

  public get buIsFlexShrink3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexShrink3) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-3');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-3');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexShrink3) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-3');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-3');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-shrink-4]'
})
export class BulmaIsFlexShrink4Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-shrink-4') public set buIsFlexShrink4(
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

  public get buIsFlexShrink4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexShrink4) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-4');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-4');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexShrink4) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-4');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-4');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-shrink-5]'
})
export class BulmaIsFlexShrink5Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-shrink-5') public set buIsFlexShrink5(
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

  public get buIsFlexShrink5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexShrink5) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-5');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-5');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexShrink5) {
      this.elementRef.nativeElement.classList.add('is-flex-shrink-5');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-shrink-5');
    }
  }
}
