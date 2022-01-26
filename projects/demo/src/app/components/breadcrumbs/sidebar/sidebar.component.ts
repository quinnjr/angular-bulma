import { Component } from '@angular/core';
import { NavigationService } from '../../../navigation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(public readonly navigationService: NavigationService) {}
}
