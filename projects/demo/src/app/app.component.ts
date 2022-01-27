import { isPlatformBrowser } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ThemesService } from './themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, AfterViewInit {
  @ViewChild('stylesheet') public stylesheet!: ElementRef<any>;

  public concepts = ['installation', 'configuration'];

  public components = [
    'breadcrumb',
    'card',
    'carousel',
    'dropdown',
    'footer',
    'hero',
    'icon',
    'level',
    'media-object',
    'menu',
    'message',
    'modal',
    'navbar',
    'pagination',
    'panel',
    'tabs'
  ];

  public elements = ['image'];

  public directives = [
    'colors',
    'flexbox',
    'other',
    'spacing',
    'typography',
    'visibility'
  ];

  public isDropdownActive = false;

  public scrollable?: string;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly route: ActivatedRoute,
    private readonly elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
    private readonly $themesService: ThemesService
  ) {}

  public get themesKeys(): Observable<string[]> {
    return this.$themesService.themes.pipe(
      map((themes) => Array.from(themes.keys()))
    );
  }

  public ngAfterViewInit() {
    this.cdr.detectChanges();
    this.route.fragment.subscribe((fragment) => {
      if (isPlatformBrowser(this.platformId) && fragment) {
        document.getElementById(fragment)?.scrollIntoView();
      }
    });
  }

  public ngAfterContentInit() {
    this.cdr.detectChanges();
  }

  public changeStylesheet(key: string) {
    this.$themesService.themes.subscribe((themes) => {
      this.stylesheet.nativeElement.href = themes.get(key);
    });
  }
}
