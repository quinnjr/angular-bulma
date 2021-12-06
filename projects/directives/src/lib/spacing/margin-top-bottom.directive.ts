import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-my-0]'
})
export class BulmaMy0Directive implements OnChanges, OnInit {
  @Input('bu-my-0') public set buMy0(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMy0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMy0) {
      this.elementRef.nativeElement.classList.add('my-0');
    } else {
      this.elementRef.nativeElement.classList.remove('my-0');
    }
  }

  public ngOnChanges() {
    if (this.buMy0) {
      this.elementRef.nativeElement.classList.add('my-0');
    } else {
      this.elementRef.nativeElement.classList.remove('my-0');
    }
  }
}

@Directive({
  selector: '[bu-my-1]'
})
export class BulmaMy1Directive implements OnChanges, OnInit {
  @Input('bu-my-1') public set buMy1(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMy1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMy1) {
      this.elementRef.nativeElement.classList.add('my-1');
    } else {
      this.elementRef.nativeElement.classList.remove('my-1');
    }
  }

  public ngOnChanges() {
    if (this.buMy1) {
      this.elementRef.nativeElement.classList.add('my-1');
    } else {
      this.elementRef.nativeElement.classList.remove('my-1');
    }
  }
}

@Directive({
  selector: '[bu-my-2]'
})
export class BulmaMy2Directive implements OnChanges, OnInit {
  @Input('bu-my-2') public set buMy2(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMy2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMy2) {
      this.elementRef.nativeElement.classList.add('my-2');
    } else {
      this.elementRef.nativeElement.classList.remove('my-2');
    }
  }

  public ngOnChanges() {
    if (this.buMy2) {
      this.elementRef.nativeElement.classList.add('my-2');
    } else {
      this.elementRef.nativeElement.classList.remove('my-2');
    }
  }
}

@Directive({
  selector: '[bu-my-3]'
})
export class BulmaMy3Directive implements OnChanges, OnInit {
  @Input('bu-my-3') public set buMy3(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMy3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMy3) {
      this.elementRef.nativeElement.classList.add('my-3');
    } else {
      this.elementRef.nativeElement.classList.remove('my-3');
    }
  }

  public ngOnChanges() {
    if (this.buMy3) {
      this.elementRef.nativeElement.classList.add('my-3');
    } else {
      this.elementRef.nativeElement.classList.remove('my-3');
    }
  }
}

@Directive({
  selector: '[bu-my-4]'
})
export class BulmaMy4Directive implements OnChanges, OnInit {
  @Input('bu-my-4') public set buMy4(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMy4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMy4) {
      this.elementRef.nativeElement.classList.add('my-4');
    } else {
      this.elementRef.nativeElement.classList.remove('my-4');
    }
  }

  public ngOnChanges() {
    if (this.buMy4) {
      this.elementRef.nativeElement.classList.add('my-4');
    } else {
      this.elementRef.nativeElement.classList.remove('my-4');
    }
  }
}

@Directive({
  selector: '[bu-my-5]'
})
export class BulmaMy5Directive implements OnChanges, OnInit {
  @Input('bu-my-5') public set buMy5(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMy5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMy5) {
      this.elementRef.nativeElement.classList.add('my-5');
    } else {
      this.elementRef.nativeElement.classList.remove('my-5');
    }
  }

  public ngOnChanges() {
    if (this.buMy5) {
      this.elementRef.nativeElement.classList.add('my-5');
    } else {
      this.elementRef.nativeElement.classList.remove('my-5');
    }
  }
}

@Directive({
  selector: '[bu-my-6]'
})
export class BulmaMy6Directive implements OnChanges, OnInit {
  @Input('bu-my-6') public set buMy6(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buMy6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMy6) {
      this.elementRef.nativeElement.classList.add('my-6');
    } else {
      this.elementRef.nativeElement.classList.remove('my-6');
    }
  }

  public ngOnChanges() {
    if (this.buMy6) {
      this.elementRef.nativeElement.classList.add('my-6');
    } else {
      this.elementRef.nativeElement.classList.remove('my-6');
    }
  }
}
