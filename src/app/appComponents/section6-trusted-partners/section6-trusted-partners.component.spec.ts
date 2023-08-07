import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section6TrustedPartnersComponent } from './section6-trusted-partners.component';

describe('Section6TrustedPartnersComponent', () => {
  let component: Section6TrustedPartnersComponent;
  let fixture: ComponentFixture<Section6TrustedPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section6TrustedPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section6TrustedPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
