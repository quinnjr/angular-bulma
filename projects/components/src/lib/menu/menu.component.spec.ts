import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: BulmaMenuComponent;
  let fixture: ComponentFixture<BulmaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulmaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
