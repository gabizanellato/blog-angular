/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlltransfersService } from './alltransfers.service';

describe('Service: Alltransfers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlltransfersService]
    });
  });

  it('should ...', inject([AlltransfersService], (service: AlltransfersService) => {
    expect(service).toBeTruthy();
  }));
});
