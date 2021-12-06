import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-align-self-auto]'
})
export class BulmaIsAlignSelfAutoDirective implements OnChanges, OnInit {
  @Input('bu-is-align-self-auto') public set buIsAlignSelfAuto(
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

  public get buIsAlignSelfAuto(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignSelfAuto) {
      this.elementRef.nativeElement.classList.add('is-align-self-auto');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-self-auto');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignSelfAuto) {
      this.elementRef.nativeElement.classList.add('is-align-self-auto');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-self-auto');
    }
  }
}

@Directive({
  selector: '[bu-is-align-self-flex-start]'
})
export class BulmaIsAlignSelfFlexStartDirective implements OnChanges, OnInit {
  @Input('bu-is-align-self-flex-start') public set buIsAlignSelfFlexStart(
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

  public get buIsAlignSelfFlexStart(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignSelfFlexStart) {
      this.elementRef.nativeElement.classList.add('is-align-self-flex-start');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-align-self-flex-start'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignSelfFlexStart) {
      this.elementRef.nativeElement.classList.add('is-align-self-flex-start');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-align-self-flex-start'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-align-self-flex-end]'
})
export class BulmaIsAlignSelfFlexEndDirective implements OnChanges, OnInit {
  @Input('bu-is-align-self-flex-end') public set buIsAlignSelfFlexEnd(
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

  public get buIsAlignSelfFlexEnd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignSelfFlexEnd) {
      this.elementRef.nativeElement.classList.add('is-align-self-flex-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-self-flex-end');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignSelfFlexEnd) {
      this.elementRef.nativeElement.classList.add('is-align-self-flex-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-self-flex-end');
    }
  }
}

@Directive({
  selector: '[bu-is-align-self-center]'
})
export class BulmaIsAlignSelfCenterDirective implements OnChanges, OnInit {
  @Input('bu-is-align-self-center') public set buIsAlignSelfCenter(
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

  public get buIsAlignSelfCenter(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignSelfCenter) {
      this.elementRef.nativeElement.classList.add('is-align-self-center');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-self-center');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignSelfCenter) {
      this.elementRef.nativeElement.classList.add('is-align-self-center');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-self-center');
    }
  }
}

@Directive({
  selector: '[bu-is-align-self-baseline]'
})
export class BulmaIsAlignSelfBaselineDirective implements OnChanges, OnInit {
  @Input('bu-is-align-self-baseline') public set buIsAlignSelfBaseline(
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

  public get buIsAlignSelfBaseline(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignSelfBaseline) {
      this.elementRef.nativeElement.classList.add('is-align-self-baseline');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-self-baseline');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignSelfBaseline) {
      this.elementRef.nativeElement.classList.add('is-align-self-baseline');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-self-baseline');
    }
  }
}

@Directive({
  selector: '[bu-is-align-self-stretch]'
})
export class BulmaIsAlignSelfStretchDirective implements OnChanges, OnInit {
  @Input('bu-is-align-self-stretch') public set buIsAlignSelfStretch(
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

  public get buIsAlignSelfStretch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignSelfStretch) {
      this.elementRef.nativeElement.classList.add('is-align-self-stretch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-self-stretch');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignSelfStretch) {
      this.elementRef.nativeElement.classList.add('is-align-self-stretch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-self-stretch');
    }
  }
}
