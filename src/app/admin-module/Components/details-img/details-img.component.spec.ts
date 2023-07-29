import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsImgComponent } from './details-img.component';

describe('DetailsImgComponent', () => {
  let component: DetailsImgComponent;
  let fixture: ComponentFixture<DetailsImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
