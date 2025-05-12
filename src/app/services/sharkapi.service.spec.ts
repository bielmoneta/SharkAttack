import { TestBed } from '@angular/core/testing';

import { SharkapiService } from './sharkapi.service';

describe('SharkapiService', () => {
  let service: SharkapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharkapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
