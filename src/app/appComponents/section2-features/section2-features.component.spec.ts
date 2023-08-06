import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2FeaturesComponent } from './section2-features.component';

describe('Section2FeaturesComponent', () => {
  let component: Section2FeaturesComponent;
  let fixture: ComponentFixture<Section2FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section2FeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section2FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
