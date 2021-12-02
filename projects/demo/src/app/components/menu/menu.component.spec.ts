import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  BulmaNavbarModule,
  BulmaMenuModule
} from '../../../../../components/src/public-api';
import { CodeSnippetComponent } from '../../code-snippet/code-snippet.component';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulmaMenuModule, BulmaNavbarModule],
      declarations: [MenuComponent, CodeSnippetComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
