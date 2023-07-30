import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProxiyComponent } from './add-proxiy.component';

describe('AddProxiyComponent', () => {
  let component: AddProxiyComponent;
  let fixture: ComponentFixture<AddProxiyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProxiyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProxiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
