import { TestBed } from '@angular/core/testing';

import { TopicCategoryService } from './topic-category.service';

describe('TopicCategoryService', () => {
  let service: TopicCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
