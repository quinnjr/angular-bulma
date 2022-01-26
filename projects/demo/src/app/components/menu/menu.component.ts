import { Component } from '@angular/core';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(public readonly navigationService: NavigationService) {}
}
