import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulmaCarouselModule } from '.';

import { BulmaCarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: BulmaCarouselComponent;
  let fixture: ComponentFixture<BulmaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BulmaCarouselModule ],
      declarations: [ BulmaCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
