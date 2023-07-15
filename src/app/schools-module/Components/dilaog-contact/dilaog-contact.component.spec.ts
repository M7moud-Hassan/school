import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilaogContactComponent } from './dilaog-contact.component';

describe('DilaogContactComponent', () => {
  let component: DilaogContactComponent;
  let fixture: ComponentFixture<DilaogContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DilaogContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DilaogContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
