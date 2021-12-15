import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-px-0]'
})
export class BulmaPx0Directive implements OnChanges, OnInit {
  @Input('bu-px-0') public set buPx0(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPx0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPx0) {
      this.elementRef.nativeElement.classList.add('px-0');
    } else {
      this.elementRef.nativeElement.classList.remove('px-0');
    }
  }

  public ngOnChanges() {
    if (this.buPx0) {
      this.elementRef.nativeElement.classList.add('px-0');
    } else {
      this.elementRef.nativeElement.classList.remove('px-0');
    }
  }
}

@Directive({
  selector: '[bu-px-1]'
})
export class BulmaPx1Directive implements OnChanges, OnInit {
  @Input('bu-px-1') public set buPx1(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPx1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPx1) {
      this.elementRef.nativeElement.classList.add('px-1');
    } else {
      this.elementRef.nativeElement.classList.remove('px-1');
    }
  }

  public ngOnChanges() {
    if (this.buPx1) {
      this.elementRef.nativeElement.classList.add('px-1');
    } else {
      this.elementRef.nativeElement.classList.remove('px-1');
    }
  }
}

@Directive({
  selector: '[bu-px-2]'
})
export class BulmaPx2Directive implements OnChanges, OnInit {
  @Input('bu-px-2') public set buPx2(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPx2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPx2) {
      this.elementRef.nativeElement.classList.add('px-2');
    } else {
      this.elementRef.nativeElement.classList.remove('px-2');
    }
  }

  public ngOnChanges() {
    if (this.buPx2) {
      this.elementRef.nativeElement.classList.add('px-2');
    } else {
      this.elementRef.nativeElement.classList.remove('px-2');
    }
  }
}

@Directive({
  selector: '[bu-px-3]'
})
export class BulmaPx3Directive implements OnChanges, OnInit {
  @Input('bu-px-3') public set buPx3(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPx3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPx3) {
      this.elementRef.nativeElement.classList.add('px-3');
    } else {
      this.elementRef.nativeElement.classList.remove('px-3');
    }
  }

  public ngOnChanges() {
    if (this.buPx3) {
      this.elementRef.nativeElement.classList.add('px-3');
    } else {
      this.elementRef.nativeElement.classList.remove('px-3');
    }
  }
}

@Directive({
  selector: '[bu-px-4]'
})
export class BulmaPx4Directive implements OnChanges, OnInit {
  @Input('bu-px-4') public set buPx4(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPx4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPx4) {
      this.elementRef.nativeElement.classList.add('px-4');
    } else {
      this.elementRef.nativeElement.classList.remove('px-4');
    }
  }

  public ngOnChanges() {
    if (this.buPx4) {
      this.elementRef.nativeElement.classList.add('px-4');
    } else {
      this.elementRef.nativeElement.classList.remove('px-4');
    }
  }
}

@Directive({
  selector: '[bu-px-5]'
})
export class BulmaPx5Directive implements OnChanges, OnInit {
  @Input('bu-px-5') public set buPx5(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPx5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPx5) {
      this.elementRef.nativeElement.classList.add('px-5');
    } else {
      this.elementRef.nativeElement.classList.remove('px-5');
    }
  }

  public ngOnChanges() {
    if (this.buPx5) {
      this.elementRef.nativeElement.classList.add('px-5');
    } else {
      this.elementRef.nativeElement.classList.remove('px-5');
    }
  }
}

@Directive({
  selector: '[bu-px-6]'
})
export class BulmaPx6Directive implements OnChanges, OnInit {
  @Input('bu-px-6') public set buPx6(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPx6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPx6) {
      this.elementRef.nativeElement.classList.add('px-6');
    } else {
      this.elementRef.nativeElement.classList.remove('px-6');
    }
  }

  public ngOnChanges() {
    if (this.buPx6) {
      this.elementRef.nativeElement.classList.add('px-6');
    } else {
      this.elementRef.nativeElement.classList.remove('px-6');
    }
  }
}
