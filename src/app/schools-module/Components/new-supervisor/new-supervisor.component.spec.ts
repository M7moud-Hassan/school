import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSupervisorComponent } from './new-supervisor.component';

describe('NewSupervisorComponent', () => {
  let component: NewSupervisorComponent;
  let fixture: ComponentFixture<NewSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
