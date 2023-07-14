import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsLayoutComponent } from './schools-layout.component';

describe('SchoolsLayoutComponent', () => {
  let component: SchoolsLayoutComponent;
  let fixture: ComponentFixture<SchoolsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
