import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBooksCompComponent } from './author-books-comp.component';

describe('AuthorBooksCompComponent', () => {
  let component: AuthorBooksCompComponent;
  let fixture: ComponentFixture<AuthorBooksCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorBooksCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorBooksCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
