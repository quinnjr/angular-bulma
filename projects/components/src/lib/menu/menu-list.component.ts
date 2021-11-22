import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'bu-menu-list-item',
  template: `
    <ng-template #menuList>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class BulmaMenuListItemComponent implements AfterContentInit {
  @ViewChild(TemplateRef) public templateRef!: TemplateRef<any>;

  constructor(private readonly cdr: ChangeDetectorRef) {
    console.log('constructed');
  }

  public ngAfterContentInit() {
    this.cdr.detectChanges();
  }
}

@Component({
  selector: 'bu-menu-list',
  template: `
    <ul [ngClass]="{ 'menu-list': !isChildContext }">
      <li *ngFor="let menuItem of menuItems; let idx = index">
        <ng-container *ngTemplateOutlet="menuItem.templateRef"></ng-container>
      </li>
    </ul>
  `
})
export class BulmaMenuListComponent {
  @ContentChildren(BulmaMenuListItemComponent)
  public menuItems!: QueryList<BulmaMenuListItemComponent>;

  constructor(private readonly elementRef: ElementRef) {}

  public get isChildContext(): boolean {
    return (
      this.elementRef.nativeElement.parentElement?.parentElement?.tagName !==
      'BU-MENU'
    );
  }
}
