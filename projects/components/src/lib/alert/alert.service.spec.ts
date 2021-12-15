import { TestBed } from '@angular/core/testing';

import { BulmaDefaultAlertService } from './alert.service';

describe('AlertService', () => {
  let service: BulmaDefaultAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulmaDefaultAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
