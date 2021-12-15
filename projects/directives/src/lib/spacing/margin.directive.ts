import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-m-0]'
})
export class BulmaM0Directive implements OnChanges, OnInit {
  @Input('bu-m-0') public set buM0(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buM0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buM0) {
      this.elementRef.nativeElement.classList.add('m-0');
    } else {
      this.elementRef.nativeElement.classList.remove('m-0');
    }
  }

  public ngOnChanges() {
    if (this.buM0) {
      this.elementRef.nativeElement.classList.add('m-0');
    } else {
      this.elementRef.nativeElement.classList.remove('m-0');
    }
  }
}

@Directive({
  selector: '[bu-m-1]'
})
export class BulmaM1Directive implements OnChanges, OnInit {
  @Input('bu-m-1') public set buM1(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buM1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buM1) {
      this.elementRef.nativeElement.classList.add('m-1');
    } else {
      this.elementRef.nativeElement.classList.remove('m-1');
    }
  }

  public ngOnChanges() {
    if (this.buM1) {
      this.elementRef.nativeElement.classList.add('m-1');
    } else {
      this.elementRef.nativeElement.classList.remove('m-1');
    }
  }
}

@Directive({
  selector: '[bu-m-2]'
})
export class BulmaM2Directive implements OnChanges, OnInit {
  @Input('bu-m-2') public set buM2(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buM2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buM2) {
      this.elementRef.nativeElement.classList.add('m-2');
    } else {
      this.elementRef.nativeElement.classList.remove('m-2');
    }
  }

  public ngOnChanges() {
    if (this.buM2) {
      this.elementRef.nativeElement.classList.add('m-2');
    } else {
      this.elementRef.nativeElement.classList.remove('m-2');
    }
  }
}

@Directive({
  selector: '[bu-m-3]'
})
export class BulmaM3Directive implements OnChanges, OnInit {
  @Input('bu-m-3') public set buM3(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buM3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buM3) {
      this.elementRef.nativeElement.classList.add('m-3');
    } else {
      this.elementRef.nativeElement.classList.remove('m-3');
    }
  }

  public ngOnChanges() {
    if (this.buM3) {
      this.elementRef.nativeElement.classList.add('m-3');
    } else {
      this.elementRef.nativeElement.classList.remove('m-3');
    }
  }
}

@Directive({
  selector: '[bu-m-4]'
})
export class BulmaM4Directive implements OnChanges, OnInit {
  @Input('bu-m-4') public set buM4(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buM4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buM4) {
      this.elementRef.nativeElement.classList.add('m-4');
    } else {
      this.elementRef.nativeElement.classList.remove('m-4');
    }
  }

  public ngOnChanges() {
    if (this.buM4) {
      this.elementRef.nativeElement.classList.add('m-4');
    } else {
      this.elementRef.nativeElement.classList.remove('m-4');
    }
  }
}

@Directive({
  selector: '[bu-m-5]'
})
export class BulmaM5Directive implements OnChanges, OnInit {
  @Input('bu-m-5') public set buM5(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buM5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buM5) {
      this.elementRef.nativeElement.classList.add('m-5');
    } else {
      this.elementRef.nativeElement.classList.remove('m-5');
    }
  }

  public ngOnChanges() {
    if (this.buM5) {
      this.elementRef.nativeElement.classList.add('m-5');
    } else {
      this.elementRef.nativeElement.classList.remove('m-5');
    }
  }
}

@Directive({
  selector: '[bu-m-6]'
})
export class BulmaM6Directive implements OnChanges, OnInit {
  @Input('bu-m-6') public set buM6(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buM6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buM6) {
      this.elementRef.nativeElement.classList.add('m-6');
    } else {
      this.elementRef.nativeElement.classList.remove('m-6');
    }
  }

  public ngOnChanges() {
    if (this.buM6) {
      this.elementRef.nativeElement.classList.add('m-6');
    } else {
      this.elementRef.nativeElement.classList.remove('m-6');
    }
  }
}
