import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyPageComponent } from './ProxyPageComponent';

describe('ProxyPageComponent', () => {
  let component: ProxyPageComponent;
  let fixture: ComponentFixture<ProxyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProxyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
