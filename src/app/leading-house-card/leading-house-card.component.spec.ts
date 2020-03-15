import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingHouseCardComponent } from './leading-house-card.component';

describe('LeadingHouseCardComponent', () => {
  let component: LeadingHouseCardComponent;
  let fixture: ComponentFixture<LeadingHouseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadingHouseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadingHouseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
