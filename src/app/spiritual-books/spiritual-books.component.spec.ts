import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritualBooksComponent } from './spiritual-books.component';

describe('SpiritualBooksComponent', () => {
  let component: SpiritualBooksComponent;
  let fixture: ComponentFixture<SpiritualBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritualBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritualBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
