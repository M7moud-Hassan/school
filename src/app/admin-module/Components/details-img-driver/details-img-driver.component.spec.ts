import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsImgDriverComponent } from './details-img-driver.component';

describe('DetailsImgDriverComponent', () => {
  let component: DetailsImgDriverComponent;
  let fixture: ComponentFixture<DetailsImgDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsImgDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsImgDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
