import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-align-items-stretch]'
})
export class BulmaIsAlignItemsStretchDirective implements OnChanges, OnInit {
  @Input('bu-is-align-items-stretch') public set buIsAlignItemsStretch(
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

  public get buIsAlignItemsStretch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignItemsStretch) {
      this.elementRef.nativeElement.classList.add('is-align-items-stretch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-stretch');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignItemsStretch) {
      this.elementRef.nativeElement.classList.add('is-align-items-stretch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-stretch');
    }
  }
}

@Directive({
  selector: '[bu-is-align-items-flex-start]'
})
export class BulmaIsAlignItemsFlexStartDirective implements OnChanges, OnInit {
  @Input('bu-is-align-items-flex-start') public set buIsAlignItemsFlexStart(
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

  public get buIsAlignItemsFlexStart(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignItemsFlexStart) {
      this.elementRef.nativeElement.classList.add('is-align-items-flex-start');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-align-items-flex-start'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignItemsFlexStart) {
      this.elementRef.nativeElement.classList.add('is-align-items-flex-start');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-align-items-flex-start'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-align-items-flex-end]'
})
export class BulmaIsAlignItemsFlexEndDirective implements OnChanges, OnInit {
  @Input('bu-is-align-items-flex-end') public set buIsAlignItemsFlexEnd(
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

  public get buIsAlignItemsFlexEnd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignItemsFlexEnd) {
      this.elementRef.nativeElement.classList.add('is-align-items-flex-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-flex-end');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignItemsFlexEnd) {
      this.elementRef.nativeElement.classList.add('is-align-items-flex-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-flex-end');
    }
  }
}

@Directive({
  selector: '[bu-is-align-items-center]'
})
export class BulmaIsAlignItemsCenterDirective implements OnChanges, OnInit {
  @Input('bu-is-align-items-center') public set buIsAlignItemsCenter(
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

  public get buIsAlignItemsCenter(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignItemsCenter) {
      this.elementRef.nativeElement.classList.add('is-align-items-center');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-center');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignItemsCenter) {
      this.elementRef.nativeElement.classList.add('is-align-items-center');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-center');
    }
  }
}

@Directive({
  selector: '[bu-is-align-items-baseline]'
})
export class BulmaIsAlignItemsBaselineDirective implements OnChanges, OnInit {
  @Input('bu-is-align-items-baseline') public set buIsAlignItemsBaseline(
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

  public get buIsAlignItemsBaseline(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignItemsBaseline) {
      this.elementRef.nativeElement.classList.add('is-align-items-baseline');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-baseline');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignItemsBaseline) {
      this.elementRef.nativeElement.classList.add('is-align-items-baseline');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-baseline');
    }
  }
}

@Directive({
  selector: '[bu-is-align-items-start]'
})
export class BulmaIsAlignItemsStartDirective implements OnChanges, OnInit {
  @Input('bu-is-align-items-start') public set buIsAlignItemsStart(
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

  public get buIsAlignItemsStart(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignItemsStart) {
      this.elementRef.nativeElement.classList.add('is-align-items-start');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-start');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignItemsStart) {
      this.elementRef.nativeElement.classList.add('is-align-items-start');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-start');
    }
  }
}

@Directive({
  selector: '[bu-is-align-items-end]'
})
export class BulmaIsAlignItemsEndDirective implements OnChanges, OnInit {
  @Input('bu-is-align-items-end') public set buIsAlignItemsEnd(
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

  public get buIsAlignItemsEnd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignItemsEnd) {
      this.elementRef.nativeElement.classList.add('is-align-items-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-end');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignItemsEnd) {
      this.elementRef.nativeElement.classList.add('is-align-items-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-end');
    }
  }
}

@Directive({
  selector: '[bu-is-align-items-self-start]'
})
export class BulmaIsAlignItemsSelfStartDirective implements OnChanges, OnInit {
  @Input('bu-is-align-items-self-start') public set buIsAlignItemsSelfStart(
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

  public get buIsAlignItemsSelfStart(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignItemsSelfStart) {
      this.elementRef.nativeElement.classList.add('is-align-items-self-start');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-align-items-self-start'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignItemsSelfStart) {
      this.elementRef.nativeElement.classList.add('is-align-items-self-start');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-align-items-self-start'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-align-items-self-end]'
})
export class BulmaIsAlignItemsSelfEndDirective implements OnChanges, OnInit {
  @Input('bu-is-align-items-self-end') public set buIsAlignItemsSelfEnd(
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

  public get buIsAlignItemsSelfEnd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignItemsSelfEnd) {
      this.elementRef.nativeElement.classList.add('is-align-items-self-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-self-end');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignItemsSelfEnd) {
      this.elementRef.nativeElement.classList.add('is-align-items-self-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-items-self-end');
    }
  }
}
