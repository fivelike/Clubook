import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCardComponent } from './circle-card.component';

describe('CircleCardComponent', () => {
  let component: CircleCardComponent;
  let fixture: ComponentFixture<CircleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
