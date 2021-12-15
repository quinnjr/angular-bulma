import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-pr-0]'
})
export class BulmaPr0Directive implements OnChanges, OnInit {
  @Input('bu-pr-0') public set buPr0(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPr0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPr0) {
      this.elementRef.nativeElement.classList.add('pr-0');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-0');
    }
  }

  public ngOnChanges() {
    if (this.buPr0) {
      this.elementRef.nativeElement.classList.add('pr-0');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-0');
    }
  }
}

@Directive({
  selector: '[bu-pr-1]'
})
export class BulmaPr1Directive implements OnChanges, OnInit {
  @Input('bu-pr-1') public set buPr1(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPr1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPr1) {
      this.elementRef.nativeElement.classList.add('pr-1');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-1');
    }
  }

  public ngOnChanges() {
    if (this.buPr1) {
      this.elementRef.nativeElement.classList.add('pr-1');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-1');
    }
  }
}

@Directive({
  selector: '[bu-pr-2]'
})
export class BulmaPr2Directive implements OnChanges, OnInit {
  @Input('bu-pr-2') public set buPr2(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPr2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPr2) {
      this.elementRef.nativeElement.classList.add('pr-2');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-2');
    }
  }

  public ngOnChanges() {
    if (this.buPr2) {
      this.elementRef.nativeElement.classList.add('pr-2');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-2');
    }
  }
}

@Directive({
  selector: '[bu-pr-3]'
})
export class BulmaPr3Directive implements OnChanges, OnInit {
  @Input('bu-pr-3') public set buPr3(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPr3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPr3) {
      this.elementRef.nativeElement.classList.add('pr-3');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-3');
    }
  }

  public ngOnChanges() {
    if (this.buPr3) {
      this.elementRef.nativeElement.classList.add('pr-3');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-3');
    }
  }
}

@Directive({
  selector: '[bu-pr-4]'
})
export class BulmaPr4Directive implements OnChanges, OnInit {
  @Input('bu-pr-4') public set buPr4(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPr4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPr4) {
      this.elementRef.nativeElement.classList.add('pr-4');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-4');
    }
  }

  public ngOnChanges() {
    if (this.buPr4) {
      this.elementRef.nativeElement.classList.add('pr-4');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-4');
    }
  }
}

@Directive({
  selector: '[bu-pr-5]'
})
export class BulmaPr5Directive implements OnChanges, OnInit {
  @Input('bu-pr-5') public set buPr5(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPr5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPr5) {
      this.elementRef.nativeElement.classList.add('pr-5');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-5');
    }
  }

  public ngOnChanges() {
    if (this.buPr5) {
      this.elementRef.nativeElement.classList.add('pr-5');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-5');
    }
  }
}

@Directive({
  selector: '[bu-pr-6]'
})
export class BulmaPr6Directive implements OnChanges, OnInit {
  @Input('bu-pr-6') public set buPr6(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPr6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPr6) {
      this.elementRef.nativeElement.classList.add('pr-6');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-6');
    }
  }

  public ngOnChanges() {
    if (this.buPr6) {
      this.elementRef.nativeElement.classList.add('pr-6');
    } else {
      this.elementRef.nativeElement.classList.remove('pr-6');
    }
  }
}
