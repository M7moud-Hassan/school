import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSupervisorsComponent } from './dialog-supervisors.component';

describe('DialogSupervisorsComponent', () => {
  let component: DialogSupervisorsComponent;
  let fixture: ComponentFixture<DialogSupervisorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSupervisorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
