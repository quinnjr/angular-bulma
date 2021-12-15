import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-py-0]'
})
export class BulmaPy0Directive implements OnChanges, OnInit {
  @Input('bu-py-0') public set buPy0(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPy0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPy0) {
      this.elementRef.nativeElement.classList.add('py-0');
    } else {
      this.elementRef.nativeElement.classList.remove('py-0');
    }
  }

  public ngOnChanges() {
    if (this.buPy0) {
      this.elementRef.nativeElement.classList.add('py-0');
    } else {
      this.elementRef.nativeElement.classList.remove('py-0');
    }
  }
}

@Directive({
  selector: '[bu-py-1]'
})
export class BulmaPy1Directive implements OnChanges, OnInit {
  @Input('bu-py-1') public set buPy1(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPy1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPy1) {
      this.elementRef.nativeElement.classList.add('py-1');
    } else {
      this.elementRef.nativeElement.classList.remove('py-1');
    }
  }

  public ngOnChanges() {
    if (this.buPy1) {
      this.elementRef.nativeElement.classList.add('py-1');
    } else {
      this.elementRef.nativeElement.classList.remove('py-1');
    }
  }
}

@Directive({
  selector: '[bu-py-2]'
})
export class BulmaPy2Directive implements OnChanges, OnInit {
  @Input('bu-py-2') public set buPy2(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPy2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPy2) {
      this.elementRef.nativeElement.classList.add('py-2');
    } else {
      this.elementRef.nativeElement.classList.remove('py-2');
    }
  }

  public ngOnChanges() {
    if (this.buPy2) {
      this.elementRef.nativeElement.classList.add('py-2');
    } else {
      this.elementRef.nativeElement.classList.remove('py-2');
    }
  }
}

@Directive({
  selector: '[bu-py-3]'
})
export class BulmaPy3Directive implements OnChanges, OnInit {
  @Input('bu-py-3') public set buPy3(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPy3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPy3) {
      this.elementRef.nativeElement.classList.add('py-3');
    } else {
      this.elementRef.nativeElement.classList.remove('py-3');
    }
  }

  public ngOnChanges() {
    if (this.buPy3) {
      this.elementRef.nativeElement.classList.add('py-3');
    } else {
      this.elementRef.nativeElement.classList.remove('py-3');
    }
  }
}

@Directive({
  selector: '[bu-py-4]'
})
export class BulmaPy4Directive implements OnChanges, OnInit {
  @Input('bu-py-4') public set buPy4(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPy4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPy4) {
      this.elementRef.nativeElement.classList.add('py-4');
    } else {
      this.elementRef.nativeElement.classList.remove('py-4');
    }
  }

  public ngOnChanges() {
    if (this.buPy4) {
      this.elementRef.nativeElement.classList.add('py-4');
    } else {
      this.elementRef.nativeElement.classList.remove('py-4');
    }
  }
}

@Directive({
  selector: '[bu-py-5]'
})
export class BulmaPy5Directive implements OnChanges, OnInit {
  @Input('bu-py-5') public set buPy5(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPy5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPy5) {
      this.elementRef.nativeElement.classList.add('py-5');
    } else {
      this.elementRef.nativeElement.classList.remove('py-5');
    }
  }

  public ngOnChanges() {
    if (this.buPy5) {
      this.elementRef.nativeElement.classList.add('py-5');
    } else {
      this.elementRef.nativeElement.classList.remove('py-5');
    }
  }
}

@Directive({
  selector: '[bu-py-6]'
})
export class BulmaPy6Directive implements OnChanges, OnInit {
  @Input('bu-py-6') public set buPy6(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPy6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPy6) {
      this.elementRef.nativeElement.classList.add('py-6');
    } else {
      this.elementRef.nativeElement.classList.remove('py-6');
    }
  }

  public ngOnChanges() {
    if (this.buPy6) {
      this.elementRef.nativeElement.classList.add('py-6');
    } else {
      this.elementRef.nativeElement.classList.remove('py-6');
    }
  }
}
