import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAskComponent } from './details-ask.component';

describe('DetailsAskComponent', () => {
  let component: DetailsAskComponent;
  let fixture: ComponentFixture<DetailsAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
