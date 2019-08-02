/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemsListService } from './items-list.service';

describe('ItemsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsListService]
    });
  });

  it('should ...', inject([ItemsListService], (service: ItemsListService) => {
    expect(service).toBeTruthy();
  }));
});
