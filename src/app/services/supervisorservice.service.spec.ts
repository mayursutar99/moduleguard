import { TestBed } from '@angular/core/testing';

import { SupervisorserviceService } from './supervisorservice.service';

describe('SupervisorserviceService', () => {
  let service: SupervisorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupervisorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
