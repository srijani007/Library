import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksearchCompComponent } from './booksearch-comp.component';

describe('BooksearchCompComponent', () => {
  let component: BooksearchCompComponent;
  let fixture: ComponentFixture<BooksearchCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksearchCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksearchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
