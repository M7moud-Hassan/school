import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchoolProxyComponent } from './add-school-proxy.component';

describe('AddSchoolProxyComponent', () => {
  let component: AddSchoolProxyComponent;
  let fixture: ComponentFixture<AddSchoolProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSchoolProxyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSchoolProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
