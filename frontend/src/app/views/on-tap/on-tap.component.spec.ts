import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTapComponent } from './on-tap.component';

describe('OnTapComponent', () => {
  let component: OnTapComponent;
  let fixture: ComponentFixture<OnTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
