import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsProxyComponent } from './groups-proxy.component';

describe('GroupsProxyComponent', () => {
  let component: GroupsProxyComponent;
  let fixture: ComponentFixture<GroupsProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsProxyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
