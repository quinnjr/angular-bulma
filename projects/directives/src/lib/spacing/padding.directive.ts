import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-p-0]'
})
export class BulmaP0Directive implements OnChanges, OnInit {
  @Input('bu-p-0') public set buP0(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buP0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buP0) {
      this.elementRef.nativeElement.classList.add('p-0');
    } else {
      this.elementRef.nativeElement.classList.remove('p-0');
    }
  }

  public ngOnChanges() {
    if (this.buP0) {
      this.elementRef.nativeElement.classList.add('p-0');
    } else {
      this.elementRef.nativeElement.classList.remove('p-0');
    }
  }
}

@Directive({
  selector: '[bu-p-1]'
})
export class BulmaP1Directive implements OnChanges, OnInit {
  @Input('bu-p-1') public set buP1(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buP1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buP1) {
      this.elementRef.nativeElement.classList.add('p-1');
    } else {
      this.elementRef.nativeElement.classList.remove('p-1');
    }
  }

  public ngOnChanges() {
    if (this.buP1) {
      this.elementRef.nativeElement.classList.add('p-1');
    } else {
      this.elementRef.nativeElement.classList.remove('p-1');
    }
  }
}

@Directive({
  selector: '[bu-p-2]'
})
export class BulmaP2Directive implements OnChanges, OnInit {
  @Input('bu-p-2') public set buP2(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buP2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buP2) {
      this.elementRef.nativeElement.classList.add('p-2');
    } else {
      this.elementRef.nativeElement.classList.remove('p-2');
    }
  }

  public ngOnChanges() {
    if (this.buP2) {
      this.elementRef.nativeElement.classList.add('p-2');
    } else {
      this.elementRef.nativeElement.classList.remove('p-2');
    }
  }
}

@Directive({
  selector: '[bu-p-3]'
})
export class BulmaP3Directive implements OnChanges, OnInit {
  @Input('bu-p-3') public set buP3(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buP3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buP3) {
      this.elementRef.nativeElement.classList.add('p-3');
    } else {
      this.elementRef.nativeElement.classList.remove('p-3');
    }
  }

  public ngOnChanges() {
    if (this.buP3) {
      this.elementRef.nativeElement.classList.add('p-3');
    } else {
      this.elementRef.nativeElement.classList.remove('p-3');
    }
  }
}

@Directive({
  selector: '[bu-p-4]'
})
export class BulmaP4Directive implements OnChanges, OnInit {
  @Input('bu-p-4') public set buP4(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buP4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buP4) {
      this.elementRef.nativeElement.classList.add('p-4');
    } else {
      this.elementRef.nativeElement.classList.remove('p-4');
    }
  }

  public ngOnChanges() {
    if (this.buP4) {
      this.elementRef.nativeElement.classList.add('p-4');
    } else {
      this.elementRef.nativeElement.classList.remove('p-4');
    }
  }
}

@Directive({
  selector: '[bu-p-5]'
})
export class BulmaP5Directive implements OnChanges, OnInit {
  @Input('bu-p-5') public set buP5(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buP5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buP5) {
      this.elementRef.nativeElement.classList.add('p-5');
    } else {
      this.elementRef.nativeElement.classList.remove('p-5');
    }
  }

  public ngOnChanges() {
    if (this.buP5) {
      this.elementRef.nativeElement.classList.add('p-5');
    } else {
      this.elementRef.nativeElement.classList.remove('p-5');
    }
  }
}

@Directive({
  selector: '[bu-p-6]'
})
export class BulmaP6Directive implements OnChanges, OnInit {
  @Input('bu-p-6') public set buP6(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buP6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buP6) {
      this.elementRef.nativeElement.classList.add('p-6');
    } else {
      this.elementRef.nativeElement.classList.remove('p-6');
    }
  }

  public ngOnChanges() {
    if (this.buP6) {
      this.elementRef.nativeElement.classList.add('p-6');
    } else {
      this.elementRef.nativeElement.classList.remove('p-6');
    }
  }
}
