import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section5DownloadAppComponent } from './section5-download-app.component';

describe('Section5DownloadAppComponent', () => {
  let component: Section5DownloadAppComponent;
  let fixture: ComponentFixture<Section5DownloadAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section5DownloadAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section5DownloadAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
