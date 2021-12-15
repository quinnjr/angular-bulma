import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-size-1]'
})
export class BulmaIsSize1Directive implements OnChanges, OnInit {
  @Input('bu-is-size-1') public set buIsSize1(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsSize1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize1) {
      this.elementRef.nativeElement.classList.add('is-size-1');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize1) {
      this.elementRef.nativeElement.classList.add('is-size-1');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-1');
    }
  }
}

@Directive({
  selector: '[bu-is-size-2]'
})
export class BulmaIsSize2Directive implements OnChanges, OnInit {
  @Input('bu-is-size-2') public set buIsSize2(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsSize2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize2) {
      this.elementRef.nativeElement.classList.add('is-size-2');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize2) {
      this.elementRef.nativeElement.classList.add('is-size-2');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-2');
    }
  }
}

@Directive({
  selector: '[bu-is-size-3]'
})
export class BulmaIsSize3Directive implements OnChanges, OnInit {
  @Input('bu-is-size-3') public set buIsSize3(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsSize3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize3) {
      this.elementRef.nativeElement.classList.add('is-size-3');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize3) {
      this.elementRef.nativeElement.classList.add('is-size-3');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-3');
    }
  }
}

@Directive({
  selector: '[bu-is-size-4]'
})
export class BulmaIsSize4Directive implements OnChanges, OnInit {
  @Input('bu-is-size-4') public set buIsSize4(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsSize4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize4) {
      this.elementRef.nativeElement.classList.add('is-size-4');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize4) {
      this.elementRef.nativeElement.classList.add('is-size-4');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-4');
    }
  }
}

@Directive({
  selector: '[bu-is-size-5]'
})
export class BulmaIsSize5Directive implements OnChanges, OnInit {
  @Input('bu-is-size-5') public set buIsSize5(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsSize5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize5) {
      this.elementRef.nativeElement.classList.add('is-size-5');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize5) {
      this.elementRef.nativeElement.classList.add('is-size-5');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-5');
    }
  }
}

@Directive({
  selector: '[bu-is-size-6]'
})
export class BulmaIsSize6Directive implements OnChanges, OnInit {
  @Input('bu-is-size-6') public set buIsSize6(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsSize6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize6) {
      this.elementRef.nativeElement.classList.add('is-size-6');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize6) {
      this.elementRef.nativeElement.classList.add('is-size-6');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-6');
    }
  }
}

@Directive({
  selector: '[bu-is-size-7]'
})
export class BulmaIsSize7Directive implements OnChanges, OnInit {
  @Input('bu-is-size-7') public set buIsSize7(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsSize7(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSize7) {
      this.elementRef.nativeElement.classList.add('is-size-7');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7');
    }
  }

  public ngOnChanges() {
    if (this.buIsSize7) {
      this.elementRef.nativeElement.classList.add('is-size-7');
    } else {
      this.elementRef.nativeElement.classList.remove('is-size-7');
    }
  }
}
