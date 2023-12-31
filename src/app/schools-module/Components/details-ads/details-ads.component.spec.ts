import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAdsComponent } from './details-ads.component';

describe('DetailsAdsComponent', () => {
  let component: DetailsAdsComponent;
  let fixture: ComponentFixture<DetailsAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
