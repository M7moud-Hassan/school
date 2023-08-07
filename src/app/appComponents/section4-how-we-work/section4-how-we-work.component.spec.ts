import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section4HowWeWorkComponent } from './section4-how-we-work.component';

describe('Section4HowWeWorkComponent', () => {
  let component: Section4HowWeWorkComponent;
  let fixture: ComponentFixture<Section4HowWeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section4HowWeWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section4HowWeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
