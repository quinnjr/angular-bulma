import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-flex-direction-row]'
})
export class BulmaIsFlexDirectionRowDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-direction-row') public set buIsFlexDirectionRow(
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

  public get buIsFlexDirectionRow(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexDirectionRow) {
      this.elementRef.nativeElement.classList.add('is-flex-direction-row');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-direction-row');
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexDirectionRow) {
      this.elementRef.nativeElement.classList.add('is-flex-direction-row');
    } else {
      this.elementRef.nativeElement.classList.remove('is-flex-direction-row');
    }
  }
}

@Directive({
  selector: '[bu-is-flex-direction-row-reverse]'
})
export class BulmaIsFlexDirectionRowReverseDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-flex-direction-row-reverse')
  public set buIsFlexDirectionRowReverse(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexDirectionRowReverse(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexDirectionRowReverse) {
      this.elementRef.nativeElement.classList.add(
        'is-flex-direction-row-reverse'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-flex-direction-row-reverse'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexDirectionRowReverse) {
      this.elementRef.nativeElement.classList.add(
        'is-flex-direction-row-reverse'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-flex-direction-row-reverse'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-flex-direction-column]'
})
export class BulmaIsFlexDirectionColumnDirective implements OnChanges, OnInit {
  @Input('bu-is-flex-direction-column') public set buIsFlexDirectionColumn(
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

  public get buIsFlexDirectionColumn(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexDirectionColumn) {
      this.elementRef.nativeElement.classList.add('is-flex-direction-column');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-flex-direction-column'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexDirectionColumn) {
      this.elementRef.nativeElement.classList.add('is-flex-direction-column');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-flex-direction-column'
      );
    }
  }
}

@Directive({
  selector: '[bu-is-flex-direction-column-reverse]'
})
export class BulmaIsFlexDirectionColumnReverseDirective
  implements OnChanges, OnInit
{
  @Input('bu-is-flex-direction-column-reverse')
  public set buIsFlexDirectionColumnReverse(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsFlexDirectionColumnReverse(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFlexDirectionColumnReverse) {
      this.elementRef.nativeElement.classList.add(
        'is-flex-direction-column-reverse'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-flex-direction-column-reverse'
      );
    }
  }

  public ngOnChanges() {
    if (this.buIsFlexDirectionColumnReverse) {
      this.elementRef.nativeElement.classList.add(
        'is-flex-direction-column-reverse'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'is-flex-direction-column-reverse'
      );
    }
  }
}
