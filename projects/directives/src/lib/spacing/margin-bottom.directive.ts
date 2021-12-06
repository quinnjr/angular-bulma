import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-mb-0]'
})
export class BulmaMb0Directive implements OnChanges, OnInit {
  @Input('bu-mb-0') public set buMb0(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMb0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMb0) {
      this.elementRef.nativeElement.classList.add('mb-0');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-0');
    }
  }

  public ngOnChanges() {
    if (this.buMb0) {
      this.elementRef.nativeElement.classList.add('mb-0');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-0');
    }
  }
}

@Directive({
  selector: '[bu-mb-1]'
})
export class BulmaMb1Directive implements OnChanges, OnInit {
  @Input('bu-mb-1') public set buMb1(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMb1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMb1) {
      this.elementRef.nativeElement.classList.add('mb-1');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-1');
    }
  }

  public ngOnChanges() {
    if (this.buMb1) {
      this.elementRef.nativeElement.classList.add('mb-1');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-1');
    }
  }
}

@Directive({
  selector: '[bu-mb-2]'
})
export class BulmaMb2Directive implements OnChanges, OnInit {
  @Input('bu-mb-2') public set buMb2(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMb2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMb2) {
      this.elementRef.nativeElement.classList.add('mb-2');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-2');
    }
  }

  public ngOnChanges() {
    if (this.buMb2) {
      this.elementRef.nativeElement.classList.add('mb-2');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-2');
    }
  }
}

@Directive({
  selector: '[bu-mb-3]'
})
export class BulmaMb3Directive implements OnChanges, OnInit {
  @Input('bu-mb-3') public set buMb3(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMb3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMb3) {
      this.elementRef.nativeElement.classList.add('mb-3');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-3');
    }
  }

  public ngOnChanges() {
    if (this.buMb3) {
      this.elementRef.nativeElement.classList.add('mb-3');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-3');
    }
  }
}

@Directive({
  selector: '[bu-mb-4]'
})
export class BulmaMb4Directive implements OnChanges, OnInit {
  @Input('bu-mb-4') public set buMb4(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMb4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMb4) {
      this.elementRef.nativeElement.classList.add('mb-4');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-4');
    }
  }

  public ngOnChanges() {
    if (this.buMb4) {
      this.elementRef.nativeElement.classList.add('mb-4');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-4');
    }
  }
}

@Directive({
  selector: '[bu-mb-5]'
})
export class BulmaMb5Directive implements OnChanges, OnInit {
  @Input('bu-mb-5') public set buMb5(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMb5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMb5) {
      this.elementRef.nativeElement.classList.add('mb-5');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-5');
    }
  }

  public ngOnChanges() {
    if (this.buMb5) {
      this.elementRef.nativeElement.classList.add('mb-5');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-5');
    }
  }
}

@Directive({
  selector: '[bu-mb-6]'
})
export class BulmaMb6Directive implements OnChanges, OnInit {
  @Input('bu-mb-6') public set buMb6(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMb6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMb6) {
      this.elementRef.nativeElement.classList.add('mb-6');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-6');
    }
  }

  public ngOnChanges() {
    if (this.buMb6) {
      this.elementRef.nativeElement.classList.add('mb-6');
    } else {
      this.elementRef.nativeElement.classList.remove('mb-6');
    }
  }
}
