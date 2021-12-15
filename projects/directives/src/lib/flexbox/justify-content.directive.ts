import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-justify-content-flex-start]'
})
export class BulmaIsJustifyContentFlexStartDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-justify-content-flex-start')
  public set buIsJustifyContentFlexStart(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsJustifyContentFlexStart(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsJustifyContentFlexStart) {
      this.elementRef.nativeElement.classList.add(
        'is-justify-content-flex-start'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-flex-start'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsJustifyContentFlexStart) {
      this.elementRef.nativeElement.classList.add(
        'is-justify-content-flex-start'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-flex-start'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-justify-content-flex-end]'
})
export class BulmaIsJustifyContentFlexEndDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-justify-content-flex-end') public set buIsJustifyContentFlexEnd(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsJustifyContentFlexEnd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsJustifyContentFlexEnd) {
      this.elementRef.nativeElement.classList.add(
        'is-justify-content-flex-end'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-flex-end'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsJustifyContentFlexEnd) {
      this.elementRef.nativeElement.classList.add(
        'is-justify-content-flex-end'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-flex-end'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-justify-content-center]'
})
export class BulmaIsJustifyContentCenterDirective implements OnChanges, OnInit {
  @Input('bu-is-justify-content-center') public set buIsJustifyContentCenter(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsJustifyContentCenter(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsJustifyContentCenter) {
      this.elementRef.nativeElement.classList.add('is-justify-content-center');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-center'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsJustifyContentCenter) {
      this.elementRef.nativeElement.classList.add('is-justify-content-center');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-center'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-justify-content-space-between]'
})
export class BulmaIsJustifyContentSpaceBetweenDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-justify-content-space-between')
  public set buIsJustifyContentSpaceBetween(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsJustifyContentSpaceBetween(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsJustifyContentSpaceBetween) {
      this.elementRef.nativeElement.classList.add(
        'is-justify-content-space-between'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-space-between'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsJustifyContentSpaceBetween) {
      this.elementRef.nativeElement.classList.add(
        'is-justify-content-space-between'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-space-between'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-justify-content-space-around]'
})
export class BulmaIsJustifyContentSpaceAroundDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-justify-content-space-around')
  public set buIsJustifyContentSpaceAround(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsJustifyContentSpaceAround(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsJustifyContentSpaceAround) {
      this.elementRef.nativeElement.classList.add(
        'is-justify-content-space-around'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-space-around'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsJustifyContentSpaceAround) {
      this.elementRef.nativeElement.classList.add(
        'is-justify-content-space-around'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-space-around'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-justify-content-space-evenly]'
})
export class BulmaIsJustifyContentSpaceEvenlyDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-justify-content-space-evenly')
  public set buIsJustifyContentSpaceEvenly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsJustifyContentSpaceEvenly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsJustifyContentSpaceEvenly) {
      this.elementRef.nativeElement.classList.add(
        'is-justify-content-space-evenly'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-space-evenly'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsJustifyContentSpaceEvenly) {
      this.elementRef.nativeElement.classList.add(
        'is-justify-content-space-evenly'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-space-evenly'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-justify-content-start]'
})
export class BulmaIsJustifyContentStartDirective implements OnChanges, OnInit {
  @Input('bu-is-justify-content-start') public set buIsJustifyContentStart(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsJustifyContentStart(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsJustifyContentStart) {
      this.elementRef.nativeElement.classList.add('is-justify-content-start');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-start'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsJustifyContentStart) {
      this.elementRef.nativeElement.classList.add('is-justify-content-start');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-start'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-justify-content-end]'
})
export class BulmaIsJustifyContentEndDirective implements OnChanges, OnInit {
  @Input('bu-is-justify-content-end') public set buIsJustifyContentEnd(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsJustifyContentEnd(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsJustifyContentEnd) {
      this.elementRef.nativeElement.classList.add('is-justify-content-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-justify-content-end');
    }
  }

  public ngOnChanges() {
    if (this.buIsJustifyContentEnd) {
      this.elementRef.nativeElement.classList.add('is-justify-content-end');
    } else {
      this.elementRef.nativeElement.classList.remove('is-justify-content-end');
    }
  }
}

@Directive({
  selector: '[bu-is-justify-content-left]'
})
export class BulmaIsJustifyContentLeftDirective implements OnChanges, OnInit {
  @Input('bu-is-justify-content-left') public set buIsJustifyContentLeft(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsJustifyContentLeft(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsJustifyContentLeft) {
      this.elementRef.nativeElement.classList.add('is-justify-content-left');
    } else {
      this.elementRef.nativeElement.classList.remove('is-justify-content-left');
    }
  }

  public ngOnChanges() {
    if (this.buIsJustifyContentLeft) {
      this.elementRef.nativeElement.classList.add('is-justify-content-left');
    } else {
      this.elementRef.nativeElement.classList.remove('is-justify-content-left');
    }
  }
}

@Directive({
  selector: '[bu-is-justify-content-right]'
})
export class BulmaIsJustifyContentRightDirective implements OnChanges, OnInit {
  @Input('bu-is-justify-content-right') public set buIsJustifyContentRight(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsJustifyContentRight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsJustifyContentRight) {
      this.elementRef.nativeElement.classList.add('is-justify-content-right');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-right'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsJustifyContentRight) {
      this.elementRef.nativeElement.classList.add('is-justify-content-right');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-justify-content-right'
      );
    }
  }
}
