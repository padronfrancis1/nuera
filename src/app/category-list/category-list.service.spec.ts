/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryListService } from './category-list.service';

describe('CategoryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryListService]
    });
  });

  it('should ...', inject([CategoryListService], (service: CategoryListService) => {
    expect(service).toBeTruthy();
  }));
});
