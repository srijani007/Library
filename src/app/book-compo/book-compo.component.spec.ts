import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCompoComponent } from './book-compo.component';

describe('BookCompoComponent', () => {
  let component: BookCompoComponent;
  let fixture: ComponentFixture<BookCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
