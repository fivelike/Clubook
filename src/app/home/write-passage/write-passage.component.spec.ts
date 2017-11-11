import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritePassageComponent } from './write-passage.component';

describe('WritePassageComponent', () => {
  let component: WritePassageComponent;
  let fixture: ComponentFixture<WritePassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritePassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritePassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
