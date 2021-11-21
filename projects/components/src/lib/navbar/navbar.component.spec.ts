import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaNavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: BulmaNavbarComponent;
  let fixture: ComponentFixture<BulmaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulmaNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
