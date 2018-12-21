import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriRamComponent } from './shri-ram.component';

describe('ShriRamComponent', () => {
  let component: ShriRamComponent;
  let fixture: ComponentFixture<ShriRamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShriRamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShriRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
