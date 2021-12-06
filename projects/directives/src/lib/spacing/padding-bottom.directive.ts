import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-pb-0]'
})
export class BulmaPb0Directive implements OnChanges, OnInit {
  @Input('bu-pb-0') public set buPb0(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buPb0(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPb0) {
      this.elementRef.nativeElement.classList.add('pb-0');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-0');
    }
  }

  public ngOnChanges() {
    if (this.buPb0) {
      this.elementRef.nativeElement.classList.add('pb-0');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-0');
    }
  }
}

@Directive({
  selector: '[bu-pb-1]'
})
export class BulmaPb1Directive implements OnChanges, OnInit {
  @Input('bu-pb-1') public set buPb1(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buPb1(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPb1) {
      this.elementRef.nativeElement.classList.add('pb-1');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-1');
    }
  }

  public ngOnChanges() {
    if (this.buPb1) {
      this.elementRef.nativeElement.classList.add('pb-1');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-1');
    }
  }
}

@Directive({
  selector: '[bu-pb-2]'
})
export class BulmaPb2Directive implements OnChanges, OnInit {
  @Input('bu-pb-2') public set buPb2(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buPb2(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPb2) {
      this.elementRef.nativeElement.classList.add('pb-2');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-2');
    }
  }

  public ngOnChanges() {
    if (this.buPb2) {
      this.elementRef.nativeElement.classList.add('pb-2');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-2');
    }
  }
}

@Directive({
  selector: '[bu-pb-3]'
})
export class BulmaPb3Directive implements OnChanges, OnInit {
  @Input('bu-pb-3') public set buPb3(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buPb3(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPb3) {
      this.elementRef.nativeElement.classList.add('pb-3');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-3');
    }
  }

  public ngOnChanges() {
    if (this.buPb3) {
      this.elementRef.nativeElement.classList.add('pb-3');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-3');
    }
  }
}

@Directive({
  selector: '[bu-pb-4]'
})
export class BulmaPb4Directive implements OnChanges, OnInit {
  @Input('bu-pb-4') public set buPb4(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buPb4(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPb4) {
      this.elementRef.nativeElement.classList.add('pb-4');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-4');
    }
  }

  public ngOnChanges() {
    if (this.buPb4) {
      this.elementRef.nativeElement.classList.add('pb-4');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-4');
    }
  }
}

@Directive({
  selector: '[bu-pb-5]'
})
export class BulmaPb5Directive implements OnChanges, OnInit {
  @Input('bu-pb-5') public set buPb5(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buPb5(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPb5) {
      this.elementRef.nativeElement.classList.add('pb-5');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-5');
    }
  }

  public ngOnChanges() {
    if (this.buPb5) {
      this.elementRef.nativeElement.classList.add('pb-5');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-5');
    }
  }
}

@Directive({
  selector: '[bu-pb-6]'
})
export class BulmaPb6Directive implements OnChanges, OnInit {
  @Input('bu-pb-6') public set buPb6(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buPb6(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buPb6) {
      this.elementRef.nativeElement.classList.add('pb-6');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-6');
    }
  }

  public ngOnChanges() {
    if (this.buPb6) {
      this.elementRef.nativeElement.classList.add('pb-6');
    } else {
      this.elementRef.nativeElement.classList.remove('pb-6');
    }
  }
}
