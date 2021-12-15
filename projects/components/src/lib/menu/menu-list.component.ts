import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'bu-menu-list',
  template: `
    <ul [ngClass]="{ 'menu-list': !isChildContext }">
      <li>
        <ng-content></ng-content>
      </li>
    </ul>
  `
})
export class BulmaMenuListComponent implements AfterContentInit {
  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly elementRef: ElementRef
  ) {}

  public get isChildContext(): boolean {
    return (
      this.elementRef.nativeElement.parentElement?.parentElement?.tagName !==
      'BU-MENU'
    );
  }

  public ngAfterContentInit() {
    this.cdr.detectChanges();
  }
}
