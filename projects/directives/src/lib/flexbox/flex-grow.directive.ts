import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-is-flex-grow-0]'
})
export class BulmaIsFlexGrow0Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-grow-0') public set buIsFlexGrow0(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexGrow0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexGrow0) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-0');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-0');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexGrow0) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-0');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-0');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-grow-1]'
})
export class BulmaIsFlexGrow1Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-grow-1') public set buIsFlexGrow1(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexGrow1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexGrow1) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-1');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-1');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexGrow1) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-1');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-1');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-grow-2]'
})
export class BulmaIsFlexGrow2Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-grow-2') public set buIsFlexGrow2(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexGrow2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexGrow2) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-2');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-2');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexGrow2) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-2');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-2');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-grow-3]'
})
export class BulmaIsFlexGrow3Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-grow-3') public set buIsFlexGrow3(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexGrow3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexGrow3) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-3');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-3');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexGrow3) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-3');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-3');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-grow-4]'
})
export class BulmaIsFlexGrow4Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-grow-4') public set buIsFlexGrow4(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexGrow4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexGrow4) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-4');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-4');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexGrow4) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-4');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-4');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-grow-5]'
})
export class BulmaIsFlexGrow5Directive implements OnChanges, OnInit {
  @Input('bu-is-flex-grow-5') public set buIsFlexGrow5(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexGrow5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexGrow5) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-5');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-5');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexGrow5) {
      this.elementRef.nativeElement.classList.add('is-flex-grow-5');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-grow-5');
    }
  }
}
