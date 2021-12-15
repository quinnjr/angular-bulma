import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-mr-0]'
})
export class BulmaMr0Directive implements OnChanges, OnInit {
  @Input('bu-mr-0') public set buMr0(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMr0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMr0) {
      this.elementRef.nativeElement.classList.add('mr-0');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-0');
    }
  }

  public ngOnChanges() {
    if (this.buMr0) {
      this.elementRef.nativeElement.classList.add('mr-0');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-0');
    }
  }
}

@Directive({
  selector: '[bu-mr-1]'
})
export class BulmaMr1Directive implements OnChanges, OnInit {
  @Input('bu-mr-1') public set buMr1(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMr1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMr1) {
      this.elementRef.nativeElement.classList.add('mr-1');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-1');
    }
  }

  public ngOnChanges() {
    if (this.buMr1) {
      this.elementRef.nativeElement.classList.add('mr-1');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-1');
    }
  }
}

@Directive({
  selector: '[bu-mr-2]'
})
export class BulmaMr2Directive implements OnChanges, OnInit {
  @Input('bu-mr-2') public set buMr2(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMr2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMr2) {
      this.elementRef.nativeElement.classList.add('mr-2');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-2');
    }
  }

  public ngOnChanges() {
    if (this.buMr2) {
      this.elementRef.nativeElement.classList.add('mr-2');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-2');
    }
  }
}

@Directive({
  selector: '[bu-mr-3]'
})
export class BulmaMr3Directive implements OnChanges, OnInit {
  @Input('bu-mr-3') public set buMr3(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMr3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMr3) {
      this.elementRef.nativeElement.classList.add('mr-3');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-3');
    }
  }

  public ngOnChanges() {
    if (this.buMr3) {
      this.elementRef.nativeElement.classList.add('mr-3');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-3');
    }
  }
}

@Directive({
  selector: '[bu-mr-4]'
})
export class BulmaMr4Directive implements OnChanges, OnInit {
  @Input('bu-mr-4') public set buMr4(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMr4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMr4) {
      this.elementRef.nativeElement.classList.add('mr-4');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-4');
    }
  }

  public ngOnChanges() {
    if (this.buMr4) {
      this.elementRef.nativeElement.classList.add('mr-4');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-4');
    }
  }
}

@Directive({
  selector: '[bu-mr-5]'
})
export class BulmaMr5Directive implements OnChanges, OnInit {
  @Input('bu-mr-5') public set buMr5(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMr5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMr5) {
      this.elementRef.nativeElement.classList.add('mr-5');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-5');
    }
  }

  public ngOnChanges() {
    if (this.buMr5) {
      this.elementRef.nativeElement.classList.add('mr-5');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-5');
    }
  }
}

@Directive({
  selector: '[bu-mr-6]'
})
export class BulmaMr6Directive implements OnChanges, OnInit {
  @Input('bu-mr-6') public set buMr6(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMr6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMr6) {
      this.elementRef.nativeElement.classList.add('mr-6');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-6');
    }
  }

  public ngOnChanges() {
    if (this.buMr6) {
      this.elementRef.nativeElement.classList.add('mr-6');
    } else {
      this.elementRef.nativeElement.classList.remove('mr-6');
    }
  }
}
