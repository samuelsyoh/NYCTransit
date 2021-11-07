import { TestBed } from '@angular/core/testing';

import { UpdateService } from './update.service';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

describe('UpdateService', () => {
  let service: UpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
