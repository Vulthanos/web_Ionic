import { TestBed } from '@angular/core/testing';

import { UserAutenticationService } from './user-autentication.service';

describe('UserAutenticationService', () => {
  let service: UserAutenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAutenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
