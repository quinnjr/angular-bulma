import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: BulmaMessageComponent;
  let fixture: ComponentFixture<BulmaMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulmaMessageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
