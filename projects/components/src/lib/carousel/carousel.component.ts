/* eslint-disable no-underscore-dangle */

import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  HostBinding
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import merge from 'lodash.mergewith';

import { BulmaCarouselOptions } from './carousel-options';
import { BULMA_CAROUSEL_DEFAULT_OPTIONS } from './default-options';
import { BulmaCarouselItem } from './carousel-item';
import { values } from 'cypress/types/lodash';

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
        [attr.aria-labelledby]="slide.id"
        [attr.aria-controls]="slide.id"
        [attr.aria-selected]="slide.id === activeId"
        (click)="focus(); select(slide.id)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        *ngFor="let slide of slides; index as idx; count as c"
        class="carousel-item"
        [id]="slide.id"
        role="tabpanel"
      >
        <span class="visually-hidden">Slide {{ idx + 1 }} of {{ c }}</span>
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
export class BulmaCarouselComponent implements OnInit {
  @HostBinding('class')
  public class = 'carousel slide';

  @HostBinding('[style.display')
  public styleDisplay = 'block';

  @HostBinding('tabIndex')
  public tabIndex = 0;

  @Input() public keyboard = false;

  @Input() public interval = 500;

  @Input() public pauseOnFocus = true;

  @Input() public pauseOnHover = true;

  @Input() public wrap = true;

  @Input() public showNavigationArrows = true;

  @Input() public showNavigationIndicators = true;

  public pause = false;

  @ViewChild('sliderNavigationPrevious')
  public sliderNavigationPrevious!: ElementRef;

  @ViewChild('sliderNavigationNext')
  public sliderNavigationNext!: ElementRef;

  @ViewChildren(BulmaCarouselItem)
  public images?: QueryList<BulmaCarouselItem>;

  public get options() {
    return this._options.value;
  }

  @Input()
  public set options(val: BulmaCarouselOptions) {
    const options = this._options.value;
    this._options.next(merge(options, val));
  }

  private _options: BehaviorSubject<BulmaCarouselOptions> = new BehaviorSubject(
    BULMA_CAROUSEL_DEFAULT_OPTIONS
  );

  constructor(private readonly renderer: Renderer2) {}

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
