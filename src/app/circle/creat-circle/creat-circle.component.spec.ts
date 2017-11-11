import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCircleComponent } from './creat-circle.component';

describe('CreatCircleComponent', () => {
  let component: CreatCircleComponent;
  let fixture: ComponentFixture<CreatCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
