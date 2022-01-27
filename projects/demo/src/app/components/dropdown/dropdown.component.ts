import { Component } from '@angular/core';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  constructor(public readonly navigationService: NavigationService) {}
}
