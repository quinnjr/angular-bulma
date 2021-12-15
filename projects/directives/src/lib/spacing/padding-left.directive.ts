import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-pl-0]'
})
export class BulmaPl0Directive implements OnChanges, OnInit {
  @Input('bu-pl-0') public set buPl0(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPl0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPl0) {
      this.elementRef.nativeElement.classList.add('pl-0');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-0');
    }
  }

  public ngOnChanges() {
    if (this.buPl0) {
      this.elementRef.nativeElement.classList.add('pl-0');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-0');
    }
  }
}

@Directive({
  selector: '[bu-pl-1]'
})
export class BulmaPl1Directive implements OnChanges, OnInit {
  @Input('bu-pl-1') public set buPl1(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPl1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPl1) {
      this.elementRef.nativeElement.classList.add('pl-1');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-1');
    }
  }

  public ngOnChanges() {
    if (this.buPl1) {
      this.elementRef.nativeElement.classList.add('pl-1');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-1');
    }
  }
}

@Directive({
  selector: '[bu-pl-2]'
})
export class BulmaPl2Directive implements OnChanges, OnInit {
  @Input('bu-pl-2') public set buPl2(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPl2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPl2) {
      this.elementRef.nativeElement.classList.add('pl-2');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-2');
    }
  }

  public ngOnChanges() {
    if (this.buPl2) {
      this.elementRef.nativeElement.classList.add('pl-2');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-2');
    }
  }
}

@Directive({
  selector: '[bu-pl-3]'
})
export class BulmaPl3Directive implements OnChanges, OnInit {
  @Input('bu-pl-3') public set buPl3(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPl3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPl3) {
      this.elementRef.nativeElement.classList.add('pl-3');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-3');
    }
  }

  public ngOnChanges() {
    if (this.buPl3) {
      this.elementRef.nativeElement.classList.add('pl-3');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-3');
    }
  }
}

@Directive({
  selector: '[bu-pl-4]'
})
export class BulmaPl4Directive implements OnChanges, OnInit {
  @Input('bu-pl-4') public set buPl4(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPl4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPl4) {
      this.elementRef.nativeElement.classList.add('pl-4');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-4');
    }
  }

  public ngOnChanges() {
    if (this.buPl4) {
      this.elementRef.nativeElement.classList.add('pl-4');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-4');
    }
  }
}

@Directive({
  selector: '[bu-pl-5]'
})
export class BulmaPl5Directive implements OnChanges, OnInit {
  @Input('bu-pl-5') public set buPl5(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPl5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPl5) {
      this.elementRef.nativeElement.classList.add('pl-5');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-5');
    }
  }

  public ngOnChanges() {
    if (this.buPl5) {
      this.elementRef.nativeElement.classList.add('pl-5');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-5');
    }
  }
}

@Directive({
  selector: '[bu-pl-6]'
})
export class BulmaPl6Directive implements OnChanges, OnInit {
  @Input('bu-pl-6') public set buPl6(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPl6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPl6) {
      this.elementRef.nativeElement.classList.add('pl-6');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-6');
    }
  }

  public ngOnChanges() {
    if (this.buPl6) {
      this.elementRef.nativeElement.classList.add('pl-6');
    } else {
      this.elementRef.nativeElement.classList.remove('pl-6');
    }
  }
}
