import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsCompComponent } from './userDetails-comp.component';

describe('UserDetailsCompComponent', () => {
  let component: UserDetailsCompComponent;
  let fixture: ComponentFixture<UserDetailsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
