import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsHomePageComponent } from './schools-home-page.component';

describe('SchoolsHomePageComponent', () => {
  let component: SchoolsHomePageComponent;
  let fixture: ComponentFixture<SchoolsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
