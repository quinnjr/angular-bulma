import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMenuListComponent } from './menu-list.component';

describe('MenuListComponent', () => {
  let component: BulmaMenuListComponent;
  let fixture: ComponentFixture<BulmaMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulmaMenuListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
