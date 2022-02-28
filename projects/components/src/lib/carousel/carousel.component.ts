/* eslint-disable no-underscore-dangle */

import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  OnDestroy,
  Output,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  HostBinding
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  distinctUntilChanged,
  combineLatest,
  NEVER,
  Observable,
  Subject,
  timer,
  zip,
  BehaviorSubject
} from 'rxjs';
import merge from 'lodash.mergewith';

import { BulmaCarouselOptions } from './carousel-options';
import { BULMA_CAROUSEL_DEFAULT_OPTIONS } from './default-options';

let nextId = 0;

@Directive({
  selector: 'ng-template[buCarouselSlide]'
})
export class BulmaCarouselSlideDirective {
  @Input() id = `ngb-slide-${nextId++}`;

  @Output() slid: EventEmitter<boolean> = new EventEmitter(false);

  constructor(public readonly templateRef: TemplateRef<any>) {}
}

@Component({
  selector: 'bu-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // host: {
  //   '(keydown.arrowLeft)': 'keyboard && arrowLeft()',
  //   '(keydown.arrowRight)': 'keyboard && arrowRight()',
  //   '(mouseenter)': 'mouseHover = true',
  //   '(mouseleave)': 'mouseHover = false',
  //   '(focusin)': 'focused = true',
  //   '(focusout)': 'focused = false',
  //   '[attr.aria-activedescendant]': `'slide-' + activeId`
  // },
  template: `
    <div
      class="carousel-indicators"
      [class.visually-hidden]="!showNavigationIndicators"
      role="tablist"
    >
      <button
        type="button"
        *ngFor="let slide of slides"
        [class.active]="slide.id === activeId"
        role="tab"
        [attr.aria-labelledby]="'slide-' + slide.id"
        [attr.aria-controls]="'slide-' + slide.id"
        [attr.aria-selected]="slide.id === activeId"
        (click)="focus(); select(slide.id)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        *ngFor="let slide of slides; index as idx; count as c"
        class="carousel-item"
        [id]="'slide-' + slide.id"
        role="tabpanel"
      >
        <span class="visually-hidden">Slide {{ i + 1 }} of {{ c }}</span>
        <ng-template [ngTemplateOutlet]="slide.templateRef"></ng-template>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      (click)="arrowLeft()"
      *ngIf="showNavigationArrows"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      (click)="arrowRight()"
      *ngIf="showNavigationArrows"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  `,
  styleUrls: ['./carousel.component.scss']
})
export class BulmaCarouselComponent
  implements AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy
{
  @HostBinding('class')
  public class = 'carousel slide';

  @HostBinding('[style.display')
  public styleDisplay = 'block';

  @HostBinding('tabIndex')
  public tabIndex = 0;

  @Input() activeId!: string;

  @Input() keyboard = true;

  @Input()
  set interval(value: number) {
    this._interval.next(value);
  }

  get interval(): number {
    return this._interval.value;
  }

  @Input()
  set pauseOnFocus(value: boolean) {
    this._pauseOnFocus.next(value);
  }

  get pauseOnFocus(): boolean {
    return this._pauseOnFocus.value;
  }

  @Input()
  set pauseOnHover(value: boolean) {
    this._pauseOnHover.next(value);
  }

  get pauseOnHover(): boolean {
    return this._pauseOnHover.value;
  }

  @Input()
  set wrap(value: boolean) {
    this._wrap.next(value);
  }

  get wrap(): boolean {
    return this._wrap.value;
  }

  @Input() showNavigationArrows = true;

  @Input() showNavigationIndicators = true;

  set mouseHover(value: boolean) {
    this._mouseHover.next(value);
  }

  get mouseHover(): boolean {
    return this._mouseHover.value;
  }

  set focused(value: boolean) {
    this._focused.next(value);
  }

  get focused(): boolean {
    return this._focused.value;
  }

  @ViewChild('sliderNavigationPrevious')
  public sliderNavigationPrevious!: ElementRef;

  @ViewChild('sliderNavigationNext')
  public sliderNavigationNext!: ElementRef;

  @ViewChildren(BulmaCarouselSlideDirective)
  public images?: QueryList<BulmaCarouselSlideDirective>;

  private _options: BulmaCarouselOptions = BULMA_CAROUSEL_DEFAULT_OPTIONS;

  private _destroy = new Subject<void>();
  private _interval = new BehaviorSubject(5000);
  private _mouseHover = new BehaviorSubject(false);
  private _focused = new BehaviorSubject(false);
  private _pauseOnHover = new BehaviorSubject(false);
  private _pauseOnFocus = new BehaviorSubject(false);
  private _pause = new BehaviorSubject(false);
  private _wrap = new BehaviorSubject(false);

  private _transitionIds: [string, string] | null = null;

  constructor(private readonly renderer: Renderer2) {}

  public get options() {
    return this._options;
  }

  @Input()
  public set options(val: BulmaCarouselOptions) {
    this._options = merge(this._options, val);
  }

  public ngOnInit() {
    const prevButton = document.createElement('template');
    prevButton.innerHTML = this.options.icons.previous;
    this.renderer.setProperty(
      this.sliderNavigationPrevious.nativeElement,
      'innerHTML',
      prevButton
    );

    const nextButton = document.createElement('template');
    nextButton.innerHTML = this.options.icons.next;
    this.renderer.setProperty(
      this.sliderNavigationNext.nativeElement,
      'innerHTML',
      nextButton
    );
  }
}
