import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section7ContactUsComponent } from './section7-contact-us.component';

describe('Section7ContactUsComponent', () => {
  let component: Section7ContactUsComponent;
  let fixture: ComponentFixture<Section7ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section7ContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section7ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
