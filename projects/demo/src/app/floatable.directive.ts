import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';

@Directive({
  selector: '[appFloatable]'
})
export class FloatableDirective implements OnInit {
  constructor(
    private readonly elementRef: ElementRef,
    @Inject(PLATFORM_ID) private readonly platformId: any
  ) {}

  public ngOnInit() {
    this.calculateStyle();
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll() {
    this.calculateStyle();
  }

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.calculateStyle();
  }

  private calculateStyle() {
    if (isPlatformBrowser(this.platformId)) {
      const offset = window.pageYOffset;
      const navbar = document.querySelector('nav.navbar');

      const navbarHeight = navbar?.clientHeight || 0;

      this.elementRef.nativeElement.style.position = 'relative';

      if (offset > navbarHeight) {
        this.elementRef.nativeElement.style.top =
          offset - navbarHeight - 5 + 'px';
        this.elementRef.nativeElement.style.height =
          window.innerHeight - 3 + 'px';
      } else {
        this.elementRef.nativeElement.style.top = '0px';
        this.elementRef.nativeElement.style.height =
          window.innerHeight - navbarHeight - 6 + 'px';
      }
    }
  }
}
