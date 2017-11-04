import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleListComponent } from './circle-list.component';

describe('CircleListComponent', () => {
  let component: CircleListComponent;
  let fixture: ComponentFixture<CircleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
