import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGuruwarComponent } from './nav-guruwar.component';

describe('NavGuruwarComponent', () => {
  let component: NavGuruwarComponent;
  let fixture: ComponentFixture<NavGuruwarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavGuruwarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGuruwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
