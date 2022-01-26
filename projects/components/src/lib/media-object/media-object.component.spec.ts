import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMediaObjectComponent } from './media-object.component';

describe('MediaObjectComponent', () => {
  let component: BulmaMediaObjectComponent;
  let fixture: ComponentFixture<BulmaMediaObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulmaMediaObjectComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMediaObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
