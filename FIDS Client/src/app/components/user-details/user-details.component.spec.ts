import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userDetailsComponent } from './user-details.component';

describe('userDetailsComponent', () => {
  let component: userDetailsComponent;
  let fixture: ComponentFixture<userDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(userDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
