import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public activeFragment: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private readonly $route: ActivatedRoute) {
    this.$route.fragment.subscribe((fragment) => {
      if (!fragment) {
        this.activeFragment.next('');
      } else {
        this.activeFragment.next(fragment);
      }
    });
  }
}
