import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCategoryComponent } from './topic-category.component';

describe('TopicCategoryComponent', () => {
  let component: TopicCategoryComponent;
  let fixture: ComponentFixture<TopicCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
