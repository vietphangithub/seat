import { TestBed } from '@angular/core/testing';

import { VisitingService } from './visiting.service';

describe('VisitingService', () => {
  let service: VisitingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
