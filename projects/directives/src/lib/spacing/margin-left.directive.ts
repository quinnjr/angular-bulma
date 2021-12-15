import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-ml-0]'
})
export class BulmaMl0Directive implements OnChanges, OnInit {
  @Input('bu-ml-0') public set buMl0(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMl0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMl0) {
      this.elementRef.nativeElement.classList.add('ml-0');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-0');
    }
  }

  public ngOnChanges() {
    if (this.buMl0) {
      this.elementRef.nativeElement.classList.add('ml-0');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-0');
    }
  }
}

@Directive({
  selector: '[bu-ml-1]'
})
export class BulmaMl1Directive implements OnChanges, OnInit {
  @Input('bu-ml-1') public set buMl1(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMl1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMl1) {
      this.elementRef.nativeElement.classList.add('ml-1');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-1');
    }
  }

  public ngOnChanges() {
    if (this.buMl1) {
      this.elementRef.nativeElement.classList.add('ml-1');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-1');
    }
  }
}

@Directive({
  selector: '[bu-ml-2]'
})
export class BulmaMl2Directive implements OnChanges, OnInit {
  @Input('bu-ml-2') public set buMl2(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMl2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMl2) {
      this.elementRef.nativeElement.classList.add('ml-2');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-2');
    }
  }

  public ngOnChanges() {
    if (this.buMl2) {
      this.elementRef.nativeElement.classList.add('ml-2');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-2');
    }
  }
}

@Directive({
  selector: '[bu-ml-3]'
})
export class BulmaMl3Directive implements OnChanges, OnInit {
  @Input('bu-ml-3') public set buMl3(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMl3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMl3) {
      this.elementRef.nativeElement.classList.add('ml-3');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-3');
    }
  }

  public ngOnChanges() {
    if (this.buMl3) {
      this.elementRef.nativeElement.classList.add('ml-3');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-3');
    }
  }
}

@Directive({
  selector: '[bu-ml-4]'
})
export class BulmaMl4Directive implements OnChanges, OnInit {
  @Input('bu-ml-4') public set buMl4(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMl4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMl4) {
      this.elementRef.nativeElement.classList.add('ml-4');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-4');
    }
  }

  public ngOnChanges() {
    if (this.buMl4) {
      this.elementRef.nativeElement.classList.add('ml-4');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-4');
    }
  }
}

@Directive({
  selector: '[bu-ml-5]'
})
export class BulmaMl5Directive implements OnChanges, OnInit {
  @Input('bu-ml-5') public set buMl5(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMl5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMl5) {
      this.elementRef.nativeElement.classList.add('ml-5');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-5');
    }
  }

  public ngOnChanges() {
    if (this.buMl5) {
      this.elementRef.nativeElement.classList.add('ml-5');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-5');
    }
  }
}

@Directive({
  selector: '[bu-ml-6]'
})
export class BulmaMl6Directive implements OnChanges, OnInit {
  @Input('bu-ml-6') public set buMl6(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buMl6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buMl6) {
      this.elementRef.nativeElement.classList.add('ml-6');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-6');
    }
  }

  public ngOnChanges() {
    if (this.buMl6) {
      this.elementRef.nativeElement.classList.add('ml-6');
    } else {
      this.elementRef.nativeElement.classList.remove('ml-6');
    }
  }
}
