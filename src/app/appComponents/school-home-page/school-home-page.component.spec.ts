import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolHomePageComponent } from './school-home-page.component';

describe('SchoolHomePageComponent', () => {
  let component: SchoolHomePageComponent;
  let fixture: ComponentFixture<SchoolHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
