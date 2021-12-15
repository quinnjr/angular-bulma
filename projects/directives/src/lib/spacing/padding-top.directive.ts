import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-pt-0]'
})
export class BulmaPt0Directive implements OnChanges, OnInit {
  @Input('bu-pt-0') public set buPt0(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPt0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPt0) {
      this.elementRef.nativeElement.classList.add('pt-0');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-0');
    }
  }

  public ngOnChanges() {
    if (this.buPt0) {
      this.elementRef.nativeElement.classList.add('pt-0');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-0');
    }
  }
}

@Directive({
  selector: '[bu-pt-1]'
})
export class BulmaPt1Directive implements OnChanges, OnInit {
  @Input('bu-pt-1') public set buPt1(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPt1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPt1) {
      this.elementRef.nativeElement.classList.add('pt-1');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-1');
    }
  }

  public ngOnChanges() {
    if (this.buPt1) {
      this.elementRef.nativeElement.classList.add('pt-1');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-1');
    }
  }
}

@Directive({
  selector: '[bu-pt-2]'
})
export class BulmaPt2Directive implements OnChanges, OnInit {
  @Input('bu-pt-2') public set buPt2(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPt2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPt2) {
      this.elementRef.nativeElement.classList.add('pt-2');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-2');
    }
  }

  public ngOnChanges() {
    if (this.buPt2) {
      this.elementRef.nativeElement.classList.add('pt-2');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-2');
    }
  }
}

@Directive({
  selector: '[bu-pt-3]'
})
export class BulmaPt3Directive implements OnChanges, OnInit {
  @Input('bu-pt-3') public set buPt3(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPt3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPt3) {
      this.elementRef.nativeElement.classList.add('pt-3');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-3');
    }
  }

  public ngOnChanges() {
    if (this.buPt3) {
      this.elementRef.nativeElement.classList.add('pt-3');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-3');
    }
  }
}

@Directive({
  selector: '[bu-pt-4]'
})
export class BulmaPt4Directive implements OnChanges, OnInit {
  @Input('bu-pt-4') public set buPt4(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPt4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPt4) {
      this.elementRef.nativeElement.classList.add('pt-4');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-4');
    }
  }

  public ngOnChanges() {
    if (this.buPt4) {
      this.elementRef.nativeElement.classList.add('pt-4');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-4');
    }
  }
}

@Directive({
  selector: '[bu-pt-5]'
})
export class BulmaPt5Directive implements OnChanges, OnInit {
  @Input('bu-pt-5') public set buPt5(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPt5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPt5) {
      this.elementRef.nativeElement.classList.add('pt-5');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-5');
    }
  }

  public ngOnChanges() {
    if (this.buPt5) {
      this.elementRef.nativeElement.classList.add('pt-5');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-5');
    }
  }
}

@Directive({
  selector: '[bu-pt-6]'
})
export class BulmaPt6Directive implements OnChanges, OnInit {
  @Input('bu-pt-6') public set buPt6(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buPt6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPt6) {
      this.elementRef.nativeElement.classList.add('pt-6');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-6');
    }
  }

  public ngOnChanges() {
    if (this.buPt6) {
      this.elementRef.nativeElement.classList.add('pt-6');
    } else {
      this.elementRef.nativeElement.classList.remove('pt-6');
    }
  }
}
