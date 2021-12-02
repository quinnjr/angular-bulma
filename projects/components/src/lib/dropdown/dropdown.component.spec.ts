import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaDropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: BulmaDropdownComponent;
  let fixture: ComponentFixture<BulmaDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulmaDropdownComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
