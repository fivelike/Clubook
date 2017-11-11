import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCorporationComponent } from './creat-corporation.component';

describe('CreatCorporationComponent', () => {
  let component: CreatCorporationComponent;
  let fixture: ComponentFixture<CreatCorporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatCorporationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatCorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
