import { TestBed } from '@angular/core/testing';

import { AccountstatusServiceService } from './accountstatus-service.service';

describe('AccountstatusServiceService', () => {
  let service: AccountstatusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountstatusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
