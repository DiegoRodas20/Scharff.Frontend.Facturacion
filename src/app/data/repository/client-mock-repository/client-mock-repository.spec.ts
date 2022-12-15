import { inject, TestBed } from '@angular/core/testing';

import { ClientMockRepository } from './client-mock.repository';

describe('ClientRepositoryMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientMockRepository]
    });
  });

  it('should be created', inject([ClientMockRepository], (service: ClientMockRepository) => {
    expect(service).toBeTruthy();
  }));
});
