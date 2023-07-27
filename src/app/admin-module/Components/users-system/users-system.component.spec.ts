import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSystemComponent } from './users-system.component';

describe('UsersSystemComponent', () => {
  let component: UsersSystemComponent;
  let fixture: ComponentFixture<UsersSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
