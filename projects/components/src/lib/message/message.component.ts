import {
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  QueryList
} from '@angular/core';

@Directive({
  /* eslint-disable-next-line @angular-eslint/directive-selector */
  selector: '[class]'
})
export class ClassDirective {
  @HostBinding('class') @Input('class') className = '';
}

@Component({
  selector: 'bu-message',
  template: `
    <article
      class="message"
      [ngClass]="{
        'is-dark': color === 'dark',
        'is-primary': color === 'primary',
        'is-link': color === 'link',
        'is-info': color === 'info',
        'is-success': color === 'success',
        'is-warning': color === 'warning',
        'is-danger': color === 'danger',
        'is-small': size === 'small',
        'is-medium': size === 'medium',
        'is-large': size === 'large'
      }"
    >
      <div class="message-header" *ngIf="hasHeader">
        <ng-content selector=".message-header"></ng-content>
        <ng-container *ngIf="hasDelete">
          <button
            class="delete"
            aria-label="delete"
            (click)="delete()"
          ></button>
        </ng-container>
      </div>
      <div class="message-body">
        <ng-content selector=".message-body"></ng-content>
      </div>
    </article>
  `
})
export class BulmaMessageComponent {
  @ContentChildren(ClassDirective, {
    descendants: true,
    read: ElementRef
  })
  classes!: QueryList<ElementRef>;

  @Input() public delete: (id?: unknown) => unknown = () => {};
  @Input() public color = '';
  @Input() public size = '';

  private _hasDelete = false;

  constructor() {}

  public get hasHeader(): boolean {
    return this.classes
      .map((ref: ElementRef) => ref.nativeElement)
      .includes((el: Element) => el.className === 'message-header');
  }

  public get hasDelete(): boolean {
    return this._hasDelete;
  }

  @Input('has-delete')
  public set hasDelete(input: string | boolean) {
    if (typeof input === 'string') {
      if (input.toLowerCase() === 'true') {
        this._hasDelete = true;
      } else {
        this._hasDelete = false;
      }
    } else {
      this._hasDelete = input;
    }
  }
}
