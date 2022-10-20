import { ComponentFixture, TestBed } from '@angular/core/testing';

import { usersListComponent } from './users-list.component';

describe('usersListComponent', () => {
  let component: usersListComponent;
  let fixture: ComponentFixture<usersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ usersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(usersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
