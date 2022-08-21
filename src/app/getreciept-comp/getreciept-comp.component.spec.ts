import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrecieptCompComponent } from './getreciept-comp.component';

describe('GetrecieptCompComponent', () => {
  let component: GetrecieptCompComponent;
  let fixture: ComponentFixture<GetrecieptCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetrecieptCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetrecieptCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
