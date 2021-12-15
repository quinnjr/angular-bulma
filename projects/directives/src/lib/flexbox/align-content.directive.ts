import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-align-content-flex-start]'
})
export class BulmaIsAlignContentFlexStartDirective implements OnChanges, OnInit {
  @Input('bu-is-align-content-flex-start') public set buIsAlignContentFlexStart(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsAlignContentFlexStart(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignContentFlexStart) {
      this.elementRef.nativeElement.classList.add('is-align-content-flex-start');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-flex-start');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignContentFlexStart) {
      this.elementRef.nativeElement.classList.add('is-align-content-flex-start');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-flex-start');
    }
  }
}

@Directive({
  selector: '[bu-is-align-content-flex-end]'
})
export class BulmaIsAlignContentFlexEndDirective implements OnChanges, OnInit {
  @Input('bu-is-align-content-flex-end') public set buIsAlignContentFlexEnd(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsAlignContentFlexEnd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignContentFlexEnd) {
      this.elementRef.nativeElement.classList.add('is-align-content-flex-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-flex-end');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignContentFlexEnd) {
      this.elementRef.nativeElement.classList.add('is-align-content-flex-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-flex-end');
    }
  }
}

@Directive({
  selector: '[bu-is-align-content-center]'
})
export class BulmaIsAlignContentCenterDirective implements OnChanges, OnInit {
  @Input('bu-is-align-content-center') public set buIsAlignContentCenter(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsAlignContentCenter(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignContentCenter) {
      this.elementRef.nativeElement.classList.add('is-align-content-center');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-center');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignContentCenter) {
      this.elementRef.nativeElement.classList.add('is-align-content-center');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-center');
    }
  }
}

@Directive({
  selector: '[bu-is-align-content-space-between]'
})
export class BulmaIsAlignContentSpaceBetweenDirective implements OnChanges, OnInit {
  @Input('bu-is-align-content-space-between') public set buIsAlignContentSpaceBetween(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsAlignContentSpaceBetween(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignContentSpaceBetween) {
      this.elementRef.nativeElement.classList.add('is-align-content-space-between');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-space-between');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignContentSpaceBetween) {
      this.elementRef.nativeElement.classList.add('is-align-content-space-between');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-space-between');
    }
  }
}

@Directive({
  selector: '[bu-is-align-content-space-around]'
})
export class BulmaIsAlignContentSpaceAroundDirective implements OnChanges, OnInit {
  @Input('bu-is-align-content-space-around') public set buIsAlignContentSpaceAround(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsAlignContentSpaceAround(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignContentSpaceAround) {
      this.elementRef.nativeElement.classList.add('is-align-content-space-around');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-space-around');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignContentSpaceAround) {
      this.elementRef.nativeElement.classList.add('is-align-content-space-around');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-space-around');
    }
  }
}

@Directive({
  selector: '[bu-is-align-content-space-evenly]'
})
export class BulmaIsAlignContentSpaceEvenlyDirective implements OnChanges, OnInit {
  @Input('bu-is-align-content-space-evenly') public set buIsAlignContentSpaceEvenly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsAlignContentSpaceEvenly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignContentSpaceEvenly) {
      this.elementRef.nativeElement.classList.add('is-align-content-space-evenly');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-space-evenly');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignContentSpaceEvenly) {
      this.elementRef.nativeElement.classList.add('is-align-content-space-evenly');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-space-evenly');
    }
  }
}

@Directive({
  selector: '[bu-is-align-content-stretch]'
})
export class BulmaIsAlignContentStretchDirective implements OnChanges, OnInit {
  @Input('bu-is-align-content-stretch') public set buIsAlignContentStretch(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsAlignContentStretch(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignContentStretch) {
      this.elementRef.nativeElement.classList.add('is-align-content-stretch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-stretch');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignContentStretch) {
      this.elementRef.nativeElement.classList.add('is-align-content-stretch');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-stretch');
    }
  }
}

@Directive({
  selector: '[bu-is-align-content-start]'
})
export class BulmaIsAlignContentStartDirective implements OnChanges, OnInit {
  @Input('bu-is-align-content-start') public set buIsAlignContentStart(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsAlignContentStart(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignContentStart) {
      this.elementRef.nativeElement.classList.add('is-align-content-start');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-start');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignContentStart) {
      this.elementRef.nativeElement.classList.add('is-align-content-start');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-start');
    }
  }
}

@Directive({
  selector: '[bu-is-align-content-end]'
})
export class BulmaIsAlignContentEndDirective implements OnChanges, OnInit {
  @Input('bu-is-align-content-end') public set buIsAlignContentEnd(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsAlignContentEnd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignContentEnd) {
      this.elementRef.nativeElement.classList.add('is-align-content-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-end');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignContentEnd) {
      this.elementRef.nativeElement.classList.add('is-align-content-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-end');
    }
  }
}

@Directive({
  selector: '[bu-is-align-content-baseline]'
})
export class BulmaIsAlignContentBaselineDirective implements OnChanges, OnInit {
  @Input('bu-is-align-content-baseline') public set buIsAlignContentBaseline(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsAlignContentBaseline(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsAlignContentBaseline) {
      this.elementRef.nativeElement.classList.add('is-align-content-baseline');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-baseline');
    }
  }

  public ngOnChanges() {
    if (this.buIsAlignContentBaseline) {
      this.elementRef.nativeElement.classList.add('is-align-content-baseline');
    } else {
      this.elementRef.nativeElement.classList.remove('is-align-content-baseline');
    }
  }
}
