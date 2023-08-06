import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3TargetersComponent } from './section3-targeters.component';

describe('Section3TargetersComponent', () => {
  let component: Section3TargetersComponent;
  let fixture: ComponentFixture<Section3TargetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section3TargetersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section3TargetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
