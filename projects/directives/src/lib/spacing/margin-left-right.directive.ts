import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-mx-0]'
})
export class BulmaMx0Directive implements OnChanges, OnInit {
  @Input('bu-mx-0') public set buMx0(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMx0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMx0) {
      this.elementRef.nativeElement.classList.add('mx-0');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-0');
    }
  }

  public ngOnChanges() {
    if (this.buMx0) {
      this.elementRef.nativeElement.classList.add('mx-0');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-0');
    }
  }
}

@Directive({
  selector: '[bu-mx-1]'
})
export class BulmaMx1Directive implements OnChanges, OnInit {
  @Input('bu-mx-1') public set buMx1(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMx1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMx1) {
      this.elementRef.nativeElement.classList.add('mx-1');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-1');
    }
  }

  public ngOnChanges() {
    if (this.buMx1) {
      this.elementRef.nativeElement.classList.add('mx-1');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-1');
    }
  }
}

@Directive({
  selector: '[bu-mx-2]'
})
export class BulmaMx2Directive implements OnChanges, OnInit {
  @Input('bu-mx-2') public set buMx2(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMx2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMx2) {
      this.elementRef.nativeElement.classList.add('mx-2');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-2');
    }
  }

  public ngOnChanges() {
    if (this.buMx2) {
      this.elementRef.nativeElement.classList.add('mx-2');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-2');
    }
  }
}

@Directive({
  selector: '[bu-mx-3]'
})
export class BulmaMx3Directive implements OnChanges, OnInit {
  @Input('bu-mx-3') public set buMx3(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMx3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMx3) {
      this.elementRef.nativeElement.classList.add('mx-3');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-3');
    }
  }

  public ngOnChanges() {
    if (this.buMx3) {
      this.elementRef.nativeElement.classList.add('mx-3');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-3');
    }
  }
}

@Directive({
  selector: '[bu-mx-4]'
})
export class BulmaMx4Directive implements OnChanges, OnInit {
  @Input('bu-mx-4') public set buMx4(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMx4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMx4) {
      this.elementRef.nativeElement.classList.add('mx-4');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-4');
    }
  }

  public ngOnChanges() {
    if (this.buMx4) {
      this.elementRef.nativeElement.classList.add('mx-4');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-4');
    }
  }
}

@Directive({
  selector: '[bu-mx-5]'
})
export class BulmaMx5Directive implements OnChanges, OnInit {
  @Input('bu-mx-5') public set buMx5(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMx5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMx5) {
      this.elementRef.nativeElement.classList.add('mx-5');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-5');
    }
  }

  public ngOnChanges() {
    if (this.buMx5) {
      this.elementRef.nativeElement.classList.add('mx-5');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-5');
    }
  }
}

@Directive({
  selector: '[bu-mx-6]'
})
export class BulmaMx6Directive implements OnChanges, OnInit {
  @Input('bu-mx-6') public set buMx6(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMx6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMx6) {
      this.elementRef.nativeElement.classList.add('mx-6');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-6');
    }
  }

  public ngOnChanges() {
    if (this.buMx6) {
      this.elementRef.nativeElement.classList.add('mx-6');
    } else {
      this.elementRef.nativeElement.classList.remove('mx-6');
    }
  }
}
