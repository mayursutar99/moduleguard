import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { supervisorauthGuard } from './supervisorauth.guard';

describe('supervisorauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => supervisorauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
