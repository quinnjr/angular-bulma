import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-mt-0]'
})
export class BulmaMt0Directive implements OnChanges, OnInit {
  @Input('bu-mt-0') public set buMt0(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMt0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMt0) {
      this.elementRef.nativeElement.classList.add('mt-0');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-0');
    }
  }

  public ngOnChanges() {
    if (this.buMt0) {
      this.elementRef.nativeElement.classList.add('mt-0');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-0');
    }
  }
}

@Directive({
  selector: '[bu-mt-1]'
})
export class BulmaMt1Directive implements OnChanges, OnInit {
  @Input('bu-mt-1') public set buMt1(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMt1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMt1) {
      this.elementRef.nativeElement.classList.add('mt-1');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-1');
    }
  }

  public ngOnChanges() {
    if (this.buMt1) {
      this.elementRef.nativeElement.classList.add('mt-1');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-1');
    }
  }
}

@Directive({
  selector: '[bu-mt-2]'
})
export class BulmaMt2Directive implements OnChanges, OnInit {
  @Input('bu-mt-2') public set buMt2(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMt2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMt2) {
      this.elementRef.nativeElement.classList.add('mt-2');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-2');
    }
  }

  public ngOnChanges() {
    if (this.buMt2) {
      this.elementRef.nativeElement.classList.add('mt-2');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-2');
    }
  }
}

@Directive({
  selector: '[bu-mt-3]'
})
export class BulmaMt3Directive implements OnChanges, OnInit {
  @Input('bu-mt-3') public set buMt3(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMt3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMt3) {
      this.elementRef.nativeElement.classList.add('mt-3');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-3');
    }
  }

  public ngOnChanges() {
    if (this.buMt3) {
      this.elementRef.nativeElement.classList.add('mt-3');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-3');
    }
  }
}

@Directive({
  selector: '[bu-mt-4]'
})
export class BulmaMt4Directive implements OnChanges, OnInit {
  @Input('bu-mt-4') public set buMt4(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMt4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMt4) {
      this.elementRef.nativeElement.classList.add('mt-4');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-4');
    }
  }

  public ngOnChanges() {
    if (this.buMt4) {
      this.elementRef.nativeElement.classList.add('mt-4');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-4');
    }
  }
}

@Directive({
  selector: '[bu-mt-5]'
})
export class BulmaMt5Directive implements OnChanges, OnInit {
  @Input('bu-mt-5') public set buMt5(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMt5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMt5) {
      this.elementRef.nativeElement.classList.add('mt-5');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-5');
    }
  }

  public ngOnChanges() {
    if (this.buMt5) {
      this.elementRef.nativeElement.classList.add('mt-5');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-5');
    }
  }
}

@Directive({
  selector: '[bu-mt-6]'
})
export class BulmaMt6Directive implements OnChanges, OnInit {
  @Input('bu-mt-6') public set buMt6(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMt6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMt6) {
      this.elementRef.nativeElement.classList.add('mt-6');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-6');
    }
  }

  public ngOnChanges() {
    if (this.buMt6) {
      this.elementRef.nativeElement.classList.add('mt-6');
    } else {
      this.elementRef.nativeElement.classList.remove('mt-6');
    }
  }
}
