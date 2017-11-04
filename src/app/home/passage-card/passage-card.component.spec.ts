import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageCardComponent } from './passage-card.component';

describe('PassageCardComponent', () => {
  let component: PassageCardComponent;
  let fixture: ComponentFixture<PassageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
